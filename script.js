const productsArray = [
  // Produto 1 || Paintings
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$ 99,00",
    type: "Paintings",
  },
  // Produto 3
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$ 275,00",
    type: "Paintings",
  },
  // Produto 4
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$ 160,00",
    type: "Paintings",
  },
  // Produto 5
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$ 120,00",
    type: "Paintings",
  },

  // Produto 6 || Action Figures
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 7
  {
    image: " ./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$ 700,00",
    type: "Action Figures",
  },
  // Produto 8
  {
    image: " ./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$ 950,00",
    type: "Action Figures",
  },
  // Produto 9
  {
    image: " ./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$ 1030,00",
    type: "Action Figures",
  },
  // Produto 10
  {
    image: " ./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$ 870,00",
    type: "Action Figures",
  },
  // Produto 11
  {
    image: " ./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$ 510,00",
    type: "Action Figures",
  },
];


//Separando os produdos 

const actionFiguresArray = []
const paintingsArray = []


function separateItens(productsArray) {

  for (let i = 0; i < productsArray.length; i++) {
    let produtos = productsArray[i]

    if (produtos.type == "Paintings") {
      paintingsArray.push(produtos)


    } else if (produtos.type == "Action Figures") {
      actionFiguresArray.push(produtos)

    }
  }

}
separateItens(productsArray)



function secaoPainting(paintingsArray) {

  const ulPaintings = document.querySelector(".list_paintings")

  for (let i = 0; i < paintingsArray.length; i++) {
    const paintings = paintingsArray[i]


    const criandoLi = document.createElement("li")
    criandoLi.classList.add("card")

    const criandoImg = document.createElement("img")
    criandoImg.classList.add("imagem_card")
    criandoImg.src = paintings.image
    criandoImg.alt = paintings.name


    const criandoH2 = document.createElement("h2")
    criandoH2.classList.add("nome_produto")
    criandoH2.innerText = paintings.name

    const criandoH2_preco = document.createElement("h2")
    criandoH2_preco.classList.add("preco_produto")
    criandoH2_preco.innerText = paintings.price

    criandoLi.append(criandoImg, criandoH2, criandoH2_preco);
    ulPaintings.appendChild(criandoLi);


  }


}

secaoPainting(paintingsArray)



function secaoActionFigure(actionFiguresArray){

  const ulAction = document.querySelector(".list_action")

  for (let i = 0; i < actionFiguresArray.length; i++) {
    const action = actionFiguresArray[i]


    const criandoLi = document.createElement("li")
    criandoLi.classList.add("card")

    const criandoImg = document.createElement("img")
    criandoImg.classList.add("imagem_card")
    criandoImg.src = action.image
    criandoImg.alt = action.name


    const criandoH2 = document.createElement("h2")
    criandoH2.classList.add("nome_produto")
    criandoH2.innerText = action.name

    const criandoH2_preco = document.createElement("h2")
    criandoH2_preco.classList.add("preco_produto")
    criandoH2_preco.innerText = action.price

    criandoLi.append(criandoImg, criandoH2, criandoH2_preco);
    ulAction.appendChild(criandoLi);


  }
}
secaoActionFigure(actionFiguresArray)


