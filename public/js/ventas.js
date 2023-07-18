var venta = document.getElementById('ventas');

venta.addEventListener('click', function(event) {
  event.preventDefault();

  fetch('http://localhost:3000/api/venta')
    .then(response => response.json())
    .then(responseData => {
      if (responseData.success) {
        var ventas = responseData.data;
        generateTableVentas(ventas); // Pasar los datos completos a la función generateTable
      } else {
        console.error('Error en la respuesta del endpoint:', responseData.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

function generateTableVentas(ventas) {
  var tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';

  var table = document.createElement('table');
  table.classList.add('table');
  tableContainer.appendChild(table);

  var thead = document.createElement('thead');
  thead.classList.add('thead-dark');
  var headerRow = document.createElement('tr');

  var selectedFields = ['Fecha de Venta', 'Estado', 'Correo del Usuario', 'Productos', 'Opciones'];

  selectedFields.forEach(field => {
    var th = document.createElement('th');
    th.textContent = field;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  var tbody = document.createElement('tbody');
  table.appendChild(tbody);

  ventas.forEach(venta => {
    var row = document.createElement('tr');

    var fechaVentaCell = document.createElement('td');
    fechaVentaCell.textContent = venta.venta.fecha_venta;
    row.appendChild(fechaVentaCell);

    var estadoVentaCell = document.createElement('td');
    estadoVentaCell.textContent = venta.venta.status_venta;
    row.appendChild(estadoVentaCell);

    var correoUsuarioCell = document.createElement('td');
    correoUsuarioCell.textContent = venta.login.correo;
    row.appendChild(correoUsuarioCell);

    var productosCell = document.createElement('td');
    var productosList = document.createElement('ul');

    venta.producto.forEach(producto => {
      var productoItem = document.createElement('li');
      productoItem.textContent = producto.nombre;
      productosList.appendChild(productoItem);
    });

    productosCell.appendChild(productosList);
    row.appendChild(productosCell);

    var opcionesCell = document.createElement('td');
    var editLink = document.createElement('a');
    editLink.href = '#';
    editLink.classList.add('mr-2');
    editLink.innerHTML = '<i class="material-icons">edit</i>';
    opcionesCell.appendChild(editLink);

    var deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.classList.add('mr-2');
    deleteLink.innerHTML = '<i class="material-icons">delete</i>';
    opcionesCell.appendChild(deleteLink);

    var viewLink = document.createElement('a');
    viewLink.href = '#';
    viewLink.innerHTML = '<i class="material-icons">visibility</i>';
    opcionesCell.appendChild(viewLink);

    row.appendChild(opcionesCell);

    tbody.appendChild(row);
  });
}
