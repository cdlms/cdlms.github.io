const writeForm = document.querySelector("#writeForm");

class Board {
	constructor(indexNum, subjectStr, writerStr, contentStr) {
		this.index = indexNum;
		this.Subject = subjectStr;
		this.Writer = writerStr;
		this.Content = contentStr;
		this.date = recordDate();
		this.time = recordTime();
	}

	set Subject(value) {
		if (value.length == 0)
			throw new Error("제목.");
		this.subject = value;
	}

	set Writer(value) {
		if (value.length == 0)
			throw new Error("작성자.");
		this.writer = value;
	}

	set Content(value) {
		if (value.length == 0)
			throw new Error("내용.");
		this.content = value;
	}
}

recordDate = () => {
	const date = new Date();
	const yyyy = date.getFullYear();
	let mm = date.getMonth() + 1;
	let dd = date.getDate() + 1;

	mm = (mm > 9 ? "" : 0) + mm;
	dd = (dd > 9 ? "" : 0) + dd;
	const arr = [yyyy, mm, dd];
	return arr.join("-");
};

recordTime = () => {
	const time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes() + 1;

	hour = (hour > 9 ? "" : 0) + hour;
	min = (min > 9 ? "" : 0) + min;
	const arr = [hour, min];
	return arr.join(":");
};

const submitHandler = (e) => {
	e.preventDefault();
	const subject = e.target.subject.value;
	const writer = e.target.writer.value;
	const content = e.target.content.value;

	try {
		// boards 가져오기
		const boardsObj = JSON.parse(localStorage.getItem("boards"));

		// 객체 추가
		const index = boardsObj.length;
		const instance = new Board(index, subject, writer, content);
		boardsObj.push(instance);

		// boards 저장
		const boardsStr = JSON.stringify(boardsObj);
		localStorage.setItem("boards", boardsStr);
		location.href = "/board/view.html?index=" + index;
	} catch (e) {
		alert(e.message);
		console.error(e);
	}
};

writeForm.addEventListener("submit", submitHandler);
