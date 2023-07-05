function controlHist(ele){

	var element_classes = ele.classList

	var classes = []
	
	for (var i = 0; i < element_classes.length; i++) {
		classes.push(element_classes[i])
	}

	if(classes.includes("inactive-hist")){

		ele.classList.remove("inactive-hist")

		var hist = document.querySelectorAll("."+classes[1].split("-")[1])

		for (var i = 0; i < hist.length; i++) {
			hist[i].style.width = "90%"
		}

	}else{

		ele.classList.add("inactive-hist")

		var hist = document.querySelectorAll("."+classes[1].split("-")[1])

		for (var i = 0; i < hist.length; i++) {
			hist[i].style.width = "0%"
		}

	}

}