/*Borrowed this technique from here*/
/*http://www.htmlgoodies.com/beyond/javascript/article.php/3471111*/

function lineFormat(){
  /*grabs the address bar and puts it into a hidden text input*/
  var address = window.location;
  document.hidden.address.value = address;

  /*Grabs the values from the hidden text box to make it a manipulatable string*/
  address = document.hidden.address.value;
  /*gets rid of the part of the address I dont need*/
  address = address.split("?").pop();

  /*Splits the string into an array*/
  var input = [];
  input = address.split("&");

  /*Removes the field names*/
  for (i = 0; i < input.length; i++){
    input[i] = input[i].split("=").pop();
  }
  return input
}

function productFormat(input){
  var product = [];
  if(input.length >=3){
    for(i = 0; i < input.length; i+=3){
      var line = [];
      for(j = 0; j < 3; j++){
        line.push(input[i+j])
      }
      product.push(line)
    }
  }
  else{
    product[2] = "default"
  }
  return product;
}

//Check this out for a dynamic table
//http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_insert_deleterow
function dynamicTable(product){
  var productname = "";

	if(product[2] != "default"){
		var table = document.getElementById("invBody");
		//alert(typeof(table) + " " + product) //debug
		var row = table.insertRow(-1);
		//alert(product) //debug
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		var cell3 = row.insertCell(3);

    if(product[0].indexOf('+') > -1){
      var rebuild = product[0].split('+');
      for(i=0;i<rebuild.length;i++){
        productname += rebuild[i];
        productname +=" ";
      }
    }
    else{
        productname = product[0]
      }

		cell0.innerHTML = productname;
		cell1.innerHTML = "$" + parseFloat(product[1]).toFixed(2);
		cell2.innerHTML = product[2];
		cell3.innerHTML = "$" + parseFloat(product[2] * product[1]).toFixed(2);
	}
}

function total(product){
	var total = 0;

	for(i = 0; i < product.length; i++){
    if(product[i][2] != "default"){
		    total += product[i][1] * product[i][2];
      }
	}

	var totalBlock = document.getElementById("totalPrice");


	totalBlock.innerHTML =  parseFloat(total).toFixed(2);

}

product = lineFormat();

product = productFormat(product)

for(i = 0; i < product.length; i++){
  dynamicTable(product[i]);
}

total(product)
