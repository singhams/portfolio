import yaml
from pathlib import Path

def cleanup_image_paths(yaml_path):
    # Read existing YAML
    with open(yaml_path, 'r', encoding='utf-8') as file:
        artifacts = yaml.safe_load(file)
    
    # Fix paths
    for artifact in artifacts:
        if 'image' in artifact:
            artifact['image'] = artifact['image'].replace('/thumb/thumb/', '/thumb/')
        if 'full_image' in artifact:
            artifact['full_image'] = artifact['full_image'].replace('/thumb/thumb/', '/thumb/')
    
    # Write back to file
    with open(yaml_path, 'w', encoding='utf-8') as file:
        yaml.dump(
            artifacts,
            file,
            sort_keys=False,
            allow_unicode=True,
            default_flow_style=False,
            width=80,
            indent=2,
            explicit_start=True
        )
    
    print("Path cleanup complete!")

if __name__ == "__main__":
    script_dir = Path(__file__).parent
    yaml_path = script_dir / "../_data/artifacts.yml"
    cleanup_image_paths(yaml_path)