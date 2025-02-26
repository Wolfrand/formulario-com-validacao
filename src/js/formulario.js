const formulario = document.querySelector(".formulario");
const campoDePreenchimento = document.querySelectorAll(".campo-de-preenchimento");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    campoDePreenchimento.forEach(input => {
        const campoPreenchido = input.value !== "";
        const campoObrigatorio = input.nextElementSibling;

        if (campoPreenchido) {
            input.classList.remove("borda-vermelha"),
            input.classList.add("borda-verde"),
            campoObrigatorio.classList.remove("mostrar");
        } else {
            input.classList.remove("borda-verde"),
            input.classList.add("borda-vermelha"),
            campoObrigatorio.classList.add("mostrar");
        };
    });
});