/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var datoUno;
	var datoDos;
	var resultado;

	datoUno = document.getElementById('numeroDividendo').value;
	datoDos = document.getElementById('numeroDivisor').value;

	datoUno = parseInt(datoUno);
	datoDos = parseInt(datoDos);

	resultado = datoUno % datoDos;

	alert(resultado);
}
