// Projeto Integrador Web - Semana 2

const tempero1 = {
    tempero:"Pimenta do Reino",
    mediaPreco:5,
    horta:true,
    combinacoes:["Frango Assado", "Carne de Panela", "Verduras e legumes cozidos", "Molhos"]
}

const tempero2 = {
    tempero:"Salsinha",
    mediaPreco:2,
    horta:true,
    combinacoes:["Sopas", "Risotos", "Carnes", "Farofas", "Queijos", "Molhos"]
}

const tempero3 = {
    tempero:"Manjericão",
    mediaPreco:4,
    horta:true,
    combinacoes:["Berinjela", "Pimentão", "Molhos de tomate", "Pizzas"]
}

const tempero4 = {
    tempero:"Canela",
    mediaPreco:4,
    horta:false,
    combinacoes:["Banana", "Maçã", "Carnes de caça", "Carnes na brasa", "Molhos"]
}

const tempero5 = {
    tempero:"Açafrão-da-terra",
    mediaPreco:6,
    horta:false,
    combinacoes:["Frango", "Sopas", "Macarrão", "Arroz", "Frutos do Mar", "Molhos"]
}

 const tempero6 = {
    tempero:"Hortelã",
    mediaPreco:3,
    horta:true,
    combinacoes:["Falafel", "Kibe", "Bebidas", "Pratos Agridoces"]
}



const temperosGerais = []

temperosGerais.push(tempero1,tempero2,tempero3,tempero4,tempero5,tempero6)

console.log(temperosGerais)



const temperosDeHorta = []



for(let i of temperosGerais){
    if (i.horta) {
        temperosDeHorta.push(i)
    } else {
        alert("É mais fácil comprar seu tempero na Feirinha")
    }
}
console.log(temperosDeHorta)