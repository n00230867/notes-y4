const { App, Plugin, PluginSettingTab, Setting, Modal, Notice } = require("obsidian");

const DEFAULT_SETTINGS = {
	color1: "#ff5555",
	color2: "#f1fa8c",
	color3: "#50fa7b",
	color4: "#8be9fd",
	color5: "#bd93f9",
	color6: "#ff79c6",
	color7: "#ffb86c",
	color8: "#ffffff",
};

module.exports = class LowlightPlugin extends Plugin {
	async onload() {
		console.log("Lowlight plugin loading...");

		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());

		this.addCommand({
			id: "lowlight-select-color",
			name: "Highlight selected text",
			editorCallback: (editor) => {
				const selection = editor.getSelection();
				if (!selection || selection.length === 0) {
					new Notice("No text selected.");
					return;
				}

				new ColorPickerModal(this.app, this.settings, (chosenColor) => {
					const wrapped = `<span style="color: ${chosenColor}">${selection}</span>`;
					editor.replaceSelection(wrapped);
				}).open();
			},
		});

		this.addSettingTab(new LowlightSettingTab(this.app, this));
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
};

class ColorPickerModal extends Modal {
	constructor(app, settings, onChoose) {
		super(app);
		this.settings = settings;
		this.onChoose = onChoose;
	}

	onOpen() {
		let { contentEl } = this;

		contentEl.createEl("h2", { text: "Choose highlight colour" });

		Object.entries(this.settings).forEach(([key, value]) => {
			const button = contentEl.createEl("button", {
				text: value,
			});
			button.style.backgroundColor = value;
			button.style.padding = "8px";
			button.style.margin = "5px";
			button.style.borderRadius = "4px";

			button.onclick = () => {
				this.onChoose(value);
				this.close();
			};
		});
	}

	onClose() {
		this.contentEl.empty();
	}
}

class LowlightSettingTab extends PluginSettingTab {
	constructor(app, plugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display() {
		const { containerEl } = this;

		containerEl.empty();
		containerEl.createEl("h2", { text: "Lowlight Settings" });

		for (let i = 1; i <= 8; i++) {
			new Setting(containerEl)
				.setName(`Highlighter color ${i}`)
				.setDesc("Hex code (e.g., #ff0000)")
				.addText((text) => {
					text
						.setValue(this.plugin.settings[`color${i}`])
						.onChange(async (value) => {
							this.plugin.settings[`color${i}`] = value;
							await this.plugin.saveSettings();
						});
				});
		}
	}
}

/* nosourcemap */