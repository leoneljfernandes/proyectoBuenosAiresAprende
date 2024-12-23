// Verificacion de los campos del formulario

function verificarFormulario() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (!name.value.trim() & !name.value.trim() & !name.value.trim()) {
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

function generarListaProductos() {
  const box = {
    id: 5,
    name: "Mystery Box",
    price: 60,
    description: "",
  };

  let listado = [];

  for (let i = 0; i < 5; i++) {
    let boxAux = { ...box };
    boxAux.id = boxAux.id + i + 1;
    boxAux.name = boxAux.name + " " + boxAux.id;
    listado.push(boxAux);
    boxAux.price = boxAux.price + 5 * (i + 1);

    switch (i) {
      case 0:
        boxAux.description =
          "Regalos para los adultos de la familia, remeras, medias, y mas!";
        break;

      case 1:
        boxAux.description = "Zapatos de regalo para los chicas/os!";
        break;

      case 2:
        boxAux.description =
          "Regalos para los adultos familia! Sweaters, buzos y mas!";
        break;

      case 3:
        boxAux.description =
          "Jueguetes premium para niñas y niños de todas las edades";
        break;

      case 4:
        boxAux.description = "Zapatos y zapatillas para los adultos sorpresa!";
        break;

      default:
        boxAux.description = "";
        break;
    }
  }

  const contenedorProductos = document.querySelector(".product-container");

  for (let box of listado) {
    console.log(box);

    const productBox = document.createElement("div");
    productBox.classList.add("product-box-new");

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
    span.classList.add("price");
    span.textContent = `$${box.price}`;
    productBox.appendChild(span);

    const button = document.createElement("button");
    button.classList.add("addToCart");
    button.id = "addToCart";
    button.setAttribute("data-id", box.id);
    button.textContent = "Agregar al carrito";
    button.addEventListener("click", addProductToCart);
    productBox.appendChild(button);

    contenedorProductos.appendChild(productBox);
  }

  // Ocultar el botón "Mas productos" y mostrar el botón "Ocultar"
  document.querySelector(".more-products button").style.display = "none";

  const hideButton = document.createElement("button");
  hideButton.textContent = "Ocultar";
  hideButton.href = "#products";
  hideButton.classList.add("hide-button");

  document.querySelector(".more-products").appendChild(hideButton);

  hideButton.addEventListener("click", function () {
    const products = document.querySelectorAll(".product-box-new");
    products.forEach((product) => product.remove());
    window.location.href = "#products";

    document.querySelector(".more-products button").style.display = "block";
    hideButton.remove();
  });
}

const detailedDescriptions = {
  1: "Hasta 2 bufandas, 2 pares de medias y 1 gorro navideño",
  2: "2 remeras navideñas para los niños y niñas, gorros y medias navideñas",
  3: "Hasta 3 swaters, 1 buzo y 3 pares de medias navideñas",
  4: "Juguetes para niñas y niños de 3 a 5 años de edad",
  5: "Juguetes para niños y niñas de todas las edades",
};

function descripcionDetallada(event) {
  event.preventDefault();
  const link = event.target;
  const productId = link.getAttribute("data-id");
  const description = detailedDescriptions[productId];
  const descriptionContainer = document.getElementById(
    `description-${productId}`
  );

  if (descriptionContainer) {
    if (descriptionContainer.classList.contains("visible")) {
      descriptionContainer.classList.remove("visible");
      descriptionContainer.innerHTML = "";
    } else {
      descriptionContainer.classList.add("visible");
      descriptionContainer.innerHTML = description;
    }
  }
}

document.querySelectorAll(".info-button").forEach((button) => {
  button.addEventListener("click", descripcionDetallada);
});

function crearListado() {
  const elementos = document.querySelectorAll("#products .product-box");
  const productos = [];

  for (let elem of elementos) {
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

// Función para generar copos de nieve
(function createSnowflakes() {
  const snowflakesContainer = document.querySelector(".snowflakes");
  const numberOfSnowflakes = 200;

  for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    const snowflakeImg = document.createElement("img");
    snowflakeImg.src = "img/snowflake.png"; 
    snowflakeImg.alt = "";

    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; 
    snowflake.style.animationDelay = `${Math.random() * 5}s`; 
    snowflake.style.opacity = Math.random();
    snowflakeImg.style.width = `${Math.random() * 10 + 10}px`; 
    snowflakeImg.style.height = "auto"; 

    snowflake.appendChild(snowflakeImg);
    snowflakesContainer.appendChild(snowflake);
  }
})();



/* CARRITO */
const cartSidebar = document.getElementById("cartSidebar");
const toggleCart = document.getElementById("toggleCart");

// Función para abrir el carrito
function openCart() {
  cartSidebar.classList.add("open");
}

// Función para cerrar el carrito
function closeCartFunction() {
  cartSidebar.classList.remove("open");
}

// Evento para abrir el carrito
toggleCart.addEventListener("click", openCart);

// Agrega el evento del botón de cierre dinámico
document.addEventListener("click", function (event) {
  if (event.target.id === "closeCart") {
    closeCartFunction();
  }
});

// Función para agregar un producto al carrito
function addProductToCart(event) {
  const button = event.target;
  const productId = button.getAttribute("data-id");
  const productName = button
    .closest(".product-box, .product-box-new")
    .querySelector("h3").textContent;
  const productPrice = button
    .closest(".product-box, .product-box-new")
    .querySelector(".price").textContent;

  const product = {
    id: productId,
    name: productName,
    price: productPrice,
    quantity: 1,
  };

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const existingProductIndex = carrito.findIndex(
    (item) => item.id === productId
  );

  if (existingProductIndex === -1) {
    carrito.push(product);
  } else {
    carrito[existingProductIndex].quantity += 1;
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito!");
  updateCart();
}

// Función para eliminar un producto del carrito
function removeProductFromCart(event) {
  const button = event.target;
  const productId = button.getAttribute("data-id");

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  carrito = carrito.filter((item) => item.id !== productId);

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto eliminado del carrito!");
  updateCart();
}

// Función para actualizar la cantidad de un producto
function updateProductQuantity(event) {
  const input = event.target;
  const productId = input.getAttribute("data-id");
  const newQuantity = parseInt(input.value);

  if (newQuantity < 1) {
    alert("La cantidad debe ser al menos 1.");
    input.value = 1;
    return;
  }

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  carrito.forEach((product) => {
    if (product.id === productId) {
      product.quantity = newQuantity;
    }
  });

  localStorage.setItem("carrito", JSON.stringify(carrito));
  updateCart();
}

// Función para actualizar el carrito
function updateCart() {
  cartSidebar.innerHTML = "";

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let total = 0;

  const closeButton = document.createElement("button");
  closeButton.id = "closeCart";
  closeButton.classList.add("close-btn");
  closeButton.innerHTML = "✖";
  cartSidebar.appendChild(closeButton);

  const divisor = document.createElement("div");
  divisor.classList.add("divisor");
  divisor.innerHTML = "<span></span>";
  cartSidebar.appendChild(divisor);

  if (carrito.length > 0) {
    carrito.forEach((product) => {
      const cartItemElement = document.createElement("div");
      cartItemElement.classList.add("cart-item");
      cartItemElement.innerHTML = `
        <h4>${product.name}</h4>
        <span class="price">${product.price}</span>
        <input type="number" class="quantity" value="${product.quantity}" min="1" data-id="${product.id}">
        <button class="remove-btn" data-id="${product.id}">Eliminar</button>
      `;
      cartSidebar.appendChild(cartItemElement);

      total +=
        parseFloat(product.price.replace("$", "").trim()) * product.quantity;
    });

    const totalElement = document.createElement("p");
    totalElement.id = "cartTotal";
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    cartSidebar.appendChild(totalElement);
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Tu carrito está vacío.";
    cartSidebar.appendChild(emptyMessage);
  }

  const checkoutButton = document.createElement("button");
  checkoutButton.textContent = "Finalizar Compra";
  checkoutButton.classList.add("checkout-btn");
  cartSidebar.appendChild(checkoutButton);

  // Asignar eventos dinámicos
  const removeButtons = cartSidebar.querySelectorAll(".remove-btn");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeProductFromCart);
  });

  const quantityInputs = cartSidebar.querySelectorAll(".quantity");
  quantityInputs.forEach((input) => {
    input.addEventListener("change", updateProductQuantity);
  });
}

// Evento al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  updateCart();

  // Agregar eventos a los botones "Agregar al carrito"
  const addToCartButtons = document.querySelectorAll(".addToCart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", addProductToCart);
  });
});

async function readAPI() {
  try {
    const resPost = await fetch("https://dummyjson.com/comments");
    const post = await resPost.json();
    console.log("Resultado:", post);

    const commentsContainer = document.querySelector(".comments-container");
    const maxComments = 5;

    post.comments.sort(() => Math.random() - 0.5);

    post.comments.slice(0,maxComments).forEach((comment) => {
      const cartComent = document.createElement("div");
      cartComent.classList.add("comment-box");
      const commentCard = document.createElement("div");
      commentCard.classList.add("comment-card");
      commentCard.innerHTML = `
        <h4>${comment.user.fullName}</h4>
        <h6>${comment.body}</h6>
      `;
      cartComent.appendChild(commentCard);
      commentsContainer.appendChild(cartComent);
    });
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Proceso finalizado");
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  console.log("Página cargada");
  await readAPI();
});
