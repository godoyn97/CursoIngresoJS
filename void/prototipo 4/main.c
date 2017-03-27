#include <stdio.h>
#include <stdlib.h>
int sumar(void);
int main()
{
    //printf("Hello world!\n");
    int resultado;

    resultado= sumar();
    printf("el resultado es: %d", resultado);

    return 0;
}
int sumar(void)
{
    int resultado;
    int num1;
    int num2;

    printf("ingrese un numero:");
    scanf("%d", &num1);
    printf("ingrese un numero:");
    scanf("%d", &num2);
    resultado=num1 + num2;
    return resultado;
}
