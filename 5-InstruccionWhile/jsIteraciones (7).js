function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta = true;
	//var respuesta='si';
	var numero;
	

	while(respuesta == true)
	{
		numero=prompt("ingrese numero:");
		numero = parseInt(numero);
		acumulador= acumulador+ numero;
		contador++;
		
		respuesta=confirm("desea continuar?");

		

		

		
		


	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN