function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
		var nRandom;

		nRandom = Math.floor((Math.random()*10)+1);

		if(nRandom>8)
		{
			alert("excelente " );
		}
		else
		{
			if(nRandom < 4)
			{
				alert("vamos, la porxima se puede  ");
			}
			else
			{
				alert("aprobó ");
			}
		}

		/*if(nRandom>3 && nRandom< 9)
		{
			alert("aprobó " + nRandom);
		}
		else*/
		/*else
		{
			alert("vamos, la proxima se puede " + nRandom);
		}*/
}//FIN DE LA FUNCIÓN