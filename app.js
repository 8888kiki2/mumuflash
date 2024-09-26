function criaCartão(categoria, pergunta, resposta){
    let container = document.getElementById('container0');
    let cartao = document.createElement('article');
    cartao.className='cartao';
    cartao.innerHTML=`
    <div class="cartao-conteudo">
    <b3>${categoria}</h3>
    <div class="carao-pergunta">
    <p>${pergunta}</p>
    </div>
    <div class="cartao-resposta">
    <p>${resposta}</p>
    </div>
    </div>
    `
    container.appendChild(cartao);
}
