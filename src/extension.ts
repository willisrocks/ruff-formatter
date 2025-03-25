import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('ruff-formatter.formatCurrentFile', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('No active editor found');
			return;
		}

		const filePath = editor.document.uri.fsPath;
		const fileExtension = filePath.split('.').pop()?.toLowerCase();

		if (fileExtension !== 'py') {
			vscode.window.showErrorMessage('Not a Python file');
			return;
		}

		// Save the file first
		editor.document.save().then(() => {
			// Create output channel to show command results
			const outputChannel = vscode.window.createOutputChannel('Ruff Formatter');
			outputChannel.show();
			outputChannel.appendLine('Running ruff on: ' + filePath);

			// Run the three ruff commands in sequence
			const command = `ruff check "${filePath}" --fix && ruff check "${filePath}" --select I --fix && ruff format "${filePath}"`;

			exec(command, (error, stdout, stderr) => {
				if (error) {
					outputChannel.appendLine('Error: ' + error.message);
					return;
				}
				if (stderr) {
					outputChannel.appendLine('Stderr: ' + stderr);
				}
				if (stdout) {
					outputChannel.appendLine('Output: ' + stdout);
				}
				outputChannel.appendLine('Ruff formatting completed successfully');

				// Refresh the document
				vscode.window.showTextDocument(editor.document);
			});
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }