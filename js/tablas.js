        // Tabla de mayor puntaje
        fetch('https://grow.cavernservices.org/Gizmo/mejor_punto.php')
            .then(response => response.json())
            .then(data => {
                const tbody = document.querySelector('#tabla-mejor-punto tbody');
                
                // armar el cuadro
                data.forEach(Usuario => {
                    const fila = document.createElement('tr');
                    fila.innerHTML = `
                        <td>${Usuario.Nombre}</td>
                        <td>${Usuario.Puntos}</td>
                        <td>${Usuario.Tiempo}</td>
                    `;
                    tbody.appendChild(fila);
                });
            })
            .catch(error => console.error('Algo a pasado :0 !!!!:', error));
        // tabla de mayor longevidad
        fetch('https://grow.cavernservices.org/Gizmo/mas_tiempo.php')
            .then(response => response.json())
            .then(data => {
                const tbody = document.querySelector('#tabla-mejor-tiempo tbody');
                
                // armar el cuadro
                data.forEach(Usuario => {
                    const fila = document.createElement('tr');
                    fila.innerHTML = `
                        <td>${Usuario.Nombre}</td>
                        <td>${Usuario.Puntos}</td>
                        <td>${Usuario.Tiempo}</td>
                    `;
                    tbody.appendChild(fila);
                });
            })
            .catch(error => console.error('Algo a pasado :0 !!!!:', error));
