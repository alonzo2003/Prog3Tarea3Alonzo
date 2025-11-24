let agendas =  JSON.parse(localStorage.getItem("agendas")) || [];

const tabla = document.getElementById("tablaAgendas");

agendas.forEach (a=> {
    let fila = `
    <tr>
        <td>${a.nombre}</td>
        <td>${a.fecha}</td>
        <td>${a.descripcion}</td>
        <td>
            <button onclick="borrarAgenda(${a.id})">Eliminar</button>
        </td>
    </tr>
    `;
    tabla.innerHTML += fila;
});

function borrarAgenda(id) {
    let nuevas = agendas.filter(a => a.id !== id);
    localStorage.setItem("agendas", JSON.stringify(nuevas));
    location.reload();
}