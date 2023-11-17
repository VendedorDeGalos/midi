
function tocasom (idaudio) {
document.querySelector(idaudio).play();
}

const listadeteclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listadeteclas.length; contador++ ) {

   const tecla = listadeteclas[contador];
const instrumento = listadeteclas[contador].classList[1];


const idaudio2 = `#som_${instrumento}`;

   listadeteclas[contador].onclick = function (){
      tocasom(idaudio2);
   }

   tecla.onkeydown = function (evento) {
      if(evento.code === 'Space' || evento.code === 'Enter') {
   tecla.classList.add('ativa');
      }

       tecla.onkeyup = function () {
      tecla.classList.remove('ativa');
   }

   }


}