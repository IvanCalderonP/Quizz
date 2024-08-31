const lista = [
  {
    id: 1,
    pregunta: "¿Qué significa HTML?",
    respuesta: [
      {
        correcta: false,
        respuesta: "HyperText Main Language"
      },
      {
        correcta: true,
        respuesta: "HyperText Markup Language"
      },
      {
        correcta: false,
        respuesta: "HyperTool Markup Language"
      },
      {
        correcta: false,
        respuesta: "HyperText Makeup Language"
      }
    ]
  },
  {
    id: 2,
    pregunta: "¿Cuál es el propósito del elemento <a> en HTML?",
    respuesta: [
      {
        correcta: false,
        respuesta: "Definir un encabezado"
      },
      {
        correcta: false,
        respuesta: "Insertar una imagen"
      },
      {
        correcta: true,
        respuesta: "Crear un enlace a otra página"
      },
      {
        correcta: false,
        respuesta: "Definir un párrafo"
      }
    ]
  },
  {
    id: 3,
    pregunta: "¿Cuál de las siguientes etiquetas se usa para definir un encabezado grande?",
    respuesta: [
      {
        correcta: false,
        respuesta: "&lt;h6&gt;"
      },
      {
        correcta: true,
        respuesta: "&lt;h1&gt;"
      },
      {
        correcta: false,
        respuesta: "&lt;header&gt;"
      },
      {
        correcta: false,
        respuesta: "&lt;heading&gt;"
      }
    ]
  },
  {
    id: 4,
    pregunta: "¿Cuál es el atributo correcto para agregar una imagen a una página web?",
    respuesta: [
      {
        correcta: false,
        respuesta: "link"
      },
      {
        correcta: false,
        respuesta: "href"
      },
      {
        correcta: true,
        respuesta: "src"
      },
      {
        correcta: false,
        respuesta: "img"
      }
    ]
  },
  {
    id: 5,
    pregunta: "¿Cuál de las siguientes etiquetas es usada para definir una lista ordenada?",
    respuesta: [
      {
        correcta: false,
        respuesta: "&lt;ul&gt;"
      },
      {
        correcta: false,
        respuesta: "&lt;li&gt;"
      },
      {
        correcta: true,
        respuesta: "&lt;ol&gt;"
      },
      {
        correcta: false,
        respuesta: "&lt;dl&gt;"
      }
    ]
  },
  {
    id: 6,
    pregunta: "¿Cómo se declara una variable en JavaScript?",
    respuesta: [
      {
        correcta: false,
        respuesta: "variable myVar;"
      },
      {
        correcta: false,
        respuesta: "v myVar;"
      },
      {
        correcta: true,
        respuesta: "var myVar;"
      },
      {
        correcta: false,
        respuesta: "myVar;"
      }
    ]
  },
  {
    id: 7,
    pregunta: "¿Qué método se utiliza para escribir en la consola del navegador?",
    respuesta: [
      {
        correcta: false,
        respuesta: "console.write()"
      },
      {
        correcta: false,
        respuesta: "console.print()"
      },
      {
        correcta: true,
        respuesta: "console.log()"
      },
      {
        correcta: false,
        respuesta: "console.display()"
      }
    ]
  },
  {
    id: 8,
    pregunta: "¿Cuál es el resultado de typeof NaN en JavaScript?",
    respuesta: [
      {
        correcta: false,
        respuesta: "\"undefined\""
      },
      {
        correcta: true,
        respuesta: "\"number\""
      },
      {
        correcta: false,
        respuesta: "\"object\""
      },
      {
        correcta: false,
        respuesta: "\"NaN\""
      }
    ]
  },
  {
    id: 9,
    pregunta: "¿Cuál de los siguientes es un bucle en JavaScript?",
    respuesta: [
      {
        correcta: true,
        respuesta: "while"
      },
      {
        correcta: false,
        respuesta: "iterate"
      },
      {
        correcta: false,
        respuesta: "foreach"
      },
      {
        correcta: false,
        respuesta: "during"
      }
    ]
  },
  {
    id: 10,
    pregunta: "¿Cuál de las siguientes funciones convierte una cadena de texto a un número entero?",
    respuesta: [
      {
        correcta: false,
        respuesta: "int()"
      },
      {
        correcta: false,
        respuesta: "Number()"
      },
      {
        correcta: false,
        respuesta: "parseFloat()"
      },
      {
        correcta: true,
        respuesta: "parseInt()"
      }
    ]
  }
];

// Código para generar el HTML como antes
const main = document.querySelector("main");

lista.forEach(item => {
  const opcionesHTML = item.respuesta.map(value => {
    return `
      <button class="option" name="Respuesta" value="${value.correcta}">
        <span class="option-letter">${value.respuesta}</span>
      </button>
    `;
  }).join('');

  main.insertAdjacentHTML("beforeend",  `
    <div class="quiz-content">
      <div class="question-section">
        <p class="question-number">Pregunta ${item.id}</p>
        <h1>${item.pregunta}</h1>
      </div>
      <div class="options-section">
        <div class="options">
          ${opcionesHTML}
        </div>
      </div>
    </div>
  `);
});
