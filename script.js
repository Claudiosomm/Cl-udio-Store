// ======== POPUP DE BOAS-VINDAS ========
window.addEventListener('load', () => {
    const popup = document.getElementById('popupBoasVindas');
    if (popup) {
      popup.style.display = 'block';
      setTimeout(() => {
        popup.style.display = 'none';
      }, 4000);
    }
  });
 
  // ======== ABRIR E FECHAR SUBCATEGORIAS ========
  document.addEventListener('DOMContentLoaded', () => {
    const categorias = document.querySelectorAll('.categoria');
 
    categorias.forEach(categoria => {
      categoria.addEventListener('click', () => {
        // Fecha as outras categorias abertas
        categorias.forEach(c => {
          if (c !== categoria) c.classList.remove('ativa');
        });
 
        // Alterna a categoria clicada
        categoria.classList.toggle('ativa');
      });
    });
  });
 
  // ======== SISTEMA DE COMENTÁRIOS ========
  document.addEventListener('DOMContentLoaded', () => {
    const btnEnviar = document.getElementById('enviarComentario');
    const inputComentario = document.getElementById('comentarioTexto');
    const lista = document.getElementById('listaComentarios');
 
    if (btnEnviar && inputComentario && lista) {
      // Carrega comentários salvos
      const comentariosSalvos = JSON.parse(localStorage.getItem('comentarios')) || [];
      comentariosSalvos.forEach(c => adicionarComentarioNaTela(c));
 
      // Enviar novo comentário
      btnEnviar.addEventListener('click', () => {
        const texto = inputComentario.value.trim();
        if (texto === '') return alert('Digite algo antes de enviar!');
 
        adicionarComentarioNaTela(texto);
        comentariosSalvos.push(texto);
        localStorage.setItem('comentarios', JSON.stringify(comentariosSalvos));
 
        inputComentario.value = '';
      });
 
      // Função para adicionar na tela
      function adicionarComentarioNaTela(texto) {
        const p = document.createElement('p');
        p.textContent = texto;
        lista.appendChild(p);
      }
    }
  });
