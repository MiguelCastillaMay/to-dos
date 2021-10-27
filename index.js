const inpTitulo = document.getElementById("inp-titulo"); //input del titulo
const inpDesc = document.getElementById("inp-desc"); //input del contendio
const btnAgregar = document.getElementById("btn-agregar"); //boton agregar
const lista = document.querySelector(".lista"); //div de los to-do's

let toDos = [];

btnAgregar.addEventListener("click", () => {
  if (inpTitulo.value !== "" && inpDesc.value !== "") {
    //crea objeto del to-do
    let toDo = {
      titulo: inpTitulo.value,
      desc: inpDesc.value,
      added: false,
    };
    toDos.push(toDo);
    renderToDos();
    inpDesc.value = "";
    inpTitulo.value = "";
  } else {
    alert("Llene todos los campos.");
  }
});

function renderToDos() {
  toDos.forEach((toDo, index) => {
    if (!toDo.added) {
      const titulo = document.createElement("h2"); //se crea el div del titulo del to-do
      titulo.setAttribute("id", `titulo${index}`); //se le asigna un ID para poder tacharlo
      titulo.textContent = toDo.titulo; //se agrega el titulo

      const desc = document.createElement("p"); //se crea el div del contenido del to-do
      desc.setAttribute("id", `desc${index}`); //se le asigna un ID para poder tacharlo
      desc.textContent = toDo.desc; //se agrega el contendio del to-do

      const boton = document.createElement("button"); //se crea el boton Done
      boton.textContent = "Done"; //se agrega el texto
      boton.setAttribute("id", `boton${index}`); //se le asigna un ID
      boton.setAttribute("onClick", `done(${index})`); //se le asigna un onClick

      const todo = document.createElement("div"); //se crea el div del to-do
      todo.className = "to-do"; //se le agrega la clase para estilizarlo

      //se agregan todos los elementos antes creados
      todo.appendChild(titulo);
      todo.appendChild(desc);
      todo.appendChild(boton);

      //se agrega el to-do a la lista de los to-do's
      lista.appendChild(todo);
      toDo.added = true;
    }
  });
}

function done(index) {
  const titulo = document.getElementById(`titulo${index}`); //obtenemos el titulo por su ID
  titulo.setAttribute("style", "text-decoration: line-through;"); //se tacha el texto

  const desc = document.getElementById(`desc${index}`); //obtenemos el contenido por su ID
  desc.setAttribute("style", "text-decoration: line-through;"); //se tacha el texto

  const boton = document.getElementById(`boton${index}`); //obtenemos el boton por su ID
  boton.textContent = "undone"; //se cambia el texto
  boton.removeAttribute("onClick"); //se quita el onClick anterior
  boton.setAttribute("onClick", `undone(${index})`); //se le asigna un nuevo onClick
}

function undone(index) {
  const titulo = document.getElementById(`titulo${index}`); //obtenemos el titulo por su ID
  titulo.removeAttribute("style"); //quitamos el tachado de texto

  const desc = document.getElementById(`desc${index}`); //obtenemos el contenido por su ID
  desc.removeAttribute("style"); //quitamos el tachado de texto

  const boton = document.getElementById(`boton${index}`); //obtenemos el boton por su ID
  boton.textContent = "done"; //se cambia el texto
  boton.removeAttribute("onClick"); //se quita el onClick anterior
  boton.setAttribute("onClick", `done(${index})`); //se le asigna un nuevo onClick
}
