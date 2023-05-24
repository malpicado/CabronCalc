document.getElementById("calculateBtn").addEventListener("click", function () {
  //nos traemos los valores de cada input
  let TE = parseFloat(document.getElementById("TE").value);
  let IC = parseFloat(document.getElementById("IC").value);
  let SM = parseFloat(document.getElementById("SM").value);
  let PH = parseFloat(document.getElementById("PH").value);
  let MG = parseFloat(document.getElementById("MG").value);

  //Verificamos que los campos no estén vacíos
  if (isNaN(TE) || isNaN(IC) || isNaN(SM) || isNaN(PH) || isNaN(MG)) {
    alert("Todos los campos deben estar completados para poder calcular");
    return; //detenemos la ejecución de la función hasta que todos los campos estén completos
  }

  //Calculamos el tiempo de entrega recomendado para el proyecto
  let tiempoEntrega = TE * IC + SM * 8;
  tiempoEntrega = Math.ceil(tiempoEntrega);

  //Ahora si calculamos el coste total del proyecto
  let costeTotal = tiempoEntrega * (PH * (1 + MG));

  //Mostramos el coste total del proyecto
  document.getElementById(
    "costResult"
  ).innerHTML = `Cuánto te recomendamos cobrar al bastardo: ${costeTotal.toFixed(
    2
  )} en tu moneda.`;

  //Calculamos y mostramos el tiempo de entrega recomendado para este proyecto
  let tiempoEntregaFinal = tiempoEntrega / 4;
  tiempoEntregaFinal = Math.ceil(tiempoEntregaFinal);
  document.getElementById(
    "timeResult"
  ).innerHTML = `Tiempo de entrega recomendado para este proyecto: ${tiempoEntregaFinal} días.`;

  //Mostramos el margen de ganancia que supondría si el cliente acepta el presupuesto solicitado.

  let margenGanancia = costeTotal - TE * PH;
  document.getElementById(
    "profitMarginResult"
  ).innerHTML = `Margen de GANANCIA: ${margenGanancia.toFixed(
    2
  )} en tu moneda.`;
});
