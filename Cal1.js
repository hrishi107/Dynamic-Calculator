


function insertVal(num){
		document.getElementById("dd").value+=num;

			
		}

function shnati(){
	alert("clearing the feilds..!! ");
	document.getElementById("dd").value="";
	
}
function sumation1(){

	var exp = document.getElementById("dd").value;
	//if(exp == "++" || "**" || "//"){
	
	//alert("Aise thodi addition hota he bhai....!!")
	
	
	//};


	if(exp){
		document.getElementById("dd").value=eval(exp);
	}
}