/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var datoUno;
	var datoDos;
	var datoTres;
	var resultado;

	datoUno = document.getElementById('PrecioUno').value;
	datoDos = document.getElementById('PrecioDos').value;
	datoTres= document.getElementById('PrecioTres').value;
	/*datoUno = document.getElementById('PrecioUno');
	datoDos = document.getElementById('PrecioDos');
	datoTres= document.getElementById('precioTres');
	*///.value al final 
	
	/*datoUno = document.getElementById('FormIngreso').value; //siempre ; siempre ; siempre ;
	datoDos = document.getElementById('FormIngreso').value;
	datoTres = document.getElementById('FormIngreso')value;
	*///meti cualquiera

	datoUno = parseInt(datoUno);
	datoDos = parseInt(datoDos);
	datoTres= parseInt(datoTres);
	/*
	datoUno = perseInt(datoUno);
	datoDos = perseInt(datoDos);
	datoTres= perseInt(datoTres);
	*///pEEEErseInt no, al menos le puse la mayuscula a la I

	resultado = datoUno + datoDos + datoTres;

	alert("resultado: "+resultado);
}
function Promedio () 
{
	var datoUno;
	var datoDos;
	var datoTres;
	var tres;
	var resultado;
 	var promedio;
	datoUno = document.getElementById('PrecioUno').value;
	datoDos = document.getElementById('PrecioDos').value;
	datoTres= document.getElementById('PrecioTres').value;
	tres = 3;

	datoUno = parseInt(datoUno);
	datoDos = parseInt(datoDos);
    datoTres+ parseInt(datoTres);
    tres = parseInt(tres);
    
	resultado = datoUno + datoDos + datoTres;
    promedio = resultado % tres;

    /*
    resultado = datoUno + datoDos + datoTres % tres; supongo que tambien hay que separar en terminos
    */
    //preguntar como se hace para conseguir el cociente y no el resto
    alert("promedio: " + promedio);




}
function PrecioFinal () 
{
	var datoUno;
	var datoDos;
	var datoTres;
	var resultadoUno;
	var resultadoDos;
	//var IVA;

	datoUno = document.getElementById('PrecioUno').value;
	datoDos = document.getElementById('PrecioDos').value;
	datoTres = document.getElementById('PrecioTres').value;
	//IVA = (2.21); // no me toma el decimal

	datoUno= parseInt(datoUno);
	datoDos= parseInt(datoDos);
	datoTres=parseInt(datoTres);
    //IVA = parseInt(IVA);
	
	resultadoUno = datoUno + datoTres + datoDos;
	
	resultadoDos = resultadoUno * 1.21;
	//resultadoDos =(resultadoDos * IVA);

	alert(resultadoDos);

	//y aca se queda hasta que sepa como meter un IVA...// se como aplicar el iva, pero no porque carajos no me lo muestra	




}