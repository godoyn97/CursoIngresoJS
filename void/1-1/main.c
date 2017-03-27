#include <stdio.h>
#include <stdlib.h>

int main() //char=tolower(char) toupper mayuscula <ctype.h>
{
    //printf("Hello world!\n");
    int num1;
    int num2;
    int resultado;
        printf("ingrese un numero \n");
        scanf("%d",&num1);

        printf("ingrese un numero \n");
        scanf("%d",&num2);

        resultado=num1+num2;
        printf("la suma es: %d \n", resultado);

    return 0;
}
