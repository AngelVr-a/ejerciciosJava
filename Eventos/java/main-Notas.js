const notas = [
    {
        id: 1,
        titulo: 'Tender la cama',
        texto: 'Por las mañanas realizar esto a las 7am',
        realizado: true
    },
    {
        id: 2,
        titulo: 'Ir al gimnasio',
        texto: 'Por las tardes esto a las 7pm',
        realizado: false
    },
    {
        id: 3,
        titulo: 'Salir a ver una pelicula',
        texto: 'Ir en la semana a ver una pelicula solo ',
        realizado: true
    }
]


let idGlobal = notas.length - 1

let contenedor = document.getElementById("card-contenedor");

function pintarCard() {
    
    for (let index = 0; index < notas.length; index++) {

        let card = document.createElement("article");
        card.classList.add("card", "bg-dark", "text-light", "col-10", "col-md-5", "col-xl-3");
     
        card.innerHTML = `
          <div class="card-body">
            <h5 class="card-title text-center">${notas[index].titulo}</h5>
            <p class="card-text">${notas[index].texto}</p>
            <div class="card-footer d-flex justify-content-between align-items-center">
            <input type="checkbox" ${notas[index].realizado ? 'checked' : ''}> Realizado
            </div>
          </div>
        `;
      contenedor.appendChild(card);
        
    }
}

document.addEventListener('DOMContentLoaded', function() {
    pintarCard();
});
