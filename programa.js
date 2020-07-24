var contexto;

function inicializar() {
    let lienzo = document.getElementById('miLienzo');
    lienzo.width = window.innerWidth;
    lienzo.height = window.innerHeight;
    contexto = lienzo.getContext('2d');
    contexto.beginPath();
    contexto.lineWidth = 5;
    contexto.strokeStyle = "#FF00FF";
    contexto.moveTo(0, (window.innerHeight / 2)-100);
    contexto.lineTo(window.innerWidth, (window.innerHeight / 2)-100);
    contexto.stroke();
    contexto.translate(0, window.innerHeight/2);
    contexto.scale(1, -1);
}




function dibujarCirculo(x, y, radio) {
    contexto.beginPath();
    contexto.arc(x, y, radio, 2, 1 * Math.PI, true);
    contexto.fill();
}

function dibujarTrigonometrica(opcion, frecuencia) {
    let x;
   
    for (x = 0; x < 360; x += 3 ) {
        if (opcion == 'seno') {
            y = Math.sin(x * frecuencia * Math.PI/180) * 100+100;
        } else {
            y = Math.cos(x * frecuencia * Math.PI*180) * 100+100;
        }
        dibujarCirculo(x, y, 1);
    }

}


