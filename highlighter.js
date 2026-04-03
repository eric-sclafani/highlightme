const onMouseUp = () => {
	const sel = window.getSelection();

	if (sel != null && sel.toString() != '') {
		const span = document.createElement('span');
		span.style.backgroundColor = 'rgb(255,255,0, 0.4)';
		span.className = 'custom-selection';

		const range = sel.getRangeAt(0);
		try {
			range.surroundContents(span);
		} catch (e) {
			console.error(
				'Selection crosses multiple nodes; cannot surround.',
				e,
			);
		}
	}
};

document.addEventListener('mouseup', onMouseUp);
