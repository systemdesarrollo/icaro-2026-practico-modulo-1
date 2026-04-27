        const presentacionarriba = document.querySelectorAll('.presentacionarriba');
        // aca declaro el texto que voy a agregar en H4 para ventas. 
        const textoNuevoh4 = document.createElement('p');
        textoNuevoh4.textContent = 'Link acceso a ventas en menu';
        textoNuevoh4.style.fontSize = '20px';
        textoNuevoh4.style.margin = '0px';
        textoNuevoh4.style.color = 'red';

        // aca realizo los cambios de ampliacion y normalizacion de textos 
        presentacionarriba.forEach(presentacionarriba => {
            presentacionarriba.addEventListener('mouseover', (e) => {
                presentacionarriba.style.color = 'black';
                
                if (presentacionarriba.tagName === 'H1') {
                   presentacionarriba.style.fontSize = '60px';  
 //                  console.log(presentacionarriba.tagName)        
                } else if (presentacionarriba.tagName === 'H2') {
                          presentacionarriba.style.fontSize = '40px';  
 //                         console.log(presentacionarriba.tagName)        
                } else if (presentacionarriba.tagName === 'P') {
                        presentacionarriba.style.fontSize = '26px';  
 //                       console.log(presentacionarriba.tagName)   
                } else if (presentacionarriba.tagName === 'H4') {    // preguntar pq va en mayuscula con los tres iguales                
                        presentacionarriba.style.fontSize = '36px';  
                        presentacionarriba.style.background = '#198754';//'red';
                        presentacionarriba.style.border = '2px solid black';
                        presentacionarriba.style.borderRadius = '20px';
                        presentacionarriba.style.padding = '5px';
                        presentacionarriba.appendChild(textoNuevoh4);
 //                       console.log(presentacionarriba.tagName)                       
                }               
            });

            presentacionarriba.addEventListener('mouseout', (e) => {
                presentacionarriba.style.color = 'white'; // Vuelve al color original
                if (presentacionarriba.tagName === 'H1') {
                   presentacionarriba.style.fontSize = '37px';  // vuelve al tamaño original
                } else if (presentacionarriba.tagName === 'H2') {
                          presentacionarriba.style.fontSize = '30px';  
//                          console.log(presentacionarriba.tagName)        
                } else if (presentacionarriba.tagName === 'P') {
                          presentacionarriba.style.fontSize = '16px'; 
//                          console.log(presentacionarriba.tagName)
                } else if (presentacionarriba.tagName = 'H4') {    // preguntar pq va en mayuscula con los tres iguales                
                          presentacionarriba.style.fontSize = '23px'; 
                          presentacionarriba.style.background = '';
                          presentacionarriba.style.border = '';
                          presentacionarriba.style.padding = '';
 //                         console.log(presentacionarriba.tagName)
 //                          console.log("Estás sobre la etiqueta:", e.target.tagName);
 //                          console.log("Elemento completo:", e.target);
 //                          console.log("Elemento completo:", presentacionarriba.style.fontSize.value);
                }                    
            });

        });
