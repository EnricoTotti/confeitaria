
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

criarItemCardapio(
    'Bolo de chocolate',
    'Bolo bom e gostosinho',
    'https://assets.unileversolutions.com/recipes-v2/164246.jpg'
)


/*

    <div class="item">
        <h3>Bolo de morango</h3>
        <p class="descricao">Um irresistível bolo branco com morangos</p>
        <img class="img-item" src="https://www.sabornamesa.com.br/media/k2/items/cache/24d767ce6c156eb07b1fc26c266211f5_XL.jpg" alt="Bolo de morango">
    </div>

*/