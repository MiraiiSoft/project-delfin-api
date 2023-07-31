var venta = document.getElementById("ventas");

venta.addEventListener("click", function (event) {
  event.preventDefault();

  fetch("http://localhost:3000/api/venta")
    .then((response) => response.json())
    .then((responseData) => {
      if (responseData.success) {
        var ventas = responseData.data;
        generateTableVentas(ventas); // Pasar los datos completos a la función generateTable
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

function generateTableVentas(ventas) {
  var tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = "";

  var table = document.createElement("table");
  table.classList.add("table");
  tableContainer.appendChild(table);

  var thead = document.createElement("thead");
  thead.classList.add("thead-dark");
  var headerRow = document.createElement("tr");

  var selectedFields = [
    "Fecha de Venta",
    "Estado",
    "Correo del Usuario",
    "Productos",
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

  ventas.forEach((venta) => {
    var row = document.createElement("tr");

    var fechaVentaCell = document.createElement("td");
    fechaVentaCell.textContent = venta.venta.fecha_venta;
    row.appendChild(fechaVentaCell);

    var estadoVentaCell = document.createElement("td");
    estadoVentaCell.textContent = venta.venta.status_venta;
    row.appendChild(estadoVentaCell);

    var correoUsuarioCell = document.createElement("td");
    correoUsuarioCell.textContent = venta.login.correo;
    row.appendChild(correoUsuarioCell);

    var productosCell = document.createElement("td");
    var productosList = document.createElement("ul");

    venta.producto.forEach((producto) => {
      var productoItem = document.createElement("li");
      productoItem.textContent = producto.nombre;
      productosList.appendChild(productoItem);
    });

    productosCell.appendChild(productosList);
    row.appendChild(productosCell);

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

    var viewLink = document.createElement("a");
    viewLink.href = "#";
    viewLink.innerHTML = '<i class="material-icons">visibility</i>';
    opcionesCell.appendChild(viewLink);

    viewLink.addEventListener("click", function (event) {
      event.preventDefault();
      fetch("/api/venta/" + venta.id)
        .then((response) => response.json())
        .then((responseData) => {
          mostrarVenta(responseData);
        })
        .catch((error) => {
          console.log("error " + error);
        });
    });

    function mostrarVenta(venta) {
      var ventaInfo = venta.data[0].venta;
      var clienteInfo = venta.data[0].login.persona;
      var productos = venta.data[0].producto;

      var html = `
        <div class="card" style="border: 1px solid #000; border-radius: 10px;">
          <div class="card-header">
            <h2>Información de la Venta</h2>
          </div>
          <div class="card-body">
            <p>ID de Venta: ${ventaInfo.id_venta}</p>
            <p>Fecha de Venta: ${ventaInfo.fecha_venta}</p>
            <p>Status de Venta: ${ventaInfo.status_venta}</p>
            <p>ID de Envío: ${ventaInfo.id_envio}</p>
            <p>ID de Pago: ${ventaInfo.id_pago}</p>
            <p>ID de Cliente: ${clienteInfo.id_persona}</p>
            <p>Nombre del Cliente: ${clienteInfo.nombre} ${clienteInfo.apellido}</p>
            <p>Teléfono del Cliente: ${clienteInfo.telefono}</p>
          </div>
          <div class="card-body">
            <p><strong>Productos:</strong></p>
            <div class="card-group-container" style="display: flex; flex-wrap: wrap; overflow-x: auto;">
      `;

      productos.forEach((producto) => {
        html += `
          <div class="card m-3" style="width: 18rem;">
            <img src="https://pm1.aminoapps.com/6372/f43837db4b9be8c7f2a7953a6f94014f8c7a9fe0_hq.jpg" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">Marca: ${producto.marca}</p>
              <p class="card-text">Descripción: ${producto.descripcion}</p>
              <p class="card-text">Cantidad Vendida: ${producto.cantidad_producto}</p>
            </div>
          </div>
        `;
      });

      html += `
            </div>
          </div>
          <div class="card-footer">
            <p><strong>Monto Total:</strong> $${venta.data[0].monto_total}</p>
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



function formatDate(isoDate) {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
