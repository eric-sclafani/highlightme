let allTextSelections = [];
let currentSelection = null;

const onSelectionChange = () => {
	const selection = window.getSelection();
	const selectedText = selection.toString();
	if (selectedText.length > 0) {
		currentSelection = selectedText;
	}
};

const onMouseUp = () => {
	if (currentSelection != '' && currentSelection != null) {
		allTextSelections.push(currentSelection);
		currentSelection = null;
		console.log('Text selections: ', allTextSelections);
	}
};

document.addEventListener('selectionchange', onSelectionChange);
document.addEventListener('mouseup', onMouseUp);
