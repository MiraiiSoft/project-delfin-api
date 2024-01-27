const apiURL = "http://localhost:3000";
const pathname = location.pathname;
const idProduct = pathname.split("/").pop();
const arrayImages = []

if (pathname.includes("editar")) {
  fetch(`${apiURL}/api/producto/${idProduct}`)
    .then((res) => res.json())
    .then((res) => {
      if(res.success){
        const { data } = res;
        const codigoBarras = document.getElementById("codigo_barras")
        const nombre = document.getElementById("nombre")
        const marca = document.getElementById("marca")
        const descripcion = document.getElementById("descripcion")
        const imagen = document.getElementById("imagen")
        const compra = document.getElementById("compra")
        const precio_unitario = document.getElementById("precio_unitario")
        const precio_mayoreo = document.getElementById("precio_mayoreo")
        const precio_caja = document.getElementById("precio_caja")
        const inicio_mayoreo = document.getElementById("inicio_mayoreo")
        const inicio_caja = document.getElementById("inicio_caja")
        const existencias = document.getElementById("existencias")
        const unidadesPaquete = document.getElementById("unidadesPaquete")
        const numPaquete = document.getElementById("numPaquete")
        const id_color = document.getElementById("id_color")
        const id_categoria = document.getElementById("id_categoria")
        const id_tipo = document.getElementById("id_tipo")

        codigoBarras.value = data.codigo_barras
        nombre.value = data.nombre
        marca.value = data.marca
        descripcion.value = data.descripcion
        imagen.value = data.imagen.url[0]
        compra.value = data.compra
        precio_unitario.value = data.precio_unitario
        precio_mayoreo.value = data.precio_mayoreo
        precio_caja.value = data.precio_caja
        inicio_mayoreo.value = data.inicio_mayoreo
        inicio_caja.value = data.inicio_caja
        existencias.value = data.inventario[0].existencias
        unidadesPaquete.value = data.inventario[0].unidadesPaquete
        numPaquete.value = data.inventario[0].numPaquete
        id_color.value = data.id_color
        id_categoria.value = data.id_categoria
        id_tipo.value = data.id_tipo
      }else{
        modal("Algo va mal", res.message)
      }
    })
    .catch(err => {
      modal("Algo a ocurrido", `${err}`)
    })
}

var producto = document.getElementById("getProductos");
producto.addEventListener("click", function (event) {
  event.preventDefault();

  fetch(`${apiURL}/api/producto`)
    .then((response) => response.json())
    .then((responseData) => {
      if (responseData.success) {
        var productos = responseData.data;
        generateTableProductos(productos); // Pasar los datos completos a la función generateTable
      } else {
        console.error(
          "Error en la respuesta del endpoint:",
          responseData.error
        );
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function generateTableProductos(productos) {
  var tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = "";

  var table = document.createElement("table");
  table.classList.add("table");
  tableContainer.appendChild(table);

  var thead = document.createElement("thead");
  thead.classList.add("thead-dark");
  var headerRow = document.createElement("tr");

  var selectedFields = [
    "Código de Barras",
    "Descripción",
    "Marca",
    "Precio",
    "Imagen",
    "Inventario",
    "Opciones",
  ];

  selectedFields.forEach((field) => {
    var th = document.createElement("th");
    th.textContent = field;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  var tbody = document.createElement("tbody");
  table.appendChild(tbody);

  productos.forEach((producto) => {
    var row = document.createElement("tr");

    var codigoBarrasCell = document.createElement("td");
    codigoBarrasCell.textContent = producto.codigo_barras;
    row.appendChild(codigoBarrasCell);

    var descripcionCell = document.createElement("td");
    descripcionCell.textContent = producto.descripcion;
    row.appendChild(descripcionCell);

    var marcaCell = document.createElement("td");
    marcaCell.textContent = producto.marca;
    row.appendChild(marcaCell);

    var precioCell = document.createElement("td");
    precioCell.textContent = producto.precio_unitario;
    row.appendChild(precioCell);

    var imagenCell = document.createElement("td");
    var imagen = document.createElement("img");
    imagen.src = producto.imagen.url;
    imagen.width = 50;
    imagenCell.appendChild(imagen);
    row.appendChild(imagenCell);

    var inventarioCell = document.createElement("td");
    inventarioCell.textContent = producto.inventario[0].existencias;
    row.appendChild(inventarioCell);

    var opcionesCell = document.createElement("td");
    var editLink = document.createElement("a");
    editLink.href = "#";
    editLink.classList.add("mr-2");
    editLink.innerHTML = '<i class="material-icons">edit</i>';
    opcionesCell.appendChild(editLink);

    var deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.classList.add("mr-2");
    deleteLink.innerHTML = '<i class="material-icons">delete</i>';
    opcionesCell.appendChild(deleteLink);

    deleteLink.addEventListener("click", function (event) {
      event.preventDefault(); // Evita que el enlace se comporte de forma predeterminada

      // Realiza la solicitud DELETE
      fetch("/api/producto/delete/" + producto.id_producto, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            // Si la solicitud fue exitosa, muestra una alerta
            alert("Producto eliminado con éxito");
            // Eliminar el enlace del elemento opcionesCell después de la eliminación exitosa
            opcionesCell.removeChild(deleteLink);
          } else {
            // Si la solicitud no fue exitosa, muestra una alerta de error
            alert("Error al eliminar el producto");
          }
        })
        .catch((error) => {
          // Si ocurrió un error en la solicitud, muestra una alerta de error de red
          alert("Error de red: " + error);
        });
    });

    var viewLink = document.createElement("a");
    viewLink.href = "#";
    viewLink.innerHTML = '<i class="material-icons">visibility</i>';
    opcionesCell.appendChild(viewLink);

    viewLink.addEventListener("click", function (event) {
      event.preventDefault();
      var productoid = producto.id_producto;
      fetch("/api/producto/" + productoid)
        .then((response) => response.json())
        .then((responseData) => {
          
          mostrarProducto(responseData);
        })
        .catch((error) => {
          console.log("error " + error);
        });
    });

    function mostrarProducto(producto) {
      var html = `
        <div class="card" style="border: 1px solid #000; border-radius: 10px;">
          <div class="card-header">
            <h2>Información del producto ${producto.data.nombre}</h2>
          </div>
          <div class="card-body">
            <p><strong>ID de Producto:</strong> ${producto.data.id_producto}</p>
            <p><strong>Código de Barras:</strong> ${producto.data.codigo_barras}</p>
            <p><strong>Nombre:</strong> ${producto.data.nombre}</p>
            <p><strong>Marca:</strong> ${producto.data.marca}</p>
            <p><strong>Descripción:</strong> ${producto.data.descripcion}</p>
            <p><strong>Imagen:</strong> <img src="${producto.data.imagen.url}" alt="Imagen del producto" width="100"></p>
            <p><strong>Compra:</strong> ${producto.data.compra}</p>
            <p><strong>Precio Unitario:</strong> ${producto.data.precio_unitario}</p>
            <p><strong>Precio al Mayoreo:</strong> ${producto.data.precio_mayoreo}</p>
            <p><strong>Precio por Caja:</strong> ${producto.data.precio_caja}</p>
            <p><strong>Inicio de Mayoreo:</strong> ${producto.data.inicio_mayoreo}</p>
            <p><strong>Inicio de Caja:</strong> ${producto.data.inicio_caja}</p>
            <p><strong>ID de Color:</strong> ${producto.data.id_color}</p>
            <p><strong>ID de Categoría:</strong> ${producto.data.id_categoria}</p>
            <p><strong>ID de Tipo:</strong> ${producto.data.id_tipo}</p>
            <!-- Agrega aquí el resto de las propiedades del producto que desees mostrar -->
          </div>
          <div class="card-footer">
        <p><strong>Color:</strong></p>
        <div style="display: inline-block; width: 20px; height: 20px; background-color: ${producto.data.color.hexa}; border-radius: 50%;"></div>
        <p style="display: inline-block; margin-left: 10px;">${producto.data.color.color}</p>
      </div>
    </div>
      `;

      document.getElementById("tableContainer").innerHTML = html;
      document.getElementById("tableContainer").style.display = "block";
    }

    row.appendChild(opcionesCell);

    tbody.appendChild(row);
  });
}

function hideModal() {
  $("#responseModal").hide();
}

async function saveOrUpdate(){
  if(pathname.includes("editar")){
    updateProduct()
  }else{
    try {
      const res = await uploadImages()
      saveProduct(res.data)
      
    } catch (error) {
      modal("Algo va mal", `${error}`)
    }
  }
}

function saveProduct(dataImages) {
  const form = document.getElementById("formularioProducto");

  const formData = new FormData(form);
  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
  
  const urlsImages = [] 
  dataImages.forEach( (value) => {
    urlsImages.push(value.url)
  })
  jsonData.imagen = {
    url: urlsImages
  }
  
  fetch(`${apiURL}/api/producto/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        modal("Enhorabuena", res.message);
        form.reset();
      } else {
        modal("Algo va mal", res.message);
      }
    })
    .catch((err) => {
      modal("Algo a ocurrido", `${err}`);
    });
}

function updateProduct() {
  const form = document.getElementById("formularioProducto");

  const formData = new FormData(form);
  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  fetch(`${apiURL}/api/producto/update/${idProduct}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        modal("Enhorabuena", res.message);

        setTimeout(() => {
          location.replace(`${apiURL}/adminPanel/productos`)
        },1000)
      } else {
        modal("Algo va mal", res.message);
      }
    })
    .catch((err) => {
      modal("Algo a ocurrido", `${err}`);
    });
}

function prepareImages(event){
  const archives = event.files
  const productName = document.getElementById("nombre").value || "product"

  for(let i = 0; i < archives.length; i++){
    const reader = new FileReader();
    reader.readAsDataURL(archives[i])

    reader.onloadend = () => {
      arrayImages.push({
        nombre: productName,
        base64: reader.result
      })
    }
  }
  
}

async function uploadImages(){
  const data = {
    nombreCarpeta: "images",
    imgs: arrayImages
  }

  try {
    
    const response = await fetch(`${apiURL}/api/file/upload-img`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const res = await response.json()
    if(!res.success) throw new Error(`Error ${res.message}`)

    return res
  } catch (error) {
    throw error
  }
  
}

function modal(title, message) {
  $("#responseModal").show();

  const modalElement = document.getElementById("responseModal");
  const titleModal = modalElement.querySelector(".modal-title");
  titleModal.innerText = title;

  const bodyMessage = modalElement.querySelector(".modal-body__message");
  bodyMessage.innerText = message;
}

function deleteItem(itemID, redirect = null) {
  fetch(`${apiURL}/api/producto/delete/${itemID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        
        if(redirect !== null){
          location.replace(`${apiURL}/${redirect}`)
        }else{
          modal("Eliminado", res.message);
          reload()
        }
      } else {
        modal("Algo va mal", res.message);
      }
    })
    .catch((err) => {
      modal("Algo a ocurrido", `${err}`);
    });
}

function reload(){
  setTimeout(() => {
    location.reload()
  }, 1000)
}