var idEnvioLink = document.getElementById('idEnvio');

idEnvioLink.addEventListener('click', function(event) {
  event.preventDefault();

  fetch('http://localhost:3000/api/envios')
    .then(response => response.json())
    .then(responseData => {
      if (responseData.success) {
        var envios = responseData.data;
        console.log(envios);
        generateTableEnvios(envios); // Pasar los datos completos a la función generateTableEnvios
      } else {
        console.error('Error en la respuesta del endpoint:', responseData.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

function generateTableEnvios(envios) {
  var tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';

  var table = document.createElement('table');
  table.classList.add('table');
  tableContainer.appendChild(table);

  var thead = document.createElement('thead');
  thead.classList.add('thead-dark');
  var headerRow = document.createElement('tr');

  var selectedFields = ['ID Envío', 'Fecha de Envío', 'Fecha de Entrega', 'Fecha de Recolección', 'Paquetería', 'Estado de Envío', 'Opciones'];

  selectedFields.forEach(field => {
    var th = document.createElement('th');
    th.textContent = field;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  var tbody = document.createElement('tbody');
  table.appendChild(tbody);

  envios.forEach(envio => {
    var row = document.createElement('tr');

    var idEnvioCell = document.createElement('td');
    idEnvioCell.textContent = envio.id_envio;
    row.appendChild(idEnvioCell);

    var fechaEnvioCell = document.createElement('td');
    fechaEnvioCell.textContent = envio.fecha_envio;
    row.appendChild(fechaEnvioCell);

    var fechaEntregaCell = document.createElement('td');
    fechaEntregaCell.textContent = envio.fecha_entrega;
    row.appendChild(fechaEntregaCell);

    var fechaRecoleccionCell = document.createElement('td');
    fechaRecoleccionCell.textContent = envio.fecha_recoleccion;
    row.appendChild(fechaRecoleccionCell);

    var paqueteriaCell = document.createElement('td');
    paqueteriaCell.textContent = envio.paqueteria;
    row.appendChild(paqueteriaCell);

    var estadoEnvioCell = document.createElement('td');
    estadoEnvioCell.textContent = envio.status_envio;
    row.appendChild(estadoEnvioCell);

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
