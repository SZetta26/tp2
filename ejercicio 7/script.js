const usuariosDiv = document.getElementById('usuarios');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usuarios => {
        usuarios.forEach(usuario => {
            const usuarioDiv = document.createElement('div');
            usuarioDiv.innerHTML = `
                <h2>ID: ${usuario.id} - ${usuario.name} </h2>
                <p>Usuario: "${usuario.username}"</p>
                <p>Email: ${usuario.email}</p>
                <p>Sitio web: ${usuario.website}</p>
                <button onclick="mostrarTareas(${usuario.id})">Ver tareas</button>
                <div id="tareas-${usuario.id}"></div>
            `;
            usuariosDiv.appendChild(usuarioDiv);
        });
    });

function mostrarTareas(idUsuario) {
    const tareasDiv = document.getElementById('tareas-' + idUsuario);
    fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}/todos`)
        .then(response => response.json())
        .then(tareas => {
            tareasDiv.innerHTML = '';
            tareas.forEach(tarea => {
                const tareaP = document.createElement('p');
                tareaP.textContent = tarea.title;
                tareaP.className = tarea.completed ? 'completado' : 'no-completado';
                tareasDiv.appendChild(tareaP);
            });
        });
}