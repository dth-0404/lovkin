function animationIn() {
	var nav = document.getElementById("navBar");
	nav.classList.add("navbar-in");
	nav.classList.remove("navbar-out");
	document.getElementById("btn-1").classList.remove("d-block");
	document.getElementById("btn-1").classList.add("d-none");
	document.getElementById("btn-2").classList.remove("d-none");
	document.getElementById("btn-2").classList.add("d-block");
}

function animationOut() {
	var nav = document.getElementById("navBar");
	nav.classList.add("navbar-out");
	nav.classList.remove("navbar-in");
	document.getElementById("btn-2").classList.remove("d-block");
	document.getElementById("btn-2").classList.add("d-none");
	document.getElementById("btn-1").classList.remove("d-none");
	document.getElementById("btn-1").classList.add("d-block");
}