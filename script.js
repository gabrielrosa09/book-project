// Seleciona todos os elementos importantes do HTML
const paginas = document.querySelectorAll('.pagina');
const btnAnterior = document.getElementById('btn-anterior');
const btnProxima = document.getElementById('btn-proxima');
const livro = document.getElementById('livro');

// Variável para controlar qual página está visível
let paginaAtual = 0;

// Função para mostrar a página correta e esconder as outras
function mostrarPagina(indice) {
    // Esconde todas as páginas primeiro
    paginas.forEach((pagina, idx) => {
        pagina.classList.remove('ativa');
    });

    // Mostra apenas a página do índice que queremos
    paginas[indice].classList.add('ativa');
    
    // Atualiza o estado dos botões
    // Se estiver na primeira página, desabilita o botão "anterior"
    btnAnterior.disabled = indice === 0;

    // Se estiver na última página, desabilita o botão "próxima"
    btnProxima.disabled = indice === paginas.length - 1;
}

// O que acontece quando o botão "Próxima" é clicado
btnProxima.addEventListener('click', () => {
    // Verifica se não estamos na última página
    if (paginaAtual < paginas.length - 1) {
        paginaAtual++; // Avança para a próxima página
        mostrarPagina(paginaAtual);
    }
});

// O que acontece quando o botão "Anterior" é clicado
btnAnterior.addEventListener('click', () => {
    // Verifica se não estamos na primeira página
    if (paginaAtual > 0) {
        paginaAtual--; // Volta para a página anterior
        mostrarPagina(paginaAtual);
    }
});

// Quando o site carrega, mostra a primeira página (a capa)
mostrarPagina(paginaAtual);