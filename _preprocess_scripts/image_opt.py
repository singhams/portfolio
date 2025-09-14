from PIL import Image
from pathlib import Path

def optimize_image(image_path, output_dir, sizes, base_path):
    """Optimize an image into WebP format at different sizes"""
    print(f"Processing: {image_path}")
    with Image.open(image_path) as img:
        filename = Path(image_path).stem

        for size_name, max_size in sizes.items():
            # Calculate new dimensions
            ratio = min(max_size/max(img.size[0], img.size[1]), 1.0)
            new_size = tuple([int(dim * ratio) for dim in img.size])
            
            # Create size directory
            size_dir = output_dir / size_name
            size_dir.mkdir(exist_ok=True)
            
            # Resize image if needed
            resized = img.resize(new_size, Image.Resampling.LANCZOS) if ratio < 1.0 else img.copy()
            
            # Save WebP version
            webp_path = size_dir / f"{filename}.webp"
            resized.save(webp_path, 'WEBP', quality=85, optimize=True)
            
            # Print relative path for easy copying to markdown
            rel_path = webp_path.relative_to(base_path.parent)
            print(f"  {size_name}: {new_size}")
            print(f"    → {rel_path}")

def process_artifact_images(input_dir, output_dir):
    """Process all artifact images"""
    input_path = Path(input_dir)
    output_path = Path(output_dir)
    
    if not input_path.exists():
        print(f"Error: Input directory not found: {input_path}")
        return
    
    # Define image sizes
    sizes = {
        'thumb': 400,    # Gallery thumbnails
        'full': 1200,    # Full-size optimized
    }
    
    # Support for common image formats
    image_patterns = ['*.[jJ][pP][gG]', '*.[jJ][pP][eE][gG]', 
                     '*.[pP][nN][gG]', '*.[gG][iI][fF]']
    
    for pattern in image_patterns:
        for img_path in input_path.glob(pattern):
            optimize_image(img_path, output_path, sizes, output_path)

if __name__ == "__main__":
    input_dir = "../assets/images/artifacts/originals"
    output_dir = Path("../assets/images/artifacts")
    process_artifact_images(input_dir, output_dir)