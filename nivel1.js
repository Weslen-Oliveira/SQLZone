const TituloNv1 = document.getElementById('tituloNv1');
const Comando = document.getElementById('comando');
const tabelaOK = document.getElementById('tabelaOK');
const tabelaNOK = document.getElementById('tabelaNOK');
const Enviar = document.getElementById('enviar');

function Escrever(frase){
    const textoArray = frase.innerHTML.split('');
    frase.innerHTML = '';
    textoArray.forEach(function(letra, i){
        setTimeout(function(){
            frase.innerHTML += letra;
        }, 75 * i )
console.log(i);
    });
    
}

Escrever(TituloNv1);
Escrever(Comando);



Enviar.addEventListener('click', function Responder(){
    let verificarResposta = document.getElementById('consulta').value;
     
    if(verificarResposta === 'CREATE TABLE Familia (id, nome, categoria, sexo, idade)'){
        tabelaOK.style.display = 'block';
        tabelaNOK.style.display = 'none';
    }
    else{
        tabelaNOK.style.display = 'block';
        tabelaOK.style.display = 'none';
    }

})