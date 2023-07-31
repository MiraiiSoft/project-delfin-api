function deleteItem(itemId) {
  $.ajax({
    url: `http://localhost:3000/api/user/delete/${itemId}`, // Elimina el espacio entre /delete/ y ${itemId}
    type: "DELETE",
    success: function (result) {
      alert("Se ha eliminado el elemento.");
    },
    error: function (error) {
      // Manejo de errores
      console.error("Error al eliminar el elemento:", error);
    },
  });
}

function mostrarUsuario(id) {
  fetch("/api/user/" + id) 
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      alert(responseData)
    })
    .catch((error) => {
      console.log("Error " + error);
    });
}

