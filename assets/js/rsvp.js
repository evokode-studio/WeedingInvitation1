document.addEventListener('DOMContentLoaded', () => {
    const invitados = [
        { nombre: "Ana Carolina Torres Pérez", codigo: "ACTP754", pases: 2 },
        { nombre: "Luis Fernando Morales Ríos", codigo: "LFMR128", pases: 3 },
        { nombre: "María José González Álvarez", codigo: "MJGA542", pases: 2 },
        { nombre: "Ricardo Díaz Montoya", codigo: "RDM297", pases: 1 },
        { nombre: "Elena Sánchez Torres", codigo: "EST913", pases: 2 },
        { nombre: "Sofía Navarro Ibáñez", codigo: "SNI834", pases: 1 },
        { nombre: "Andrés Ramírez López", codigo: "ARL676", pases: 2 },
        { nombre: "Camila Vargas Escobar", codigo: "CVE410", pases: 3 },
        { nombre: "Jorge Manuel Luna Ruiz", codigo: "JMLR121", pases: 2 },
        { nombre: "Fernanda Ávila Domínguez", codigo: "FAD934", pases: 1 },
        { nombre: "Carolina Herrera Peña", codigo: "CHP644", pases: 2 },
        { nombre: "Diego Armando Cruz Solís", codigo: "DACS089", pases: 1 },
        { nombre: "Valeria Castillo Herrera", codigo: "VCH732", pases: 2 },
        { nombre: "Tomás Ibargüen Sáenz", codigo: "TIS556", pases: 3 },
        { nombre: "Isabel Ortega Vázquez", codigo: "IOV491", pases: 2 },
        { nombre: "Eduardo Ríos Jiménez", codigo: "ERJ205", pases: 1 },
        { nombre: "Gabriela Mendoza Ramírez", codigo: "GMR693", pases: 2 },
        { nombre: "José Antonio Bárcenas Torres", codigo: "JABT118", pases: 1 },
        { nombre: "Ximena Delgado Padilla", codigo: "XDP512", pases: 3 },
        { nombre: "Pablo Cervantes Gómez", codigo: "PCG830", pases: 2 },
        { nombre: "Beatriz López Salazar", codigo: "BLS275", pases: 1 },
        { nombre: "Mateo Escalante Muñoz", codigo: "MEM387", pases: 2 },
        { nombre: "Ivana Sánchez Ortega", codigo: "ISO742", pases: 1 },
        { nombre: "Cristian Paredes Zavala", codigo: "CPZ609", pases: 2 },
        { nombre: "Julia Torres Aguirre", codigo: "JTA874", pases: 2 },
        { nombre: "Esteban Rodríguez Navarro", codigo: "ERN978", pases: 3 },
        { nombre: "Mariana Gómez Palacios", codigo: "MGP615", pases: 1 },
        { nombre: "Rodrigo Salinas Domínguez", codigo: "RSD490", pases: 2 },
        { nombre: "Paola Ruiz Herrera", codigo: "PRH223", pases: 1 },
        { nombre: "Daniel Castañeda Figueroa", codigo: "DCF362", pases: 2 },
    ];

    const confirmBtn = document.getElementById("rsvp-confirm");
    const inputCode = document.getElementById("rsvp-code");
    const formSection = document.querySelector(".layout__forms");
    const errorMsg = document.getElementById("rsvp-error");
    const nombreSpan = document.getElementById("invitado-nombre");
    const pasesSpan = document.getElementById("invitado-pases");
    const iframe = document.getElementById("google-form");

    // Ocultar form completo al inicio
    formSection.style.display = "none";
    iframe.style.display = "none";

    confirmBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const code = inputCode.value.trim().toUpperCase();
        const invitado = invitados.find((i) => i.codigo === code);

        if (invitado) {
            formSection.style.display = "block";
            iframe.style.display = "block";
            errorMsg.style.display = "none";
            nombreSpan.innerText = `Hola ${invitado.nombre}`;
            pasesSpan.innerText = `Tienes ${invitado.pases} pase(s)`;
        } else {
            formSection.style.display = "none";
            iframe.style.display = "none";
            errorMsg.style.display = "block";
        }
    });
});
