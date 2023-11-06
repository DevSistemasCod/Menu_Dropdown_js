// Espera o documento HTML ser totalmente carregado antes de executar a função inicializar.
document.addEventListener("DOMContentLoaded", inicializar);

// Função de inicialização.
function inicializar() {
  let btnDropdown = document.getElementById("btnDropdown");
  btnDropdown.addEventListener("click", alternarDropdown);

  // Adiciona um evento de "escuta" de clique no documento para fechar o dropdown.
  // não é necessário passar event para a função fecharDropdown nem para alternarDropdown
  // pois o navegador passa automaticamente o evento como um argumento para ela.
  document.addEventListener("click", fecharDropdown);
}

// Função para alternar a exibição do dropdown.
function alternarDropdown(event) {
  // Obtém o elemento do menu dropdown pelo seu Id.
  let menuDropdown  = document.getElementById("divMenuDropdown");
  // Adiciona ou remove a classe "exibir" para mostrar ou ocultar o dropdown.
  menuDropdown.classList.toggle("exibir");
  event.stopPropagation(); // Impede que o clique no dropdown propague para o documento
}

// Função para fechar o dropdown quando o usuário clica fora dele.
// função fecharDropdown recebe um parâmetro chamado 
// event para ser capaz de acessar informações sobre o evento 
// de clique que a acionou. 
// O parâmetro event é um objeto que contém informações sobre o evento, como o alvo do clique, coordenadas do cursor, teclas pressionadas, etc.
function fecharDropdown(event) {
  // Verifica se o alvo do clique não corresponde ao botão dropdown.
  if (!event.target.matches('.estiloBtnDropdown')) {
    // Obtém todos os elementos com a classe "conteudoDropdown".
    let menusDropdown = document.getElementsByClassName("conteudoDropdown");
    
    // Itera sobre os elementos para verificar se algum deles está aberto.
    for (let i = 0; i < menusDropdown.length; i++) {
      let menuAberto = menusDropdown[i];
      
      // Se o menu estiver aberto, remove a classe "exibir" para fechá-lo.
      if (menuAberto.classList.contains('exibir')) {
        menuAberto.classList.remove('exibir');
      }
    }
  }
}
