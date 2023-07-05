// create class named Chart

class Chart{

	chart = null

	types = ["fir","sec","thr"]

	constructor(props){

		this.chart = props

	}

	createControls(){
		
		var parent = document.querySelector(".controls-btns")


		for (var i = 0; i < this.chart.contentGrapghic.length; i++) {

			var html = `<div class="btn b-${this.types[i]}" onclick="controlHist(this)"></div>`

			parent.innerHTML += html

		}
	}

	createIndicators(){

		var parent = document.querySelector(".indicators")


		for (var i = 0; i < this.chart.contentGrapghic.length; i++) {
			
			var container = document.createElement("div")


			container.innerHTML = `<div class="item it-${this.types[i]}">
									<div class="title">${this.chart.contentGrapghic[i]}</div>
									<div class="ind"></div>
								</div>`

			parent.appendChild(container)

		}

	}
	createAxeY(){

		var parent = document.querySelector(".numbers")

		var y = []

		// limite at 5 element in axe y

		for (var i = 0; i < this.chart.axeY.length; i++) {
			
			if(i < 6){

				y.push(this.chart.axeY[i])

			}

		}

		for (var i = y.length-1; i >= 0; i--) {
			
			var container = document.createElement("div")

			container.setAttribute("class","axe-sect")

			if(i === 0){
				container.setAttribute("class","axe-sect zero")
			}

			container.innerText = y[i]+"%"

			parent.appendChild(container)

		}

	}
	createAxeX(){

		var parent = document.querySelector(".titles-X")

		for (var i = 0; i < this.chart.axeX.length; i++) {
			if(i < 12){
				var container = document.createElement("div")

				container.setAttribute("class","axe-sect")

				container.innerText = this.chart.axeX[i].title

				parent.appendChild(container)
			}

		}

	}

	createHist(type,parent,lvl){

		var hist = `<div class="hist ${type}" style="height: ${lvl};"></div>`

		parent.innerHTML += hist

	}


	createHistContainer(){
		var parent = document.querySelector(".hist-container")

		

		for (var i = 0; i < this.chart.axeX.length; i++) {
			
			if(i < 12){
				var container = document.createElement("div")

				container.setAttribute("class","hist-flex")

				for (var j = 0; j < this.chart.axeX[i].data.length; j++) {
					this.createHist(this.types[j],container,this.chart.axeX[i].data[j])
				}

				parent.appendChild(container)
			}

		}


	}




	init(){
		document.querySelector(".graphic-title").innerText = this.chart.graphicTitle
		this.createControls()
		this.createIndicators()
		this.createAxeY()
		this.createAxeX()
		this.createHistContainer()
	}


}