// Lógica de la cuenta regresiva
function actualizarCuentaRegresiva() {
    const fechaObjetivo = new Date('December 18, 2023 00:00:00').getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;
  
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  
    document.getElementById('cuenta-regresiva').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  
    if (diferencia < 0) {
      document.getElementById('cuenta-regresiva-texto').innerHTML = '¡La oferta ha expirado!';
      document.getElementById('cuenta-regresiva').style.display = 'none';
    }
  }
  
  // Actualizar la cuenta regresiva cada segundo
  setInterval(actualizarCuentaRegresiva, 1000);
  
  // Ejecutar la función al cargar la página
  window.onload = actualizarCuentaRegresiva;
  