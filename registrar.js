document.getElementById("agendaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("fecha").value;
    let descripcion = document.getElementById("descripcion").value;

    let agendas = JSON.parse(localStorage.getItem("agendas")) || [];

    agendas.push({
        id: Date.now(),
        nombre: nombre,
        fecha: fecha,
        descripcion: descripcion
    });

    localStorage.setItem("agendas", JSON.stringify(agendas));

    alert("Agenda registrada correctamente");
    window.location.href = "index.html";
});