// session example

function saveStorage2(id){
	var target = document.getElementById('input2');
	var str = target.value;
	localStorage.setItem('messagelocal',str)
}

function loadStorage2(id){
	var target = document.getElementById('msg2');
	var msg = localStorage.getItem('messagelocal');
	target.innerHTML = msg;
}
