#include <stdio.h>
#include <stdlib.h>
int sumar(int,int);
int main()
{
    //printf("Hello world!\n");
    int num1;
    int num2;
    int resultado;
    printf("ingrese un numero: ");
    scanf("%d",&num1);
    printf("ingrese un numero: ");
    scanf("%d",&num2);

    resultado=sumar(num1,num2);
    printf("\nel resuldato es: %d", resultado);


    return 0;
}
int sumar (int x, int y)
{
   /* int resultado;
    resultado= x+ y;
    return resultado;
    */
    return x+y;
}

