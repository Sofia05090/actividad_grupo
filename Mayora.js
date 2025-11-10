// 7 Crear un array con 10 números y mostrar solo los que sean mayores al numero ingresado como parametro

let numeros = [5, 3, 25, 14, 53, 6, 73, 8, 29, 10];

function numerosMayores(num){
        console.log("Los numeros mayores a " + num + " son: ");
        for (i = 0; i < numeros.length; i++){
            if (numeros[i] > num){
                console.log(numeros[i]);
            }

        }

    }

numerosMayores(30);
