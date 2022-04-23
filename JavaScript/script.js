/*CONFIG DE CARREGAMENTO DAS FUNÇÕES*/
$(function(){
    exibirMenu();
    exibirCompras();
});

/*CONFIG EXIBIR COMPRAS*/ 
function exibirCompras() {
    $.getJSON("DadosJSON/dados.json", function(data){          
        x = data.produtos.length;
        for (var i = 0; i < x; i++)
        {
            var div = '<div class="produtos"><h3>' + data.produtos[i].restaurante + '</h3><div class="cont"><p>'+ data.produtos[i].nome +'</p><p>R$: '+ data.produtos[i].valor +'</p><button class="adicionar" type="button1" onclick="adCarrinho(\''+data.produtos[i].nome+'\','+data.produtos[i].valor+')">ADICIONAR</button></div></div>';
           $('#compras').append(div)
        }
    });   
}

/*CONFIG EXIBIR MENU*/ 
function exibirMenu() {
    $.ajax({
        url: "MENU/menu.xml",
        success: function (xml) {
            $(xml).find('opcao').each(function () {
                var link = '<a href="'+$(this).attr("link")+'">'+$(this).text()+'</a>';
                $("#menu").append(link);
            });
        },
        error: function () {
            alert("Mensagem de erro ao chamar o XML.");
        }
    });
}

/*CONFIG BOTÕES/EVENTOS DOS MESMOS*/

function adCarrinho(produtos,valor){

    alert("Pedido: " + produtos + " Selecionado para o carrinho!\n"+"Valor de R$: " +valor);
    sessionStorage.setItem(produtos,valor);
}

function Evento2(){
    sessionStorage.clear();
    alert("Carrinho Zerado!");
}


function produtoFinal(){

    var recupera = sessionStorage.length;

    for(i = 0;i<recupera;i++){

        var recup = '<div><h3>'+sessionStorage.getItem(sessionStorage.key(i))+'</h3></div>';
        $('#mostrar').append(recup);
        var recupr = '<div><h3>' + sessionStorage.key(i)+'</h3></div>'
        $('#lanch').append(recupr);
    }

}