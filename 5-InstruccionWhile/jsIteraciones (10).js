function Mostrar()
/*interacion hasta que el usuario quiera*/
	//alert("funciona");
{	var respuesta="si";
	var nota=0;
	var contador=0;
	var sumaNota=0;
	var promedioNota;
	var edad;
	var nombre;
	var sexo;
	var masViejo=0;
	var edadMasviejo=0;
	var contadorMujer=0;
	var contadorMujerAprob=0;
	var contadorHombre25=0;
	var notaMujerMax=0;
	var nombreMujerMaxNota;
	var notaHombreMax=0;
	var nombreHombreMaxNota;


	while(respuesta=="si")
	{
		contador++;

		nota=prompt("por favor ingrese su nota");
		nota=parseInt(nota);
		while(nota<0 || nota>10)
		{
			nota=prompt("por favor ingrese su nota");
			nota=parseInt(nota);
		}
		sumaNota= sumaNota + nota;
		edad=prompt("ingrese su edad: ");
		edad =parseInt(edad);
		while(edad<0 || edad>100)
		{
			edad=prompt("ingrese su edad: ");
			edad =parseInt(edad);
		}
		
		nombre=prompt("ingrese su nombre: ");
		
		sexo=prompt("ingerse sexo (hombre/mujer)");
		while(sexo!= "hombre" && sexo!="mujer")
		{
			sexo=prompt("Reingrese Sexo (hombre/mujer)");
		}

		//aca termino la carga de validacionde datos

		//comenzamos a hacer las operaciones necesarias
		
		if(contador==0)
		{
			masViejo=nombre;
			edadMasviejo=edad;
		}
		else
		{
			if(edad>edadMasviejo)
			{
				masViejo=nombre;
				edadMasviejo=edad;	
			}
		}
		 

		 
			/*
			*1- cantidad de mujerers aprobadas
			*2-cantidad de hombres mayores a 25 aprobados
			*3- cantidad de mujeres menores a 20 años
			*4- el nombre de la mujer con mejor nota
			5- el nombre del hombre con mejor nota
			6-promedio de notas de los hombre
			7-pormedio de nota de la mujer
			8-porcentajes de aprovados vs desaprobados
			9-el sexo y el nombre de la primer persona que se saque 10
			*/
			//contador para mujeres y uno pa machos
		if(contadorMujer==0	&&	sexo=="mujer")
		{
			nombreMujerMaxNota=nombre;
			notaMujerMax=nota;

		}
		else
		{//4
			if(nota>notaMujerMax)
			{
				notaMujerMax=nota;
				nombreMujerMaxNota=nombre;
			}
		}
		while(sexo== "mujer" && sexo<20)
			{
				contadorMujer++;
			}


			//3		
			

			//1
			while(nota>4 && sexo=="mujer")
			{
				


				contadorMujerAprob++;
			}
			
			if(contador==0 && sexo=="hombre")
			{

			}


			//2
			while(nota>4 && sexo== "hombre" && edad>25)
			{
				contadorHombre25++;
			}






		}	
		

		
		 

		 










		respuesta=prompt("ingresar otro dato?");
	}

	promedioNota =sumaNota/contador;

	document.write("promedio de la nota: " + promedioNota);
	document.write("<br>" +"hombre aprobados con edad mayor a 25: "+ contadorHombre25);
	document.write("<br>"+ "cantidad de mujeres aprobadas: "+ contadorMujerAprob);
	document.write("<br>"+ "cantidad de mujeres menores a 20: "+ contadorMujer);
	document.write("<br>" + "mujer con mejor nota: " + notaMujerMax + " " + nombreMujerMaxNota);
}






















/*
"banderas"
if(nombre1er10=="")




*/




//fin de la funcion 0
	/*var contador=0;
	//declarar contadores y variables 
	var numero;
	var numeroNeg=0;
	var numeropos=0;
	var sumaPos=0;
	var sumaNeg=0;
	var contadorPos=0;
	var contadorNeg=0;
	var contadorCero=0;
	var contadorPar=0;



	var respuesta=true;

	while(respuesta==true)
	{
		numero =prompt("ingrese numero");
		numero = parseInt(numero);

		if(numero<0)
		{
			sumaNeg=sumaNeg + numero;
			contadorNeg++
		}
		else
		{
			if(numero>0)
			{
				sumaPos= sumaPos + numero;
				contadorPos++;
			}
			else
			{
				contadorCero++;
			}

		}
		if(numero %2 ==0)
		{
			contadorPar++;
		}
		contador++;	
		respuesta=confirm("ingresar otro num?");
	}

	var promedioPos= sumaPos/contadorPos;
	var promedioNeg= sumaNeg/contadorNeg;
	var diferencia = sumaPos + sumaNeg;

	/*
	document.write("suma de negativos" + sumaNeg);
	document.write("suma de positivos" + sumaPos);
	document.write("cantidad de positivos" + contadorPos);
	document.write("cantidad de negativos" + contadorNeg);
	document.write("cantidad de ceros" + contadorCero);
	document.write("promedio positivos" + promedioPos);
	document.write("promedio de negativos" + promedioNeg);
	document.write("resta"+ diferencia);

	document.write("suma de negativos: " + sumaNeg+"<br>");
	document.write("suma de positivos: " + sumaPos+"<br>");
	document.write("cantidad de positivos: " + contadorPos+"<br>");
	document.write("cantidad de negativos: " + contadorNeg+"<br>");
	document.write("cantidad de ceros: " + contadorCero+"<br>");
	document.write("promedio positivos: " + promedioPos+"<br>");
	document.write("promedio de negativos: " + promedioNeg+"<br>");
	document.write("resta: "+ diferencia);
	*/





//FIN DE LA FUNCIÓN