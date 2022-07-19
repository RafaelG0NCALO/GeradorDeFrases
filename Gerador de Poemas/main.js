const fraseTexto = document.querySelector(".frase"),
fraseBtn = document.querySelector("button"),
autorNome = document.querySelector(".autor .nome")
soundBtn = document.querySelector(".sound")
copyBtn = document.querySelector(".copy")
twitterBtn = document.querySelector(".twitter")

//Frases aleatorias função
function randomFrase(){
    fraseBtn.innerText = "procurando..."
    fraseBtn.classList.add("loading")

    //buscando citações aleatórias da api e analisando em objeto javascript
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        fraseTexto.innerText = result.content
        autorNome.innerText = result.author
        fraseBtn.innerText = "Nova frase"
        fraseBtn.classList.remove("loading")
    })
}

soundBtn.addEventListener("click", ()=>{
    //o SpeechSynthesisUtteranc é uma API de fala da web que representa uma solicitação de fala
    let utterance = new SpeechSynthesisUtterance(`${fraseTexto.innerText} de ${autorNome.innerText} `)
    speechSynthesis.speak(utterance)
})

copyBtn.addEventListener("click", ()=>{
    //copiando o texto da citação ao clickar
    //A propriedade writeText() grava a string do texto especificado na área
    navigator.clipboard.writeText( fraseTexto.innerText)
})

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${fraseTexto.innerText}`
    window.open(tweetUrl, "_blank")
})

fraseBtn.addEventListener("click", randomFrase);