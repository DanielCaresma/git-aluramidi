function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclass = document.querySelectorAll('.tecla');

for (let cont = 0; cont < listaDeTeclass.length; cont++) {

    const tecla = listaDeTeclass[cont]
    const som = tecla.classList[1];
    const idAudio = `#som_${som}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    console.log(cont);
}
