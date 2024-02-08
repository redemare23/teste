document.addEventListener("DOMContentLoaded", function () {
  // URL da API
  const apiUrl = 'https://apex.oracle.com/pls/apex/redemare/conteudos/textos';

  // Fazendo uma solicitação GET usando Fetch
  fetch(apiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Erro ao recuperar os dados da API');
          }
          return response.json();
      })
      .then(data => {
          // Manipular e exibir os dados na página HTML
          console.log(data);
          displayData(data.items);
      })
      .catch(error => {
          console.error('Erro durante a solicitação:', error);
      });

  // Função para exibir os dados na página HTML
  function displayData(items) {
    // Exibindo o conteúdo principal
    const titulo = document.getElementById('titulo');
    const conteudoPrincipal = document.getElementById('conteudo-principal');

    const tituloMapa = document.getElementById('titulo-mapa');
    const conteudoMapa = document.getElementById('conteudo-mapa');

    tituloMapa.innerHTML = items[2].titulo;
    conteudoMapa.innerHTML = items[2].conteudo;
  }
});
