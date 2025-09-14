import csv
import yaml
from pathlib import Path

def convert_csv_to_yaml(csv_path, yaml_path):
    artifacts = []
    
    with open(csv_path, 'r', encoding='utf-8-sig') as csv_file:
        reader = csv.DictReader(csv_file)
        for row in reader:
            # Generate image paths from filename
            filename = Path(row['filename']).stem if 'filename' in row else ''
            image_path = f"/assets/images/artifacts/thumb/{filename}.webp" if filename else ''
            
            # Create artifact entry
            artifact = {
                'layout': row['layout'],
                'title': row['title'],
                'image': image_path,
                'order': int(row['order']) if row['order'] else 9999,
                'featured': str(row['featured']).lower() == 'true',
            }
            
            # Handle content field with proper multi-line formatting using pipe
            if 'content' in row and row['content']:
                content = row['content'].strip()
                # Clean up image paths
                if filename and '![' in content:
                    full_path = f"/assets/images/artifacts/full/{filename}.webp"
                    # Fix any double paths
                    content = content.replace('/artifacts/originals//assets/images/', '/assets/images/')
                    content = content.replace(row['filename'], full_path)
                content_lines = content.split('\n')
                indented_content = '\n  '.join(content_lines)
                artifact['content'] = f"|\n  {indented_content}"
            
            artifacts.append(artifact)
    
    with open(yaml_path, 'w', encoding='utf-8') as yaml_file:
        yaml.dump(
            artifacts,
            yaml_file,
            sort_keys=False,
            allow_unicode=True,
            default_flow_style=False,
            width=80,
            indent=2,
            explicit_start=True
        )

if __name__ == "__main__":
    script_dir = Path(__file__).parent
    yaml_path = script_dir / "../_data/artifacts.yml"
    csv_path = script_dir / "../_data/artifacts.csv"
    convert_csv_to_yaml(csv_path, yaml_path)