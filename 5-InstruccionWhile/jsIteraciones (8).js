function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta=true;
	var sumaNega=0;

	while(respuesta==true)
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		if(numero<0)
		{
			negativo= negativo * numero;
			//negativo = numero * numero;
		}
		else
		{
			positivo=positivo+numero;
		}

		
		respuesta=confirm("desea continuar?")
		contador++
	}
//funca
// ahora si funca


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN