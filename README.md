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

## Installation

### VS Code Marketplace

Coming soon.

### Manual Installation (VSIX)

1. Download the `.vsix` file from the [latest release](https://github.com/willisrocks/ruff-formatter/releases/latest)
2. Open VS Code
3. Go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X on macOS)
4. Click on the "..." menu (More Actions) at the top of the Extensions view
5. Select "Install from VSIX..."
6. Navigate to and select the downloaded `.vsix` file
7. Restart VS Code when prompted

### Building from Source

1. Clone the repository: `git clone https://github.com/willisrocks/ruff-formatter.git`
2. Install dependencies: `npm install`
3. Build the extension: `npm run compile`
4. Package it: `vsce package`
5. Follow the manual installation steps above with the generated `.vsix` file

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
