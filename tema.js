function cambiarTema() {
  const temaActivo = document.documentElement.classList.contains("tema-oscuro");

  if (temaActivo) {
    document.documentElement.classList.remove("tema-oscuro");
    document.getElementById("boton-tema").textContent = "Modo oscuro";
  } else {
    document.documentElement.classList.add("tema-oscuro");
    document.getElementById("boton-tema").textContent = "Modo claro";
  }
}
