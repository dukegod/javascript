// session example

function saveStorage(id){
	var target = document.getElementById('input');
	var str = target.value;
	sessionStorage.setItem('message',str)
}

function loadStorage(id){
	var target = document.getElementById('msg');
	var msg = sessionStorage.getItem('message');
	target.innerHTML = msg;
}
