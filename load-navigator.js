document.addEventListener('DOMContentLoaded', function() {
	fetch('/navigator.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById('navigator-placeholder').innerHTML = data;
		})
		.catch(error => console.error('Error loading navigator:', error));
	});
