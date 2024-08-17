let etapa = 0;
let area, tecnologia, especializacion;
let tecnologiasAdicionales = [];

const preguntas = [
    "¿Quieres seguir hacia el área de Front-End o Back-End?", // Pregunta 0
    "¿Quieres aprender React o Vue?", // Pregunta 1
    "¿Quieres aprender C# o Java?", // Pregunta 2
    "¿Quieres seguir especializándote en el área elegida o desarrollarte para convertirte en Fullstack?", // Pregunta 3
    "¿Qué tecnología te gustaría aprender?", // Pregunta 4
    "¿Hay alguna otra tecnología que te gustaría aprender? (responde 'ok' para continuar)" // Pregunta 5
];

function preguntarEdad() {
    for (let intentos = 0; intentos < 1; intentos++) {
        const edad = parseInt(prompt("Por favor, ingresa tu edad:"));
        
        if (edad > 8) {
            alert("¡Perfecto! Continuemos con las preguntas.");
            mostrarPregunta(0);
            return true;
        } else {
            alert("Lo siento, eres menor de edad y no puedes continuar.");
            document.getElementById('pregunta').textContent = "Eres menor de edad y no puedes continuar.";
            document.getElementById('respuesta').style.display = 'none';
            document.querySelector('button').style.display = 'none';
            return false;
        }
    }
}

function mostrarPregunta(index) {
    document.getElementById('pregunta').textContent = preguntas[index];
}

function siguiente() {
    let continuar = true;
    
    while (continuar) {
        const respuesta = document.getElementById('respuesta').value.toLowerCase();
        document.getElementById('respuesta').value = '';

        switch(etapa) {
            case 0:
                area = respuesta;
                etapa = area === 'front-end' ? 1 : (area === 'back-end' ? 2 : 0);
                break;
            case 1:
            case 2:
                tecnologia = respuesta;
                etapa = 3;
                break;
            case 3:
                especializacion = respuesta;
                etapa = 4;
                break;
            case 4:
                tecnologiasAdicionales.push(respuesta);
                etapa = 5;
                break;
            case 5:
                if (respuesta === 'ok') {
                    etapa = 4;
                } else {
                    mostrarResultado();
                    continuar = false;
                }
                break;
        }

        if (etapa <= 5 && continuar) {
            mostrarPregunta(etapa);
            continuar = false;
        }
    }
}

function mostrarResultado() {
    let resultado = "¡Gracias por jugar! Aquí está un resumen de tus elecciones:\n\n";
    resultado += `Área principal: ${area}\n`;
    resultado += `Tecnología específica: ${tecnologia}\n`;
    resultado += `Camino de desarrollo: ${especializacion}\n`;
    resultado += `Tecnologías adicionales de interés: ${tecnologiasAdicionales.join(', ')}`;

    document.getElementById('resultado').textContent = resultado;
    document.getElementById('pregunta').textContent = '';
    document.getElementById('respuesta').style.display = 'none';
    document.querySelector('button').style.display = 'none';
}

// Preguntar la edad antes de iniciar el juego
preguntarEdad();
