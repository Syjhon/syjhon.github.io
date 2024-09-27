var modal = document.getElementById('modal');
                
                        // Obtener el botón que abre el modal
                        var btn = document.getElementById('openModal');
                
                        // Cuando el usuario hace clic en el botón, abre el modal 
                        btn.onclick = function(event) {
                            event.preventDefault(); // Evita que el enlace haga su acción predeterminada
                            modal.style.display = 'block';
                        }
                
                        // Cuando el usuario hace clic en cualquier parte fuera del modal, lo cierra
                        window.onclick = function(event) {
                            if (event.target == modal) {
                                modal.style.display = 'none';
                            }
                        }