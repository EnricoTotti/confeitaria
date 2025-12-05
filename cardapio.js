
function criarItemCardapio(titulo, descricao, foto){
    const divItemCardapio = document.createElement('div')

    //colocar classe
    const h3Titulo = document.createElement('h3')
    h3Titulo.textContent = titulo

    const pDescricao = document.createElement('p')
    pDescricao.textContent = descricao

    const img = document.createElement('img')
    img.src = foto

    img.className = 'img-item'


    const divC = document.getElementById('cardapio')

    divItemCardapio.appendChild(h3Titulo)
    divItemCardapio.appendChild(pDescricao)
    divItemCardapio.appendChild(img)

    divC.appendChild(divItemCardapio)
}


async function fetchBolos() {
    try {
        // URL da sua API Flask
        const resposta = await fetch("https://confeitaria-api-f305.onrender.com/cardapio");

        if (!resposta.ok) {
            throw new Error("Erro ao buscar dados do cardápio");
        }

        const dados = await resposta.json(); // transforma em objeto JS

        // Percorre cada item do cardápio
        dados.forEach(item => {
            criarItemCardapio(item.titulo, item.descricao, item.foto);
        });

    } catch (erro) {
        console.error("Erro no fetch:", erro);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetchBolos();
});




/*

    <div class="item">
        <h3>Bolo de morango</h3>
        <p class="descricao">Um irresistível bolo branco com morangos</p>
        <img class="img-item" src="https://www.sabornamesa.com.br/media/k2/items/cache/24d767ce6c156eb07b1fc26c266211f5_XL.jpg" alt="Bolo de morango">
    </div>

*/