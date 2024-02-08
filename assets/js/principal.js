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

    const tituloMapa1 = document.getElementById('titulo-mapa1');
    const conteudoMapa1 = document.getElementById('conteudo-mapa1');

    const tituloMapa2 = document.getElementById('titulo-mapa2');
    const conteudoMapa2 = document.getElementById('conteudo-mapa2');

    const mangueTitulo = document.getElementById('Mangue-titulo');
    const mangueConteudo = document.getElementById('Mangue-conteudo');

    const restigaTitulo = document.getElementById('Restiga-titulo');
    const restigaConteudo = document.getElementById('Restiga-conteudo');

    titulo.innerHTML = items[0].titulo;
    conteudoPrincipal.innerHTML = items[0].conteudo;

    tituloMapa1.innerHTML = items[2].titulo;
    conteudoMapa1.innerHTML = items[2].conteudo;

    tituloMapa2.innerHTML = items[3].titulo;
    conteudoMapa2.innerHTML = items[3].conteudo;

    mangueTitulo.innerHTML = items[4].titulo;
    mangueConteudo.innerHTML = items[4].conteudo;

    restigaTitulo.innerHTML = items[1].titulo;
    restigaConteudo.innerHTML = items[1].conteudo;
  }
});
