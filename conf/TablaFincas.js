async function cargarTablaFincas() {
    try {
      const response = await fetch('http://localhost:3306/api/fincas');
      const fincas = await response.json();
      
      // genera la tabla HTML con los datos de fincas
      const tabla = document.getElementById('tablaFincas');
      // Genera las filas de la tabla con los datos de fincas
      
    } catch (error) {
      console.error('Error al cargar las fincas:', error);
    }
  }
  
// Llama a la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', cargarTablaFincas);
