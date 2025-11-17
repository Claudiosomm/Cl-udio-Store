// Função para adicionar um comentário
function adicionarComentario() {
    // Pega o valor do comentário
    const comentario = document.getElementById("comentario").value;
  
    // Verifica se o comentário não está vazio
    if (comentario.trim() !== "") {
  
      // Carrega os comentários existentes do localStorage
      let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
  
      // Adiciona o novo comentário ao array
      comentarios.push(comentario);
  
      // Salva o array atualizado no localStorage
      localStorage.setItem("comentarios", JSON.stringify(comentarios));
  
      // Limpa o campo de comentário
      document.getElementById("comentario").value = "";
  
      // Atualiza a lista de comentários
      exibirComentarios();
    }
  }
  
  // Função para exibir os comentários na página
  function exibirComentarios() {
    // Carrega os comentários do localStorage
    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
  
    // Elemento que receberá os comentários
    const listaComentarios = document.getElementById("listaComentarios");
  
    // Limpa antes de reinserir (evita duplicações)
    listaComentarios.innerHTML = "";
  
    // Exibe cada comentário armazenado
    comentarios.forEach(comentario => {
      const p = document.createElement("p");
      p.textContent = comentario;
      listaComentarios.appendChild(p);
    });
  }
  
  // Carrega automaticamente os comentários ao carregar a página
  document.addEventListener("DOMContentLoaded", exibirComentarios);
  
