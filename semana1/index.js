// Projeto Integrador Web - Semana 3

const tempero1 = {
    tempero:"Pimenta do Reino",
    mediaPreco:5,
    horta:true,
    combinacoes:["Frango Assado", "Carne de Panela", "Verduras e legumes cozidos", "Molhos"]
}

// console.log(`
// Tempero: ${tempero1.tempero.toUpperCase()};
// Média de preço na Feirinha: ${tempero1.mediaPreco} reais;
// É facilmente plantado na sua Hortinha? ${tempero1.horta};
// Pode ser muito bem combinado com os seguintes pratos: ${tempero1.combinacoes.join(", ")}.`)


const tempero2 = {
    tempero:"salsinha",
    mediaPreco:2,
    horta:true,
    combinacoes:["Sopas", "Risotos", "Carnes", "Farofas", "Queijos", "Molhos"]
}

const tempero3 = {
    tempero:"manjericão",
    mediaPreco:4,
    horta:true,
    combinacoes:["Berinjela", "Pimentão", "Molhos de tomate", "Pizzas"]
}

const tempero4 = {
    tempero:"canela",
    mediaPreco:4,
    horta:false,
    combinacoes:["Banana", "Maçã", "Carnes de caça", "Carnes na brasa", "Molhos"]
}

const tempero5 = {
    tempero:"açafrão-da-terra",
    mediaPreco:6,
    horta:false,
    combinacoes:["Frango", "Sopas", "Macarrão", "Arroz", "Frutos do Mar", "Molhos"]
}

 const tempero6 = {
    tempero:"hortelã",
    mediaPreco:3,
    horta:true,
    combinacoes:["Falafel", "Kibe", "Bebidas", "Pratos Agridoces"]
}



const temperosGerais = []

temperosGerais.push(tempero1,tempero2,tempero3,tempero4,tempero5,tempero6)



// const tempero = (obj) => {
//     console.log(`
//     - Tempero: ${obj.tempero.toUpperCase()};
//     - Média de preço na Feirinha: ${obj.mediaPreco} reais;
//     - É facilmente plantado na sua Hortinha? ${obj.horta};
//     - Pode ser muito bem combinado com os seguintes pratos: ${obj.combinacoes.join(", ")}.`)
// }

// tempero(tempero1)
// tempero(tempero2)
// tempero(tempero3)
// tempero(tempero4)
// tempero(tempero5)
// tempero(tempero6)



let qualTempero = prompt("Digite qual tempero você busca:").toLowerCase()

const tempero = (arrayTempero,stringTempero) => {
    for(let tempero of arrayTempero){
        // console.log(tempero.tempero)
        // console.log(stringTempero)
        
        
        if (stringTempero===tempero.tempero) {
            console.log(`
        Tempero: ${tempero.tempero.toUpperCase()};
        Média de preço na Feirinha: ${tempero.mediaPreco} reais;
        É facilmente plantado na sua Hortinha? ${tempero.horta};
        Pode ser muito bem combinado com os seguintes pratos: ${tempero.combinacoes.join(", ")}.`)
        } else {
            alert ("Nenhum item foi encontrado! :(")
        }
        
        
        
    }
   
    }



tempero(temperosGerais,qualTempero)












