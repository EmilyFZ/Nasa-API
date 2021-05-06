
// funcao para gerar usuarios aleatorios
function geraUsuario() {
    // instanciando o metodo
    let req = new XMLHttpRequest()

    // abrindo/inicializando o pedido
    req.open('GET', 'https://randomuser.me/api', false)
    
    // adicionando o evento de load
    req.addEventListener('load', function() {
        // validando status OK e se os cabecalhos estao prontos
        if( this.status === 200 && this.readyState === 4 ) {
            let dados = JSON.parse(req.responseText) // garantindo que seja um JSON
            let img = document.getElementById('imgRandomUser') // capturando elemento HTML de imagem
            img.src = dados.results[0].picture.large // mudando o src da imagem
        }
    })
    
    req.send() // enviando o pedido
}
geraUsuario()

const button = document.getElementById('geraUser')
button.addEventListener('click', geraUsuario)

// funcao para buscar foto do dia (APOD)
function buscaFotoDoDiaAPOD(data) {
    const key = '7dk3fSXTK85rdsefayn3rC4tQ6SQM9ObIWAWpgZc'

    // metodo do jQuery para requisicoes ajax
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`, // url de busca apod
        dataType: 'json', // definindo o tipo de dado
        // se for sucesso, executa a funcao
        success: function(dados) {
            document.getElementById('imgApod').src = dados.url
        }
    })
}

buscaFotoDoDiaAPOD("") // executa a funcao logo apos o carregamento da pagina estatica

$("#pesquisa").click(function(event){
event.preventDefault()
var dataValue = $("#dataApod").val()
buscaFotoDoDiaAPOD (dataValue) 
})


