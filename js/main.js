
function encuesta() {
  let preguntar = prompt("Para darte recomendaciones personalizadas, queremos hacerte una breve encuesta sobre suplementos (Iniciar o Rechazar)");
  let suplemento1 = prompt("¿Qué marca prefieres al momento de comprar proteínas? (Star, Ena o Gold)");
  let suplemento2 = prompt("¿Qué marca prefieres al momento de comprar creatinas o ganadores de peso? (Star, Ena o Nutrilab)");

  let mensaje;
  if (preguntar.toLowerCase() === "iniciar") {
    mensaje = "Encuesta iniciada";
  } else if (preguntar.toLowerCase() === "rechazar") {
    mensaje = "Dale man no te cuesta nada responder 2 pregunras -_-";
  } else {
    mensaje = "Ingrese una respuesta válida";
  }
  alert("Gracias por participar en la encuesta");
  return mensaje;
}

let repetir;
do {
  repetir = false;
  encuesta();
  repetir = confirm("¿Deseas realizar la encuesta nuevamente?");
} while (repetir);

alert("Gracias por tu participación. ¡Hasta luego!");


  
  







