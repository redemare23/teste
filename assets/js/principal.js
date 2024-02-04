// URL da API
const apiUrl = 'https://apex.oracle.com/pls/apex/redemare/site/texto';

// Fazendo uma solicitação GET usando Fetch
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao recuperar os dados da API');
    }
    return response.json();
  })
  .then(data => {
    // Verificar a estrutura dos dados
    console.log(data);

    // Acessar a matriz de funcionários
    const conteudoPrincipal = data.items;

    // Manipular os dados recebidos e inserir na lista
    const employeeList = document.getElementById('conteudo-principal');

    conteudoPrincipal.forEach(conten_text => {
        const listItem = document.createElement('p');
        listItem.textContent = `${conten_text.content_text}`;
        employeeList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Erro durante a solicitação:', error);
  });

  