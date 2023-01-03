document.getElementById('btn-login').addEventListener('click', function() {
  // Obtener el elemento del formulario
  var formulario = document.getElementById('formulario');
  
  // Si el formulario está oculto, mostrarlo
  if (formulario.style.display === 'none') {
      formulario.style.display = 'block';
  }
  // Si el formulario está visible, ocultarlo
  else {
      formulario.style.display = 'none';
  }
});

  document.getElementById('formulario').addEventListener('submit', function(event) {
    // Previene el envío del formulario
    event.preventDefault();

    // Obtiene los valores de los campos de entrada
    var email = document.getElementById('mail').value;
    var password = document.getElementById('password').value;

    // Valida los campos de entrada
    if (email === '' || password === '') {
      alert('Por favor, rellena todos los campos');
      return;
    }

    // Envía los datos del formulario a una URL de tu elección
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/login');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log('Los datos del formulario se enviaron correctamente');
      } else {
        console.error('Error al enviar los datos del formulario');
      }
    };
    xhr.send('email=' + email + '&password=' + password);
  });

  
 
  
  
  
  
  