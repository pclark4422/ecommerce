/*Borrowed this technique from here*/
/*http://www.htmlgoodies.com/beyond/javascript/article.php/3471111*/

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

var product = [];

for(i = 0; i < input.length; i+=3){
  var line = [];
  for(j = 0; j < 3; j++){
    line.push(input[i+j])
  }
  product.push(line)
}

for(i = 0; i < product.length; i++){
  dynamicTable(product[i]);
}
/*for(i = 0; i < products.length; i++){
  if(product[1][2] != "default"){

  }*/

//document.cart.orderInfo.invoice.invTable.invBody.block.invProduct.value = "Blah"//product[0][0];


//Check this out for a dynamic table
//http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_insert_deleterow
function dynamicTable(product){

  var table = document.getElementsByName("invbody");
  alert(typeof(table) + " " + product) //debug
  var row = table.insertRow(0);
  alert(product) //debug
  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);

  cell0.innerHTML = product[0];
}


var subtotal = product[0][1] * product[0][2];
alert(subtotal);
