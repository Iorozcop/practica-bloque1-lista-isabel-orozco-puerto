// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png").

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

const colorList = [
  {
    colorName: "white",
    hex: "#ffffff"
  },
  {
    colorName: "red",
    hex: "#ff0000"
  },
  {
    colorName: "orange",
    hex: "#ffa500"
  },
  {
    colorName: "yellow",
    hex: "#ffff00"
  },
  {
    colorName: "orchid",
    hex: "#da70d6"
  },
  {
    colorName: "pink",
    hex: "#ffc0cb"
  },
  {
    colorName: "green",
    hex: "#008000"
  },
  {
    colorName: "silver",
    hex: "#c0c0c0"
  }
];

let padreUL = document.querySelector("ul");

//añadimos li al ul recorriendo el array
for (let i = 0; i < colorList.length; i++) {
  let li = document.createElement("li");
  padreUL.appendChild(li);
}

//almacenamos un listado de li
let listali = document.querySelectorAll("li");

//añadimos el contenido a cada li
for (let i = 1; i < listali.length; i++) {
  let divHijo1 = document.createElement("div"); //creamos div
  let newTexto = document.createTextNode(
    "Color: " + colorList[i - 1].colorName
  ); //sacamos texto
  divHijo1.appendChild(newTexto); //añadimos el texto al div
  divHijo1.classList.add("color-name"); //añadimos clase al div
  listali[i].appendChild(divHijo1); //añadimos el div al li

  //div muestra
  let divHijo2 = document.createElement("div");
  let textoMuestra = document.createTextNode("Muestra");
  let color = colorList[i - 1].hex;
  divHijo2.appendChild(textoMuestra);
  divHijo2.classList.add("color-show");
  divHijo2.style.backgroundColor = color;
  listali[i].appendChild(divHijo2);

  //botón next item color
  let boton1 = document.createElement("button");
  let textoBoton1 = document.createTextNode("Next item color");
  boton1.appendChild(textoBoton1);
  boton1.classList.add("color-set");
  boton1.addEventListener("click", itemColor);
  listali[i].appendChild(boton1);
  boton1.addEventListener("click", e => e.stopPropagation(), false);

  //botón page color
  let boton2 = document.createElement("button");
  let textoBoton2 = document.createTextNode("Page color");
  boton2.appendChild(textoBoton2);
  boton2.classList.add("color-set");
  boton2.addEventListener("click", pageColor);
  listali[i].appendChild(boton2);
  boton2.addEventListener("click", e => e.stopPropagation(), false);

  //controlamos los pares para darle un estilo determinado
  if (i % 2 == 0) {
    listali[i].classList.add("color-item--odd");
    listali[i].classList.add("color-item");
  } else {
    listali[i].classList.add("color-item");
  }

  //función para cambiar de color el Li siguiente
  function itemColor() {
    let colorLi = colorList[i - 1].hex;
    if (listali[i].nextSibling == null) {
      listali[1].style.backgroundColor = colorList[7].hex;
    } else {
      listali[i].nextSibling.style.backgroundColor = colorLi;
    }
  }
  //Función para cambiar el color de fondo de la página
  function pageColor() {
    let colorBody = colorList[i - 1].hex;
    document.body.style.backgroundColor = colorBody;
  }

  //evento onclick en el Li
  listali[i].onclick = function() {
    alert(colorList[i - 1].colorName);
  };
  listali[i].addEventListener("click", e => e.stopPropagation(), false);
}

//evento click en Body
document.body.addEventListener("click",() => alert("body"), false);



