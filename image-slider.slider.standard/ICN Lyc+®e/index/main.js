var img = 1;
var timer = 3000;
var dataGlb = 1;
var idImg = "dataGlob";
var dataH = false;

window.onload = function start(timer){
    setInterval(function(){
		dataImg = "imgUsefull/data/data" + dataGlb + ".jpg"
		setSrcImg(idImg, dataImg, dataGlb);
		if (dataGlb == 3) {
			dataGlb =0;
		}
		dataGlb++;
		
	
		
		//var data = "img" + img;
		//setImageVisible(data,true);
		//if (img == 21) {
		//setImageVisible("Metz",true);
		//setImageVisible("Fabert",true);
		//setImageVisible("panneau",true);
		//img++;
	},2000);
}

function setImageVisible(id, visible) {
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
}

function setSrcImg(id, data, H) {	
	var img = document.getElementById(id);
	img.src = data;
	if (H == 3) {
		img.style.width = '50%';
		img.style.height = '100%';
		img = document.getElementById("peinture");
		img.style.marginLeft ='25%';
	} else {
		img.style.width='100%';
		img.style.height="auto";
		img = document.getElementById("peinture");
		img.style.marginLeft ='25%';		

	}
	
	

}


