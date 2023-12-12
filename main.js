const form = document.getElementById('form-validaçao')

function validanumero(numerocompleto) {
    const numeroComoArray = numerocompleto.split(' '); 
    return numeroComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numerocompleto = document.getElementById('numero-completo')
    if (!validanumero(numero-completo.value)) {
        alert("o numero nao esta completo");
    } else {
        alert("tudo certo");
    }
})

console.log(form);