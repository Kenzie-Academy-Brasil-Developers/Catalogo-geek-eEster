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
    let product = productsArray[i]

    if (product.type == "Paintings") {
      paintingsArray.push(product)

    } else if (product.type == "Action Figures") {
      actionFiguresArray.push(product)
    }
  }

}
separateItens(productsArray)

function sectionPainting(paintingsArray) {

  const ulPaintings = document.querySelector(".list_paintings")

  for (let i = 0; i < paintingsArray.length; i++) {

    const paintings = paintingsArray[i]

    const paintingsCard = document.createElement("li")
    paintingsCard.classList.add("card")

    const paintingsImg = document.createElement("img")
    paintingsImg.classList.add("image_card")
    paintingsImg.src = paintings.image
    paintingsImg.alt = paintings.name

    const paintingsProductName = document.createElement("h2")
    paintingsProductName.classList.add("product_name")
    paintingsProductName.innerText = paintings.name

    const paintingsProductPrice = document.createElement("h2")
    paintingsProductPrice.classList.add("product_price")
    paintingsProductPrice.innerText = paintings.price

    paintingsCard.append(paintingsImg, paintingsProductName, paintingsProductPrice);
    ulPaintings.appendChild(paintingsCard);

  }
}
sectionPainting(paintingsArray)

function sectionActionFigure(actionFiguresArray){

  const ulAction = document.querySelector(".list_action")

  for (let i = 0; i < actionFiguresArray.length; i++) {
    const action = actionFiguresArray[i]

    const actionCard = document.createElement("li")
    actionCard.classList.add("card")

    const actionImg = document.createElement("img")
    actionImg.classList.add("image_card")
    actionImg.src = action.image
    actionImg.alt = action.name

    const actionProductName = document.createElement("h2")
    actionProductName.classList.add("product_name")
    actionProductName.innerText = action.name

    const actionProductPrice = document.createElement("h2")
    actionProductPrice.classList.add("product_price")
    actionProductPrice.innerText = action.price

    actionCard.append(actionImg, actionProductName, actionProductPrice);
    ulAction.appendChild(actionCard);

  }
}
sectionActionFigure(actionFiguresArray)


