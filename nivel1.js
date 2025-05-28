const TituloNv1 = document.getElementById('tituloNv1');
let tituloQuestao = document.getElementById('tituloQuestao');
let paragrafoQuestao = document.getElementById('paragrafoQuestao');
const Comando = document.getElementById('comando');
const tabelaOK = document.getElementById('tabelaOK');
const tabelaNOK = document.getElementById('tabelaNOK');
const Enviar = document.getElementById('enviar');
const proximo = document.getElementById('proximo');

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
        proximo.style.display = 'inline-block';
        tabelaNOK.style.display = 'none';
    }
    else{
        tabelaNOK.style.display = 'block';
        proximo.style.display = 'none';
        tabelaOK.style.display = 'none';
    }

    document.getElementById('consulta').value = '';
})
proximo.addEventListener('click', function proximaPergunta(){
    tabelaOK.style.display = 'none';
    tabelaNOK.style.display = 'none';
    tituloQuestao.innerText = 'Vamos manipular a tabela Familia';
    paragrafoQuestao.innerText = 'Insira dados na tabela Familia';
    

    let id = document.getElementById('tabelaId').value;
    let nome = document.getElementById('tabelaNome').value;
    let categoria = document.getElementById('tabelaCategoria').value;
    let sexo = document.getElementById('tabelaSexo').value;
    let idade = document.getElementById('tabelaIdade').value;

    if(verificarResposta === 'INSERT INTO Familia (id, nome, categoria, sexo, idade) VALUES'){
        tabela02.style.display = 'block';
         proximo.style.display = 'inline-block';
        tabelaNOK.style.display = 'none'
    }
})