const idEditar = localStorage.getItem("agendaEditar");


let agendas = JSON.parse(localStorage.getItem("agendas")) || [];


let agenda = agendas.find(a => a.id == idEditar);


document.getElementById("nombre").value = agenda.nombre;
document.getElementById("fecha").value = agenda.fecha;
document.getElementById("descripcion").value = agenda.descripcion;


document.getElementById("formEditar").addEventListener("submit", function(e) {
    e.preventDefault();

    agenda.nombre = document.getElementById("nombre").value;
    agenda.fecha = document.getElementById("fecha").value;
    agenda.descripcion = document.getElementById("descripcion").value;

   
    localStorage.setItem("agendas", JSON.stringify(agendas));

   
    localStorage.removeItem("agendaEditar");

    alert("Agenda actualizada exitosamente!");

    
    window.location.href = "listado.html";
});