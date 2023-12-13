const form = document.getElementById('form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const Acerto = document.getElementById('Campo correto');
const erro = document.getElementById('erro')

function CompararCampo(campoA, campoB) {
    return campoA > campoB;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let validarform = CompararCampo(CampoA.valueAsNumber, CampoB.valueAsNumber)
if (validarform){
    Acerto.style.display = 'block'
    campoA.value= ' ';
    campoB.value= ' ';
}
})

campoA.addEventListener('keyup', function(e){
    let validarform = CompararCampo(campoA.valueAsNumber, campoB.valueAsNumber)
    if(!validarform){
        erro.style.display = 'block';
        Acerto.style.display = 'none';
    } else{
        erro.style.display = 'none';
    }

})