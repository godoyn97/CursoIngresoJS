function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	//numero= prompt("ingrese");

	while(contador< 5)
	{
		numero=prompt("ingrese");
		
		numero=parseInt(numero);

		acumulador= acumulador + numero;
		
		contador++;



	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN