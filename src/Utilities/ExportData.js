export default function makeJsonFile({ data, fileName, fileType }) {
	const blob = new Blob([data], { type: fileType });
	const a = document.createElement("a");
	a.download = fileName;
	a.href = window.URL.createObjectURL(blob);
	const clickEvent = new MouseEvent("click", {
		view: window,
		bubbles: true,
		cancelable: true,
	});
	a.dispatchEvent(clickEvent);
	a.remove();
}
