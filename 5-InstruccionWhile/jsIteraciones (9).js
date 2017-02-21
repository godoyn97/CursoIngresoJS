function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var max;
	var min;
	
	var respuesta=true;
	//var respuesta='si';

	//while(respuesta!='no')
	while(respuesta== true)
	{
		numero=prompt("ingrese numero");



		if(contador==0)
		{
			max=numero;
			min=numero;
		}
		else
		{
			if(numero>max)
			{
				max=numero;
			}
			if(numero<min)
			{
				min=numero
			}

		}
		
		respuesta= confirm("ingresar otro numero?")
		//respuesta=prompt("desea ingresar otro numero?");

		document.getElementById('maximo').value=max;
		document.getElementById('minimo').value=min;


		contador++;
	}
	//funca




}//FIN DE LA FUNCIÓN