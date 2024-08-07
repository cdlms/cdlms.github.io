Page_me = document.querySelector('#Page_me');
Page_dev = document.querySelector('#Page_dev');
Page_game = document.querySelector('#Page_game');

iframe = document.querySelector('#iframe');

Page_me.addEventListener('click', function() {
	iframe.src = 'cdlms.html'
});

Page_dev.addEventListener('click', function() {
	iframe.src = 'dev.html'
});

Page_game.addEventListener('click', function() {
	iframe.src = 'game.html'
});

document.addEventListener('DOMContentLoaded', function() {
	const postList = document.getElementById('post-list');
	const postContent = document.getElementById('post-content');
  
	// 포스트 목록 로드
	fetch('posts/list.json')
		.then(response => response.json())
		.then(posts => {
			posts.forEach(post => {
				const link = document.createElement('a');
				link.href = '#';
				link.textContent = post.title;
				link.addEventListener('click', (e) => {
					e.preventDefault();
					loadPost(post.file);
				});
				postList.appendChild(link);
			});
		});
  
	// 포스트 로드 함수
	function loadPost(filename) {
		fetch(`posts/${filename}`)
			.then(response => response.text())
			.then(markdown => {
				postContent.innerHTML = marked.parse(markdown);
			});
	}
  });
  
  