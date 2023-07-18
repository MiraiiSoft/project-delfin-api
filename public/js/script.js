window.onload = function () {
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector("#btn");
  const searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    menuBtnChange();
  });

  searchBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    menuBtnChange();
  });

  function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }
};

var usuario = document.getElementById("usuarios");

usuario.addEventListener("click", function (event) {
  event.preventDefault();

  fetch("http://localhost:3000/api/user")
    .then((response) => response.json())
    .then((responseData) => {
      if (responseData.success) {
        tableData = responseData.data;
        generateTableUsuario(tableData); // Pasar los datos completos a la función generateTable
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

function generateTableUsuario(data) {
  var tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = "";

  var table = document.createElement("table");
  table.classList.add("table");
  tableContainer.appendChild(table);

  var thead = document.createElement("thead");
  thead.classList.add("thead-dark");
  var headerRow = document.createElement("tr");

  var selectedFields = [
    "nombre",
    "apellido",
    "usuario",
    "correo",
    "roll",
    "is_verified",
    "opciones",
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

  data.forEach((item) => {
    var row = document.createElement("tr");

    var nombreCell = document.createElement("td");
    nombreCell.textContent = item.persona.nombre;
    row.appendChild(nombreCell);

    var apellidoCell = document.createElement("td");
    apellidoCell.textContent = item.persona.apellido;
    row.appendChild(apellidoCell);

    var usuarioCell = document.createElement("td");
    usuarioCell.textContent = item.usuario;
    row.appendChild(usuarioCell);

    var correoCell = document.createElement("td");
    correoCell.textContent = item.correo;
    row.appendChild(correoCell);

    var rollCell = document.createElement("td");
    rollCell.textContent = item.roll.roll;
    row.appendChild(rollCell);

    var isVerifiedCell = document.createElement("td");
    var isVerifiedIcon = document.createElement("i");
    isVerifiedIcon.classList.add("material-icons");
    isVerifiedIcon.textContent = item.is_verified ? "check" : "close";
    isVerifiedCell.appendChild(isVerifiedIcon);
    row.appendChild(isVerifiedCell);

    var opcionesCell = document.createElement("td");
    var editLink = document.createElement("a");
    editLink.href = "/api/user/update" + item.id; // Agregar el ID del usuario al enlace de editar
    editLink.classList.add("mr-2");
    editLink.innerHTML = '<i class="material-icons">edit</i>';
    opcionesCell.appendChild(editLink);

    var deleteLink = document.createElement("a");
    deleteLink.href = "#"; // Enlace con una URL válida o '#' si no se requiere una URL específica
    deleteLink.classList.add("mr-2");
    deleteLink.innerHTML = '<i class="material-icons">delete</i>';
    opcionesCell.appendChild(deleteLink);

    deleteLink.addEventListener("click", function (event) {
      event.preventDefault(); // Evita que el enlace se comporte de forma predeterminada

      // Realiza la solicitud DELETE
      fetch("/api/user/delete/" + item.id_login, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            alert('Se desactivo el Usuario')
          } else {
            // Si la solicitud no fue exitosa, puedes manejar el error aquí
            console.error("Error al eliminar el usuario");
          }
        })
        .catch((error) => {
          // Si ocurrió un error en la solicitud, puedes manejarlo aquí
          console.error("Error de red:", error);
        });
    });

    var viewLink = document.createElement("a");
    viewLink.href = "/api/user/" + item.id_login; // Agregar el ID del usuario al enlace de ver
    viewLink.innerHTML = '<i class="material-icons">visibility</i>';
    opcionesCell.appendChild(viewLink);

    row.appendChild(opcionesCell);

    tbody.appendChild(row);
  });
}
