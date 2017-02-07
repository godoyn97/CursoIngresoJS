/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var datouno;
	var datodos;
	var resultado;

	datouno = document.getElementById('numeroUno').value;
	datodos = document.getElementById('numeroDos').value;

	datouno = parseInt(datouno);
	datodos = parseInt(datodos);
	
	resultado = datouno + datodos;

	alert("el resultado es: " + resultado);
	/*alert("el resultado es: " + datouno+ datodos);*/



/*	var dato1;

	dato1 = document.getElementById('numeroUno').value;

	var dato2;
	dato2 = document.getElementById('numeroDos').value;

	var resultado;*/
	

	/*
	resultado = parseInt(dato1 + dato2);	
	alert("la suma es: " + dato1 + dato2 + resultado); noup*/
}

