document.addEventListener('DOMContentLoaded', function() {
	const postList = document.getElementById('post-list');
	const postContent = document.getElementById('post-content');
	
	// 포스트 목록 로드
	fetch('./posts/list.json')
	.then(response => response.json())
	.then(posts => {
			postList.innerHTML = '';
			posts.forEach(post => {
				const li = document.createElement('li');
				const link = document.createElement('a');
				link.href = `#${post.id}`;
				link.textContent = post.id;
				li.appendChild(link);
				postList.appendChild(li);
			});

			// 초기 로드 시 또는 해시 변경 시 포스트 로드
			window.addEventListener('hashchange', loadPostFromHash);
			loadPostFromHash();
		});

		// 해시에 따라 포스트 로드
		function loadPostFromHash() {
			const postId = window.location.hash.slice(1); // '#' 제거
			if (postId) {
				loadPost(`${postId}.md`);
			}
		}

	// 포스트 로드 함수
	function loadPost(filename) {
		fetch(`posts/${filename}`)
			.then(response => response.text())
			.then(markdown => {
				postContent.innerHTML = marked.parse(markdown);
			});
	}
});
