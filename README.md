# Ruff Formatter

A simple VS Code extension that runs multiple Ruff commands on the current Python file to lint and format it in one step.

## Features

This extension provides a single command to run multiple Ruff operations on your Python files:

- `ruff check --fix`: Automatically fix linting issues
- `ruff check --select I --fix`: Fix import sorting
- `ruff format`: Format the file

Access the command through:

- Command Palette: `Ctrl+Shift+P` > "Ruff: Lint and Format Current File"
- Keyboard shortcut: `Ctrl+Alt+R` (Mac: `Cmd+Alt+R`)
- Right-click context menu on Python files

## Requirements

- VS Code 1.60.0 or higher
- [Ruff](https://docs.astral.sh/ruff/installation/) must be installed and available in your path

## Usage

1. Open a Python file in VS Code
2. Run the command using one of the methods mentioned above
3. The output will be shown in a dedicated output channel
4. The file will be automatically saved before formatting

## Extension Settings

This extension does not add any settings yet.

## Known Issues

None reported yet.

## Release Notes

### 0.0.1

Initial release of Ruff Formatter

- Added command to run multiple Ruff operations on the current file
- Added keyboard shortcut and context menu integration

---
