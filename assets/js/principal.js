document.addEventListener("DOMContentLoaded", async function () {
    try {
      const apiUrl = 'https://apex.oracle.com/pls/apex/redemare/conteudos/textos';
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Erro ao recuperar os dados da API');
      }
  
      const data = await response.json();
      displayData(data.items);
    } catch (error) {
      console.error('Erro durante a solicitação:', error.message);
    }
  
    function displayData(items) {
      const updateElement = (id, content) => {
        const element = document.getElementById(id);
        if (element) {
          element.innerHTML = content;
        }
      };
  
      updateElement('titulo', items[0].titulo);
      updateElement('conteudo-principal', items[0].conteudo);
  
      updateElement('titulo-mapa1', items[2].titulo);
      updateElement('conteudo-mapa1', items[2].conteudo);
  
      updateElement('titulo-mapa2', items[3].titulo);
      updateElement('conteudo-mapa2', items[3].conteudo);
  
      updateElement('Mangue-titulo', items[4].titulo);
      updateElement('Mangue-conteudo', items[4].conteudo);
  
      updateElement('Restiga-titulo', items[1].titulo);
      updateElement('Restiga-conteudo', items[1].conteudo);
    }
  });
  