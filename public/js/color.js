var color = document.getElementById('idColor');

 color.addEventListener('click', function(event) {
  event.preventDefault();

  fetch('http://localhost:3000/api/color')
    .then(response => response.json())
    .then(responseData => {
      if (responseData.success) {
        var colores = responseData.data;
        generateTableColores(colores); // Pasar los datos completos a la función generateTableColores
      } else {
        console.error('Error en la respuesta del endpoint:', responseData.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

function generateTableColores(colores) {
  var tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';

  var table = document.createElement('table');
  table.classList.add('table');
  tableContainer.appendChild(table);

  var thead = document.createElement('thead');
  thead.classList.add('thead-dark');
  var headerRow = document.createElement('tr');

  var selectedFields = ['ID Color', 'Color', 'Hexa', 'Muestra'];

  selectedFields.forEach(field => {
    var th = document.createElement('th');
    th.textContent = field;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  var tbody = document.createElement('tbody');
  table.appendChild(tbody);

  colores.forEach(color => {
    var row = document.createElement('tr');

    var idColorCell = document.createElement('td');
    idColorCell.textContent = color.id_color;
    row.appendChild(idColorCell);

    var colorCell = document.createElement('td');
    colorCell.textContent = color.color;
    row.appendChild(colorCell);

    var hexaCell = document.createElement('td');
    hexaCell.textContent = color.hexa;
    row.appendChild(hexaCell);

    var muestraCell = document.createElement('td');
    var colorDiv = document.createElement('div');
    colorDiv.classList.add('color-sample');
    colorDiv.style.backgroundColor = color.hexa;
    muestraCell.appendChild(colorDiv);
    row.appendChild(muestraCell);

    tbody.appendChild(row);
  });
}
