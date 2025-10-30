import { MarkdownPostProcessor, MarkdownPreviewRenderer, Plugin } from 'obsidian';

export default class ParagraphToggle extends Plugin {
	
	async onload() {
		this.registerMarkdownPostProcessor((element) => {
			const content = element.innerHTML;
			element.innerHTML = content.replace(/\n/g,"</p><p>");
		})
	}

	onunload() {
	
	}

}
