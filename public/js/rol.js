var rol = document.getElementById('idRol');

rol.addEventListener('click', function(event) {
  event.preventDefault();

  fetch('http://localhost:3000/api/rol')
    .then(response => response.json())
    .then(responseData => {
      if (responseData.success) {
        var roles = responseData.data;
        generateTableRoles(roles); // Pasar los datos completos a la función generateTable
      } else {
        console.error('Error en la respuesta del endpoint:', responseData.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

function generateTableRoles(roles) {
  var tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';

  var table = document.createElement('table');
  table.classList.add('table');
  tableContainer.appendChild(table);

  var thead = document.createElement('thead');
  thead.classList.add('thead-dark');
  var headerRow = document.createElement('tr');

  var selectedFields = ['ID Rol', 'Rol', 'Opciones'];

  selectedFields.forEach(field => {
    var th = document.createElement('th');
    th.textContent = field;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  var tbody = document.createElement('tbody');
  table.appendChild(tbody);

  roles.forEach(rol => {
    var row = document.createElement('tr');

    var idRolCell = document.createElement('td');
    idRolCell.textContent = rol.id_roll;
    row.appendChild(idRolCell);

    var rolCell = document.createElement('td');
    rolCell.textContent = rol.roll;
    row.appendChild(rolCell);

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
