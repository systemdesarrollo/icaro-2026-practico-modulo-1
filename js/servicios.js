        // script en servicos que agrande lo que hacen los sistemas, las caracteriticas nuestro servicios.
    function efectoaparrafos() {
            
            const nuestrosservicios = document.getElementById('nuestrosservicios');    

            // paso el mouse por encima
            nuestrosservicios.addEventListener('mouseover', () => {
                // Escala el div un 10% (1.1) sin mover las columnas vecinas
                nuestrosservicios.style.transform = 'scale(1.1)';
                nuestrosservicios.style.transition = 'transform 0.3s ease'; //el 0.3s ease es para detener uno segundos antes de agrandarse                
                // añade una sombra para que parezca que "flota" sobre los demás
                nuestrosservicios.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                nuestrosservicios.style.zIndex = '10'; // Asegura que se vea por encima de las otras columnas    
            });

            //saco el mouse y vuelve a lo original 
            nuestrosservicios.addEventListener('mouseout', () => {
                // Vuelve a su estado original (escala 1)
                nuestrosservicios.style.transform = 'scale(1)';
                nuestrosservicios.style.boxShadow = 'none';
                nuestrosservicios.style.zIndex = '1';
            });
    };

    /* pq usar esto en un col
    No rompe el Layout: Bootstrap calcula los anchos de las columnas en porcentajes. Si cambias el ancho de una, las demás se desordenan. scale solo cambia la percepción visual.
    Fluidez: Al usar transition, el efecto se siente como una aplicación profesional.
    Z-index: Es importante subir el zIndex al agrandar para que los bordes del div no queden tapados por la columna de al lado.
    */

    efectoaparrafos();

    //----------------------------------------------------------------

    function efectodeimagenes() {
        
        const movimientosdeimagenes = document.getElementById('movimientosdeimagenes');

        movimientosdeimagenes.addEventListener('mouseover', () => {
            // La agranda un 15%
            movimientosdeimagenes.style.transform = 'scale(1.15)';
            movimientosdeimagenes.style.transition = 'transform 0.4s ease';
            movimientosdeimagenes.style.cursor = 'pointer'; // Cambia el cursor a la manito
        });

        movimientosdeimagenes.addEventListener('mouseout', () => {
            // Vuelve al tamaño original
            movimientosdeimagenes.style.transform = 'scale(1)';
        });

    };

    efectodeimagenes();

    //---------------------------------------------------------------------------------

    // contadores de años clientes sistemas activos y empleados.
   
    function contadores(numeros,descripcion,ids) {

        const visor = document.getElementById(ids);
        let contador = 0;

        //No se detiene solo: A diferencia de setTimeout (que ocurre una sola vez), 
        //setInterval no para hasta que cierras la página o usas la función clearInterval(intervalo)

        const intervalo = setInterval(() => {
            if (contador <= numeros) {
                // reemplazo el texto anterios
                visor.textContent = contador + " " +descripcion;
                visor.style.fontSize = '40px';
                visor.style.fontFamily = 'Times New Roman, Times, serif';
                
                contador++;
            } else {
                clearInterval(intervalo);               
            }
        }, 20); // Velocidad en segundos

    };
      
    
    contadores(30,'Años','contadoranios');
    contadores(100,'Clientes','contadorclientes');
    contadores(200,'Sistemas Activos','contadorsistemasactivos');
    contadores(20,'Empleados','contadorempleados');

      
   