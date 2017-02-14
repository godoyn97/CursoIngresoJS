function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	
	numero = Math.floor((Math.random() * 10)+1);

	alert(numero);
}//FIN DE LA FUNCIÓN
/*para numeros enteros math.floor()
math.floor((math.random()*10)+ 1);    // numeros del 1(al 0 le suma 1) al 10 
Math.floor(Math.random() * 11);      // devuelve un numero del 0 al 10
Math.floor(Math.random() * 100);     // devuelve un numero del 0 al 99 */