#include <stdio.h>
#include <stdlib.h>
void sumar(void);
int main()
{
    //printf("Hello world!\n");

     sumar();


    return 0;
}
void sumar(void)
       {
        int num1;
        int num2;
        int resultado;
            printf("ingrese un numero: ");
            scanf("%d",&num1);

            printf("ingrese un numero: ");
            scanf("%d",&num2);

            resultado=num1+num2;
            printf("la suma es: %d \n", resultado);
        }
