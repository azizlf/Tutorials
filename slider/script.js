var slides = [

	{
		title:"Lorem ipsum dolor",
		phrase:"Lorem ipsum dolor sit amet",
		details:`Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscin Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing`,
		image:"image2.jpg"
	},
	{
		title:"Lorem dolor ipsum",
		phrase:"Lorem ipsum dolor sit amet, consectetur adipiscing",
		details:`Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscin Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing`,
		image:"image2.webp"
	},
	{
		title:"dolor Lorem ipsum",
		phrase:"Lorem ipsum dolor sit amet, consectetur adipiscing",
		details:`Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscin Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing`,
		image:"image3.jpg"
	},
	{
		title:"dolor ipsum Lorem",
		phrase:"Lorem ipsum dolor sit amet, consectetur adipiscing",
		details:`Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscin Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing`,
		image:"image4.jpg"
	}

]

var index = 0

function setSlide(i){

	document.querySelector(".title-slide").style.display = "none"
	document.querySelector(".background-image").style.backgroundImage = "url('"+slides[i].image+"')"
	document.querySelector(".title-slide").innerText = slides[i].title
	document.querySelector(".txt").innerText = slides[i].phrase
	document.querySelector(".text").innerText = slides[i].details
	setTimeout(()=>{
		document.querySelector(".title-slide").style.display = "block"
	},200)
	document.querySelector(".details").style.bottom = "-6%"
	document.querySelector(".spr").style.width = "30%"
	document.querySelector(".more-btn").style.display = "block"
	document.querySelector(".text").style.display = "none"
	document.querySelector(".hide-btn").style.display = "none"

}

document.querySelector(".left").addEventListener("click",()=>{

	if(index > 0){
		index--
		setSlide(index)
	}

})

document.querySelector(".right").addEventListener("click",()=>{

	if(index < slides.length-1){
		index++
		setSlide(index)
	}

})

document.querySelector(".more-btn").addEventListener("click",()=>{

	document.querySelector(".details").style.bottom = "0%"
	document.querySelector(".spr").style.width = "100%"
	document.querySelector(".more-btn").style.display = "none"
	document.querySelector(".text").style.display = "block"
	document.querySelector(".hide-btn").style.display = "block"

})

document.querySelector(".hide-btn").addEventListener("click",()=>{

	document.querySelector(".details").style.bottom = "-6%"
	document.querySelector(".spr").style.width = "30%"
	document.querySelector(".more-btn").style.display = "block"
	document.querySelector(".text").style.display = "none"
	document.querySelector(".hide-btn").style.display = "none"

})

// on start

setSlide(index)