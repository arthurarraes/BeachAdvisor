let painelAtual = 1;
const larguraPainel = 1100;
const totalPainel = 3;

function mudar(direcao) {
    painelAtual += direcao;
    if (painelAtual < 1){
        painelAtual = totalPainel;
    }else if (painelAtual > totalPainel){
        painelAtual = 1;
    }
    mudarCarousel();
}
function mudarCarousel(){
    const carousel = document.getElementById('carousel');
    const container = document.querySelector('.carousel-container');
    const valorMovimento = -larguraPainel * (painelAtual - 1);
    carousel.style.transform = `translateX(${valorMovimento}px)` //Adiciona o movimento no eixo X
    container.style.width = `${larguraPainel}px`; // ajusta  alargura do painel

}
mudarCarousel() // função chamada pra garantir que funcione