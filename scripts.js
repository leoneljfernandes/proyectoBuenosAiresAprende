 // Verificacion de los campos del formulario

  function verificarFormulario() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if(!name.value.trim() & !name.value.trim() & !name.value.trim()){
        alert("Complete el formulario");
        name.focus();
        email.focus();
        message.focus();
        return false;
    }

    if (!name.value.trim()) {
      alert("Por favor, ingresa tu nombre.");
      name.focus(); 
      return false; 
    }
  
    if (!name.value.trim()) {
      alert("Por favor, ingresa tu correo electrónico.");
      email.focus();
      return false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      alert("Por favor, ingresa un correo válido.");
      email.focus();
      return false;
    }
  
    if (!name.value.trim()) {
      alert("Por favor, ingresa tu mensaje.");
      message.focus();
      return false;
    }
  
    alert("Formulario enviado correctamente.");
    return true;
  }
  
  function generarListaProductos(){
    const box={
        id: 5,
        name: "Mystery Box",
        price: 25,
        description: ""
    }

    let listado=[];

    for(let i=0;i<5;i++){
        let boxAux = {...box};
        boxAux.id = boxAux.id+i+1;
        boxAux.name = boxAux.name + " " + boxAux.id
        listado.push(boxAux);
        boxAux.price = boxAux.price + (5*(i+1));

        switch(i){
            case 0:
                boxAux.description="Regalos para la familia, bufandas, medias,  y mas!";
            break;
            
            case 1:
                boxAux.description="Regalos para los chicas/os, remeras, gorros y mas!";
            break;

            case 2:
                boxAux.description="Regalos para la familia! Sweaters, buzos y mas!";
            break;

            case 3:
                boxAux.description="Jueguetes para niñas y niños de 3 a 5 años de edad";
            break;

            case 4:
                boxAux.description="Jueguetes para niños y niñas de todas las edades";
            break;

            default:
                boxAux.description=""
            break;
        }
    }

    const contenedorProductos = document.querySelector('.product-container');

    for(let box of listado){
        console.log(box);

        const productBox = document.createElement('div');
        productBox.classList.add('product-box-new');  // Agregar la clase para estilo CSS
    
        const h3 = document.createElement("h3");
        h3.textContent = box.name;
        productBox.appendChild(h3);
    
        const img = document.createElement("img");
        img.src = "./img/mystery_box_christmas.jpg";
        img.alt = box.name;
        productBox.appendChild(img);
    
        const p = document.createElement("p");
        p.textContent = box.description;
        productBox.appendChild(p);
    
        const span = document.createElement("span");
        span.textContent = `$${box.price}`;
        productBox.appendChild(span);

        contenedorProductos.appendChild(productBox);
    }

    // Ocultar el botón "Mas productos" y mostrar el botón "Ocultar"
    document.querySelector(".more-products button").style.display = "none";

    const hideButton = document.createElement("button");
    hideButton.textContent = "Ocultar";
    hideButton.classList.add("hide-button");

    // Mostrar el botón "Ocultar"
    document.querySelector(".more-products").appendChild(hideButton);

    // Acción al hacer clic en el botón "Ocultar"
    hideButton.addEventListener("click", function () {
        // Eliminar los productos mostrados
        const products = document.querySelectorAll(".product-box-new");
        products.forEach(product => product.remove());

        // Volver a mostrar el botón "Mas productos" y ocultar el botón "Ocultar"
        document.querySelector(".more-products button").style.display = "block";
        hideButton.remove();
    });
  }

  const detailedDescriptions = {
    1: "Hasta 2 bufandas, 2 pares de medias y 1 gorro navideño",
    2: "2 remeras navideñas para los niños y niñas, gorros y medias navideñas",
    3: "Hasta 3 swaters, 1 buzo y 3 pares de medias navideñas",
    4: "Jueguetes para niñas y niños de 3 a 5 años de edad",
    5: "Jueguetes para niños y niñas de todas las edades"
  };

  function descripcionDetallada(event) {
    const button = event.target;
    const productId = button.getAttribute("data-id");
    const description = detailedDescriptions[productId];
    const descriptionContainer = document.getElementById(`description-${productId}`);
  
    if (descriptionContainer) {
      if (descriptionContainer.classList.contains("visible")) {
        descriptionContainer.classList.remove("visible");
        descriptionContainer.innerHTML = ""; // Ocultar descripción
      } else {
        descriptionContainer.classList.add("visible");
        descriptionContainer.innerHTML = description; // Mostrar descripción
      }
    }
  }
  
document.querySelectorAll(".info-button").forEach(button => {
    button.addEventListener("click", descripcionDetallada);
});

function crearListado(){
    const elementos = document.querySelectorAll("#products .product-box");
    const productos = [];

    for(let elem of elementos){
        const name = elem.querySelector("h3").textContent.trim();
        const description = elem.querySelector("p").textContent.trim();
        const price = elem.querySelector(".price").textContent.trim();
        const id = elem.querySelector(".info-button").dataset.id;
        
        productos.push({
            id: id,
            name: name,
            description: description,
            price: price,
        });
    }
    console.log(productos);
}