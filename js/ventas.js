      function galeriaminiatura() {
       
        // primero tomo el contenedor 
        const primerImagen = document.getElementById('contenedor-miniatura');

        const misImagenes = ['v_notebooks.png','v_tv.png','v_accesorios.png','v_impresora.png','v_pc.png','v_monitor.png'];

        for (let index = 0; index < 6; index++) {                  

            // creo la etiqueta que nececito 
            const contenedorPi = document.createElement('div');                   
            contenedorPi.className = "col-md-2 ";

            const piImg = document.createElement('img');
            piImg.src = `img/${misImagenes[index]}`;             
            piImg.className = 'img-fluid rounded';
            // asi para seguir usando boostrap
            piImg.classList.add('py-4')
            // asi sin boostrap
            //piImg.style.padding = '10px';
                       
            const contenedorTx = document.createElement('div');                   
            contenedorTx.className = "col-md-2 ";
            
            // creamos el evento click
            piImg.addEventListener('click', function(){
                const principal = document.getElementById('imggrande'); // este id es del id que tuve que poner en la imagen grande
                principal.src = this.src;
                //console.log('pasa');
                 
                const todasLasMinis = document.querySelectorAll('#contenedor-miniatura img');
                    todasLasMinis.forEach(img => {
                        img.classList.remove('border', 'border-primary', 'border-3', 'opacity-50');
                    });

                    this.classList.add('border', 'border-primary', 'border-3');                   

            });

            // metemos la imagen dentro del div primero
            contenedorPi.append(piImg);            
            //contenedorTx.appendChild(piText); 
            // segundo metemos el div dentro del contenedor       
            primerImagen.appendChild(contenedorPi);          

        };
      };
       
    
      function galeriagrande() {
              
        //para la imagen en grande
        const contenedorPrincipal = document.getElementById('contenedor-galeria');
        // creo el div
        const contenedorImagenes = document.createElement('div');
        // asigno css de boostrap
        contenedorImagenes.className = "col-12 text-center"; //d-flex flex-wrap justify-content-center";
       // display.setAttribute('class', '');
        contenedorImagenes.innerHTML = `
        <div class="p-2">
            <img src="img/v_notebooks.png" id="imggrande" class="img-thumbnail img-fluid w-75 " alt="Imagen">
        </div>`;

        contenedorPrincipal.appendChild(contenedorImagenes);               
        //contenedorPrincipal.appendChild();
        
       
    };


    galeriaminiatura();
    galeriagrande();

    