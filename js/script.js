window.onload = function () {
    // Contador de dias para o Processo Seletivo
    const targetDate = new Date('2025-12-10');
    const today = new Date();
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('dias-restantes').innerText = diffDays;

    // Exibe o primeiro depoimento no carregamento
    mostrarDepoimento(0);
};

// ---------------------------
// Depoimentos com indicadores
// ---------------------------

const depoimentos = document.querySelectorAll('.depoimento');
const indicadores = document.querySelectorAll('.indicador');
let idx = 0;

function mostrarDepoimento(i) {
    depoimentos.forEach((d, j) => d.classList.toggle('ativo', j === i));
    indicadores.forEach((ind, j) => ind.classList.toggle('ativo', j === i));
}

indicadores.forEach(ind => {
    ind.addEventListener('click', () => {
        idx = parseInt(ind.dataset.index);
        mostrarDepoimento(idx);
    });
});

// Alternância automática dos depoimentos a cada 5 segundos
setInterval(() => {
    idx = (idx + 1) % depoimentos.length;
    mostrarDepoimento(idx);
}, 5000);

// ---------------------------
// Troca de imagem na galeria
// ---------------------------

function trocarImagem(elemento) {
    const imagemPrincipal = document.getElementById('imagem-principal');
    imagemPrincipal.src = elemento.src;
}
