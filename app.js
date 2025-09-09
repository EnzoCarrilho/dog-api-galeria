'use strict'

async function buscarImagens(raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()
    console.log(imagens.message)
    return imagens.message
}

function criarImagem(srcImagem){
    const galeria = document.getElementById('container-galeria')
    const imagem = document.createElement('img')
    imagem.src = srcImagem.url

    galeria.appendChild(imagem)
}

const botaoBuscar = document.getElementById('botao-buscar')

botaoBuscar.addEventListener('click', async () => {
    const raca = document.getElementById('input-raca').value
    const arrayImagens = await buscarImagens(raca)

    for(let i = 0; i < arrayImagens.length; i++){
        criarImagem(arrayImagens[i])
    }
})









