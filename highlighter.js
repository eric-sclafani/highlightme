let allSelections = [];

// grab inner text selection coords (start and end)
// grab inner text
// create span with highlight
// replace inner text selection with span
// ???
// profit!

const onMouseUp = () => {
	const sel = window.getSelection();

	if (sel != null && sel.toString() != '') {
		// allSelections.push(currentSelection);
		const start = sel.anchorOffset;
		const end = sel.focusOffset;

		if (start >= 0 && end >= 0) {
			console.log('start: ' + start);
			console.log('end: ' + end);
			console.log(sel.focusNode);
		}
	}
};

document.addEventListener('mouseup', onMouseUp);
