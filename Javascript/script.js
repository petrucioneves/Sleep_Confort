document.getElementById('quant').style.display = "none";

let quantPreto=0, quantEstampado=0, quantAzul=0;
const preto = document.getElementById('almofada-preta');
const estampado = document.getElementById('almofada-estampado');
const azul =  document.getElementById('almofada-azul');



function mais(id){
    switch(id){
        case "quant-preto":
            quantPreto++;
            document.getElementById('quant-preto').innerHTML=quantPreto;
            quantCarrinho()
        break;
        case "quant-estampado":
            quantEstampado++;
            document.getElementById('quant-estampado').innerHTML=quantEstampado;
            quantCarrinho()
        break;
        case "quant-azul":
            quantAzul++;
            document.getElementById('quant-azul').innerHTML=quantAzul;
            quantCarrinho()
        break;
    }
}
function menos(id){
    switch(id){
        case "quant-preto":
            if(quantPreto>0){
                quantPreto--;
                document.getElementById('quant-preto').innerHTML=quantPreto;
            }else{
                document.getElementById('quant-preto').innerHTML=quantPreto;
            }
            quantCarrinho()
        break;
        case "quant-estampado":
            if(quantEstampado>0){
                quantEstampado--;
                document.getElementById('quant-estampado').innerHTML=quantEstampado;
            }else{
                document.getElementById('quant-estampado').innerHTML=quantEstampado;
            }
            quantCarrinho()
        break;
        case "quant-azul":
            if(quantAzul>0){
                quantAzul--;
                document.getElementById('quant-azul').innerHTML=quantAzul;
            }else{
                document.getElementById('quant-azul').innerHTML=quantAzul;
            }
            quantCarrinho()
        break;
    }
}
function quantCarrinho(){
    let quantC = quantAzul+quantEstampado+quantPreto;
    document.getElementById('quant').innerHTML = quantC;
    document.getElementById('quant').style.display = "inline";
    if(quantC==0){
        document.getElementById('quant').style.display = "none";
    }

}
function listCarrinho(){
    document.getElementById('quant-p').innerHTML = quantPreto;
    document.getElementById('quant-e').innerHTML = quantEstampado;
    document.getElementById('quant-a').innerHTML = quantAzul;
    document.getElementById('total').innerHTML = `R$ ${(quantAzul+quantPreto+quantEstampado)*35},00`
}
function pedidoWhatsapp(){
    let texto = `Pedido\nAlmofada Preta: quantidade = ${quantPreto}\nAlmofada Estampada: quantidade = ${quantEstampado}\nAlmofada Azul: quantidade = ${quantAzul}\nValor Total:${(quantAzul+quantPreto+quantEstampado)*35}`
    texto = window.encodeURIComponent(texto)
    window.open(`https://wa.me/5588997220775?text= ${texto}`)
}

function verificacaoCompras(){
    if(quantAzul==0 && quantPreto==0 && quantEstampado==0){
        alert('Adicione algo no carrinho para concluir a compra')
    }else{
        pedidoWhatsapp()
    }
}