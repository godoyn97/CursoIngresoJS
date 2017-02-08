/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//como se ingresa numeros con coma?
	var Ftemperatura;
	var resta;
	var resultado; 
	var division;
	Ftemperatura = document.getElementById('Temperatura').value;

	//(f-32)*5/9
	
	//division = 9 % 5;
	//division = parseInt(division);
	/*Ftemperatura = parseInt(Ftemperatura);
	resta = Ftemperatura - 32;
	resultado = resta * division; */// es mal planteado


	alert(resultado);


}

function CentigradosFahrenheit () 
{
	//c(9/5 * C)+32
	//273,15
	var
}
