const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")

function mostarModal() {
    modal.style.left = "50%"
    mascara.style.visibility = "visible"
}
function esconderModal() {
    modal.style.left = "-100%"
    mascara.style.visibility = "hidden"
}
function showScreen(screenId) {
    // Oculta todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    // Exibe a tela selecionada
    document.getElementById(screenId).classList.add('active');
}