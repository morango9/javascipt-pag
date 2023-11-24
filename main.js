function tocaSomPom (selectorAudio) {
    const elementos = document.querySelector (selectorAudio);

    if(elemento !=null && elemento.localName === 'audio'){
        elemento.play ();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = documen.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento =tecla.classList[1];
    const idAudio = `#Som_${instrumento}`; //template string

tecla.onclik = function() {
    tocaSomPom(idAudio);
}

 tecla.onkeydown = function (evento) {

    if (evento.code === 'Space'|| evento.code === 'Enter'){
        tecla.classList.add('ativa');
    }

 }

 tecla.onkeyup = function (){
    tecla.classList.remove('ativa');
 }

}



