var producto = document.getElementById("getProductos");

producto.addEventListener("click", function (event) {
  event.preventDefault();

  fetch("http://localhost:3000/api/producto")
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
          console.log(mostrarProducto);
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
