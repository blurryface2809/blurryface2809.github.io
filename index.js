// Projeto Integrador Web - Semana 5

// console.log(`
// Tempero: ${tempero1.tempero.toUpperCase()};
// Média de preço na Feirinha: ${tempero1.mediaPreco} reais;
// É facilmente plantado na sua Hortinha? ${tempero1.horta};
// Pode ser muito bem combinado com os seguintes pratos: ${tempero1.combinacoes.join(", ")}.`)

const tempero1 = {
    tempero:"pimenta do reino",
    mediaPreco:5,
    horta:true,
    combinacoes:["Frango Assado", "Carne de Panela", "Verduras e legumes cozidos", "Molhos"],
    link: "https://pt.wikipedia.org/wiki/Pimenta-preta",
    imagem: "./assets/pimenta-do-reino.png",
}

const tempero2 = {
    tempero:"salsinha",
    mediaPreco:2,
    horta:true,
    combinacoes:["Sopas", "Risotos", "Carnes", "Farofas", "Queijos", "Molhos"],
    link: "https://pt.wikipedia.org/wiki/Salsa_(planta)",
    imagem: "./assets/salsinha.png",
}

const tempero3 = {
    tempero:"manjericão",
    mediaPreco:4,
    horta:true,
    combinacoes:["Berinjela", "Pimentão", "Molhos de tomate", "Pizzas"],
    link: "https://pt.wikipedia.org/wiki/Manjeric%C3%A3o-de-folha-larga",
    imagem: "./assets/manjericão.png",
}

const tempero4 = {
    tempero:"canela",
    mediaPreco:4,
    horta:false,
    combinacoes:["Banana", "Maçã", "Carnes de caça", "Carnes na brasa", "Molhos"],
    link: "https://pt.wikipedia.org/wiki/Canela",
    imagem: "./assets/canela.png",
    
}

const tempero5 = {
    tempero:"açafrão-da-terra",
    mediaPreco:6,
    horta:false,
    combinacoes:["Frango", "Sopas", "Macarrão", "Arroz", "Frutos do Mar", "Molhos"],
    link: "https://pt.wikipedia.org/wiki/A%C3%A7afr%C3%A3o-da-terra",
    imagem: "./assets/cúrcuma.png",
}

 const tempero6 = {
    tempero:"hortelã",
    mediaPreco:3,
    horta:true,
    combinacoes:["Falafel", "Kibe", "Bebidas", "Pratos Agridoces"],
    link: "https://pt.wikipedia.org/wiki/Mentha",
    imagem: "./assets/hortelã.png",
}



const temperosGerais = []

temperosGerais.push(tempero1,tempero2,tempero3,tempero4,tempero5,tempero6)

// console.log(temperosGerais)

const tempero = (obj) => {
    console.log(`
    - Tempero: ${obj.tempero.toUpperCase()};
    - Média de preço na Feirinha: ${obj.mediaPreco} reais;
    - É facilmente plantado na sua Hortinha? ${obj.horta};
    - Pode ser muito bem combinado com os seguintes pratos: ${obj.combinacoes.join(", ")}.`)
}

tempero(tempero1)
tempero(tempero2)
tempero(tempero3)
tempero(tempero4)
tempero(tempero5)
tempero(tempero6)

const boxTempero = document.querySelector(".caixas")
function adicionaTemperos () {

for(let i of temperosGerais){
    boxTempero.innerHTML += `
    <section>
    <ul> 
    <li><a target="_blank" href=${i.link}><strong>${i.tempero.toUpperCase()}</strong></a></li>
    <li><img src=${i.imagem} alt=${i.tempero} height="250vh" width="250vw" ></li>
    <li>Média de preço (100g) na feirinha: R$${i.mediaPreco},00 </li>
    <li>É facilmente plantada na sua Hortinha? ${i.horta ? "Sim!" : "Nem tanto, mais fácil comprar."} </li>
    <li>Combina bem com: ${i.combinacoes.join(", ")}</li>
    </ul>
    </section>`
}
   
   
}
adicionaTemperos()

const input = document.querySelector("#inputPesquisa")

function buscarTemperos () {
    const filtro = temperosGerais.filter ((tempero) => {
        return tempero.tempero.includes(input.value.toLowerCase())
        
    })
    console.log(filtro)



    if(input.value===""){
        alert ("Nenhum tempero foi pesquisado.")
    }else if(filtro.length===0){
        alert ("Nenhum tempero foi encontrado.")
    }else{
        boxTempero.innerHTML = ""
    //     boxTempero.innerHTML += `
        
    // <section>
    // <ul> 
    // <li><a href=${filtro[0].link}><strong>${filtro[0].tempero.toUpperCase()}</strong></a></li>
    // <li><img src=${filtro[0].imagem} alt=${filtro[0].tempero} height="250vh" width="250vw" ></li>
    // <li>Média de preço (100g) na feirinha: R$${filtro[0].mediaPreco},00 </li>
    // <li>É facilmente plantada na sua Hortinha? ${filtro[0].horta ? "Sim!" : "Nem tanto, mais fácil comprar."} </li>
    // <li>Combina bem com: ${filtro[0].combinacoes.join(", ")}</li>
    // </ul>
    // </section>`


        filtro.map((tempero)=>{
            console.log(tempero)
            return boxTempero.innerHTML += `
        
            <section>
            <ul> 
            <li><a href=${tempero.link}><strong>${tempero.tempero.toUpperCase()}</strong></a></li>
            <li><img src=${tempero.imagem} alt=${tempero.tempero} height="250vh" width="250vw" ></li>
            <li>Média de preço (100g) na feirinha: R$${tempero.mediaPreco},00 </li>
            <li>É facilmente plantada na sua Hortinha? ${tempero.horta ? "Sim!" : "Nem tanto, mais fácil comprar."} </li>
            <li>Combina bem com: ${tempero.combinacoes.join(", ")}</li>
            </ul>
            </section>`
        })
}

}







// let qualTempero = prompt("Digite qual tempero você busca:").toLowerCase()


// const temperosDeHorta = temperosGerais.filter ((tempero) => {
//         return tempero.tempero === qualTempero.toLowerCase()
// })

// console.log(temperosDeHorta)


// const tempero = (arrayTempero,stringTempero) => {
//     for(let tempero of arrayTempero){
//         if (stringTempero===tempero.tempero) {
//             console.log(`
//         Tempero: ${tempero.tempero.toUpperCase()};
//         Média de preço na Feirinha: ${tempero.mediaPreco} reais;
//         É facilmente plantado na sua Hortinha? ${tempero.horta};
//         Pode ser muito bem combinado com os seguintes pratos: ${tempero.combinacoes.join(", ")}.`)
//         } else {
//             alert ("Nenhum item foi encontrado! :(")
//         }
        
        
        
//     }
   
//     }



// tempero(temperosGerais,qualTempero)












