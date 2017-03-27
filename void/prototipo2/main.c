#include <stdio.h>
#include <stdlib.h>
void sumar(int,int);
int main()
{
    //printf("Hello world!\n");
    int num1;
    int num2;
    printf("ingrese un numero: ");
    scanf("%d",&num1);
    printf("ingrese un numero: ");
    scanf("%d",&num2);

    sumar(num1,num2);

    return 0;
}
void sumar(int num1, int num2)
{
    int resultado;
    resultado= num1 + num2;
    printf("\n el resultado es:%d",resultado);
}
