/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var datoUno;
	var datoDos;
	var resultado;

	datoUno = document.getElementById('numeroUno').value;
	datoDos = document.getElementById('numeroDos').value;

	datoUno = parseInt(datoUno);
	datoDos = parseInt(datoDos);

	resultado = datoUno + datoDos;

	alert("la suma da: " + resultado);
}

function restar()
{
	var datoUno;
	var datoDos;
	var resultado;

	datoUno = document.getElementById('numeroUno').value;
	datoDos = document.getElementById('numeroDos').value;

	datoUno = parseInt(datoUno);
	datoDos = parseInt(datoDos);

	resultado = datoUno - datoDos;

	alert("la resta da:  " + resultado);

}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

