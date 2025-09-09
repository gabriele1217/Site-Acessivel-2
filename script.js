document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
 
    botaoDeAcessibilidade.addEventListener('click', function (){
     botaoDeAcessibilidade.classList.toggle('rotacao-botao');
     opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
 
     const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
     botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
   
    })
 
     const aumentaFonteBotao = document.getElementById('aumentar-fonte');
     const diminuiFonteBotao = document.getElementById('diminuir-fonte');
     
     const alternaContraste = document.getElementById('alterna-contraste')
 
     let tamanhoAtualFonte = 1;
 
     aumentaFonteBotao.addEventListener('click', function(){
         tamanhoAtualFonte += 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`
 
     })
 
     diminuiFonteBotao.addEventListener('click', function(){
         tamanhoAtualFonte -= 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`
 
     })
 
     alternaContraste.addEventListener('click', function(){
         document.body.classList.toggle('alto-contraste')
     })
 
 
 })
 
 ScrollReveal().reveal('#inicio', { delay: 500 });
 ScrollReveal().reveal('#tropicalia', { delay: 500 });
 ScrollReveal().reveal('#galeria', { delay: 500 });
 ScrollReveal().reveal('#contato', { delay: 500 });

 // --- Acessibilidade ---

// Seletores
const botaoAcessibilidade = document.getElementById("botao-acessibilidade");
const opcoes = document.getElementById("opcoes-acessibilidade");
const aumentarFonte = document.getElementById("aumentar-fonte");
const diminuirFonte = document.getElementById("diminuir-fonte");
const alternaContraste = document.getElementById("alterna-contraste");

let tamanhoFonte = 100; // % inicial

// Mostrar/esconder opções
botaoAcessibilidade.addEventListener("click", () => {
  opcoes.classList.toggle("ativa");
});

// Aumentar fonte
aumentarFonte.addEventListener("click", () => {
  tamanhoFonte += 10;
  document.body.style.fontSize = tamanhoFonte + "%";
});

// Diminuir fonte
diminuirFonte.addEventListener("click", () => {
  if (tamanhoFonte > 60) { // limite mínimo
    tamanhoFonte -= 10;
    document.body.style.fontSize = tamanhoFonte + "%";
  }
});

// Alternar contraste
alternaContraste.addEventListener("click", () => {
  document.body.classList.toggle("alto-contraste");
});
