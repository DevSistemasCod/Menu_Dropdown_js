function inicializar() {
  let dropdownBtn = document.getElementById('dropdownBtn');

  if (dropdownBtn instanceof HTMLButtonElement) {
    dropdownBtn.addEventListener('click', (event) => {
      alternarDropdown(event);
    });
    document.addEventListener('click', fecharDropdown);
  }
}

function alternarDropdown(event) {
  let menuDropdown = document.getElementById('divMenuDropdown');

  if (menuDropdown instanceof HTMLDivElement) {
     //adiciona a classe 'exibir' ao elemento menuDropdown
     // se ela não estiver presente, ou a remove se já estiver.
    menuDropdown.classList.toggle('exibir');
    event.stopPropagation(); // Impede que o clique no dropdown propague para o documento
  }
}

function fecharDropdown(event) {
  if (!event.target.matches('.estiloDropdownBtn')) {
    let menusDropdown = document.getElementsByClassName('conteudoDivDropdown');

    for (let i = 0; i < menusDropdown.length; i++) {
      let menuAberto = menusDropdown[i];
      if (menuAberto.classList.contains('exibir')) {
        menuAberto.classList.remove('exibir');
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
