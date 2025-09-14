#!/bin/bash

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    python3 -m venv venv
    source venv/bin/activate
    pip install Pillow pyyaml
else
    source venv/bin/activate
fi

# Run the conversion and optimization scripts
python csv2yaml.py
python image_opt.py
python generate_artifacts.py

# Deactivate virtual environment
deactivate

echo "Artifact processing complete!"