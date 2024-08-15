const modifyForm = document.querySelector("#modifyForm");
const modifyFormList = document.querySelectorAll("#modifyForm > div");
const idx = location.search;
const index = location.search.split("=")[1];
const boardsObj = JSON.parse(localStorage.getItem("boards"));
const board = boardsObj[index];

for (let i = 0; i < modifyFormList.length; ++i) {
	const element = modifyFormList[i].childNodes[1];
	const id = element.nodeName;
	element.value = board[id];
}

const isEmpty = (subject, writer, content) => {
	if (subject.length == 0)
		throw new Error("제목.");
	if (writer.length == 0)
		throw new Error("작성자.");
	if (content.length == 0)
		throw new Error("내용.");
}

const modifyHandler = (e) => {
	e.preventDefault();
	const subject = e.target.subject.value;
	const writer = e.target.writer.value;
	const content = e.target.content.value;

	try {
		isEmpty(subject, writer, content);
		board.subject = subject;
		board.writer = writer;
		board.content = content;

		const boardsStr = JSON.stringify(boardsObj);
		localStorage.setItem("boards", boardsStr);
		location.href = "/board/view.html" + idx;
	} catch (e) {
		alert(e.message);
		console.error(e);
	}
};

modifyForm.addEventListener("submit", modifyHandler);

// console.log(modifyForm);
// console.log(modifyFormList);