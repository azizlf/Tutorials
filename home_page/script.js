var menuIsOpen = false

document.querySelector(".menu-btn").addEventListener("click",()=>{

	if(menuIsOpen){

		document.querySelector(".menu-btn").innerHTML = '<i class="fa-solid fa-bars"></i>'
		document.querySelector(".side-bar").style.opacity = "0"
		document.querySelector(".side-bar").style.pointerEvents = "none"
		menuIsOpen = false

	}else{

		document.querySelector(".menu-btn").innerHTML = '<i class="fa-solid fa-xmark"></i>'
		document.querySelector(".side-bar").style.opacity = "1"
		document.querySelector(".side-bar").style.pointerEvents = "all"
		menuIsOpen = true

	}

})