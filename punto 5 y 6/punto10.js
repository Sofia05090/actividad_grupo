 function ejecutarTodo(){
        // 1. Suma de dos números
        function sumarNumeros(num1, num2) {
            console.log("1. La suma es igual a: " + (num1 + num2));
        }

        // 2. Cuadrado de un número
        function NumeroAlCuadrado(n) {
            console.log("2. El cuadrado del número " + n + " es: " + (n * n));
        }

        // 3. Área de un rectángulo
        function areaRectangulo(base, altura) {
            console.log("3. Área del rectángulo: " + (base * altura));
        }

        // 4. Verificar mayoría de edad
        function verificarEdad(edad) {
            if (edad >= 18) {
                console.log("4. Eres mayor de edad");
            } else {
                console.log("4. Eres menor de edad");
            }
        }

        // 5. Números consecutivos con ciclo
        function mostrarConsecutivos(n) {
            if (typeof n !== 'number' || !Number.isFinite(n) || !Number.isInteger(n)) {
                console.log('5. El parámetro debe ser un número entero.');
                return;
            }
            if (n <= 0) {
                console.log('5. Ingrese un número entero mayor que 0.');
                return;
            }

            console.log("5. Números consecutivos hasta " + n + ":");
            for (let i = 1; i <= n; i++) {
                console.log("   " + i);
            }
        }

        // 6. Mostrar elementos de un array con 5 items
        function mostrarElementos5() {
            const arr = ["Manzana", "Banana", "Naranja", "Uva", "Sandía"];
            
            if (arr.length !== 5) {
                console.log(`6. El array debe tener exactamente 5 elementos. Actualmente tiene ${arr.length}.`);
                return;
            }

            console.log("6. Elementos del array:");
            for (let i = 0; i < arr.length; i++) {
                console.log("   [" + i + "]: " + arr[i]);
            }
        }

        // 7. Array con 10 números, mostrar solo mayores al parámetro
        function numerosMayores(num) {
            const numeros = [5, 3, 25, 14, 53, 6, 73, 8, 29, 10];
            
            console.log("7. Los números mayores a " + num + " son:");
            for (let i = 0; i < numeros.length; i++) {
                if (numeros[i] > num) {
                    console.log("   " + numeros[i]);
                }
            }
        }

        // 8. Crear objeto y mostrar propiedades
        function mostrarObjeto() {
            const persona = {
                nombre: "Pepito",
                edad: 21,
                ciudad: "Bogotá"
            };
            
            console.log("8. Propiedades del objeto:");
            console.log("   Nombre: " + persona.nombre);
            console.log("   Edad: " + persona.edad);
            console.log("   Ciudad: " + persona.ciudad);
        }

        // 9. Array con 4 objetos
        function mostrarArrayObjetos() {
            const personas = [
                { id: 1, nombre: "Juan", edad: 25, ciudad: "Barcelona" },
                { id: 2, nombre: "María", edad: 30, ciudad: "Valencia" },
                { id: 3, nombre: "Pedro", edad: 22, ciudad: "Sevilla" },
                { id: 4, nombre: "Ana", edad: 27, ciudad: "Bilbao" }
            ];
            
            console.log("9. Array con 4 objetos:");
            personas.forEach(persona => {
                console.log("   Persona " + persona.id + ":");
                console.log("     - Nombre: " + persona.nombre);
                console.log("     - Edad: " + persona.edad);
                console.log("     - Ciudad: " + persona.ciudad);
            });
        }

        // 10. Función que ejecuta todas las anteriores
        function ejecutarTodo() {
            console.clear();
            console.log("========== EJECUTANDO LAS FUNCIONES ==========\n");
            
            sumarNumeros(15, 25);
            console.log("");
            
            NumeroAlCuadrado(7);
            console.log("");
            
            areaRectangulo(5, 10);
            console.log("");
            
            verificarEdad(16);
            console.log("");
            
            mostrarConsecutivos(5);
            console.log("");
            
            mostrarElementos5();
            console.log("");
            
            numerosMayores(10);
            console.log("");
            
            mostrarObjeto();
            console.log("");
            
            mostrarArrayObjetos();
            console.log("");
            
        
        }
 }