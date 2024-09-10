function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    // Se campoPesquisa for vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags ? dado.tags.toLowerCase() : ""; // Verifica se `tags` existe

        // Se título, descrição ou tags incluem o campo de pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
                <div class="item-resultado">
                    <h2 class="title">
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <div class="grupo">
                        <p class="descricao-meta">${dado.descricao}</p>
                        <img class="imagem" src="${dado.imagem}" alt="${dado.titulo}">
                    </div>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    // Se não houver resultados
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
