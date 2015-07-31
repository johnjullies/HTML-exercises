var Slider = {
	current : 0,
	boxes : [],
	boxWidth: 0,
	makeSlide : function(caption, imageURL) {
		var box = document.getElementById("boxes");
		var newdiv = document.createElement("div");
		newdiv.setAttribute("class", "box-item");
		newdiv.setAttribute("translateVal","");
		newdiv.innerHTML = '<h3 class="caption">'+ caption +'</h3><img src="'+ imageURL +'">';
		box.appendChild(newdiv);
	},
	init : function(boxWidth){
		this.boxWidth = boxWidth;
		this.boxes = document.getElementsByClassName("box-item");
		this.boxes[0].style.transform = "translate(0px, 0)";
		this.boxes[0].translateVal = 0;
		for (var i=1; i<this.boxes.length; i++) {
			this.boxes[i].style.transform = "translate("+(boxWidth)+"px, 0)";
			this.boxes[i].translateVal = boxWidth;
		}
	},
	move : function(direction){
		if (direction == "left" && this.current == 1){
			this.current--;
			document.getElementsByClassName("prev")[0].style.display = "none";
		} 
		else if (direction == "left" && this.current > 0){
			this.current--;
			document.getElementsByClassName("next")[0].style.display = "inline";
		} 
		else if (direction == "right" && this.current < this.boxes.length-2){
			this.current++;
			document.getElementsByClassName("prev")[0].style.display = "inline";
		}
		else {
			this.current++;
			document.getElementsByClassName("next")[0].style.display = "none";
		}
		for (var i = 0; i < this.boxes.length; i++) {
			var translateVal = this.boxWidth;
			if (i == this.current){
				translateVal = 0;
			} 
			this.boxes[i].style.transform = "translate("+(translateVal)+"px, 0)";
			this.boxes[i].translateVal = translateVal;
		}   
	}
}