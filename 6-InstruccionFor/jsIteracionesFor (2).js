function Mostrar()
/*{

	for(var contador=10;contador>0;contador--)
	{
		console.log(contador);

	}

}*///hecho

{
	var contador=10;
	for(;;)
	{
		console.log(contador);
		if(contador<2)
		{
			break;
		}
		contador--;
	}
}