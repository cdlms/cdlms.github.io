let boardsStr = localStorage.getItem("boards");
const boardsObj = JSON.parse(boardsStr);

const idx = location.search;
const index = idx.split("=")[1];
const board = boardsObj[index];

const beforeUrl = document.referrer;

//https://cloudcoke.tistory.com/33?category=1058076
const viewCount = (beforeUrl) => {
	if (beforeUrl.split("/").pop() == "list.html") {
		// board.views++;
		const viewCountStr = JSON.stringify(boardsObj);
		localStorage.setItem("boards", viewCountStr);
	}
};

viewCount(beforeUrl);

const viewForm = document.querySelectorAll("#viewForm > div");

for (let i = 0; i < viewForm.length; ++i) {
	const id = viewForm[i].id;
	viewForm[i].innerHTML += " " + board[id];
}

const modifyBtn = document.querySelector("#modify");

const modifyBtnHandler = (e) => {
	location = "/board/modify.html" + idx;
}

modifyBtn.addEventListener("click", modifyBtnHandler);
