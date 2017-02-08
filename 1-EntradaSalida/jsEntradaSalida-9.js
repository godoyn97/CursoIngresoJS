/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo;
	var resultado;
/*valor de x+x*10/100 => sueldo + sueldo * 100/100
sueldo + sueldo * 0.10*/
/*sueldo * 1+0.10
sueldo * 1.10 =>meter
sueldo *0.90=> sacar sueldo*/
	sueldo = document.getElementById('sueldo').value;
	sueldo = parseInt(sueldo);

	resultado= sueldo * 1.1;

	alert("resultado: " + resultado);
	
}
