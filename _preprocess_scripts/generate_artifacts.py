import yaml
from pathlib import Path
import sys

def create_frontmatter(artifact):
    """Create front matter section for artifact page"""
    return f"""---
layout: {artifact['layout']}
title: "{artifact['title']}"
image: "{artifact.get('image', '')}"
order: {artifact.get('order', 9999)}
featured: {str(artifact.get('featured', False)).lower()}
---"""

def generate_artifact_pages(yaml_path):
    try:
        yaml_path = Path(yaml_path).resolve()
        print(f"Reading YAML from: {yaml_path}")
        
        with open(yaml_path, 'r', encoding='utf-8') as file:
            artifacts = yaml.safe_load(file)
            
        if not artifacts:
            print("Error: No artifacts found in YAML file")
            return
            
        output_dir = Path('../_artifacts').resolve()
        output_dir.mkdir(exist_ok=True)
        print(f"Creating artifact pages in: {output_dir}")
        
        for artifact in artifacts:
            try:
                filename = f"{artifact['title'].lower().replace(' ', '-')}.md"
                output_path = output_dir / filename
                
                # Generate content by combining front matter and body
                frontmatter = create_frontmatter(artifact)
                # Remove pipe and de-indent content
                content = artifact.get('content', '').strip()
                if content.startswith('|'):
                    content = content.replace('|\n  ', '\n').replace('\n  ', '\n')
                full_content = f"{frontmatter}\n\n{content}"
                
                with open(output_path, 'w', encoding='utf-8') as f:
                    f.write(full_content)
                
                print(f"Generated: {filename}")
                
            except KeyError as e:
                print(f"Error processing artifact: Missing required field {e}")
            except Exception as e:
                print(f"Error processing artifact '{artifact.get('title', 'unknown')}': {e}")
                
    except FileNotFoundError:
        print(f"Error: Could not find YAML file at {yaml_path}")
    except yaml.YAMLError as e:
        print(f"Error parsing YAML: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")

if __name__ == "__main__":
    script_dir = Path(__file__).parent
    yaml_path = script_dir / "../_data/artifacts.yml"
    generate_artifact_pages(yaml_path)