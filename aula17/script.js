let lista = [];
function adicionar(){
    let result = document.getElementById('view');
    result.innerHTML = '';
    let valor = document.getElementById('num');
    let select = document.getElementById('list');
    let num = Number(valor.value);
    
    if(valor.length == 0 || num <= 0 || num > 100){
        alert('Informe um valor válido');
    }else{
        if(lista.indexOf(num) == -1){
            lista.push(num);
            let item = document.createElement('option');
            item.text = `Valor ${num} adicionado`;
            select.appendChild(item);
        }else{
            alert('Valor já está na lista');
        }
        //zerar o input
        valor.value = '';
        //colocar o foco/cursor no input
        valor.focus();
    }
}

function finalizar(){
    if(lista.length == 0 ){
        alert('Adicione valores antes de finalizar ');
    }else{
        let result = document.getElementById('view');
        lista.sort();
        result.innerHTML = `Ao todo temos ${lista.length} números cadastrados. <br>`;
        result.innerHTML += `O maior valor informado foi ${lista[lista.length -1]} <br>`;
        result.innerHTML += `O menor valor informado foi ${lista[0]} <br>`;

        let soma = 0;
        for(let num in lista){
            soma += lista[num];
        }

        result.innerHTML += `Somando todos os valores temos ${soma}. <br>`;
        result.innerHTML += `a média dos valores digitados é ${soma / lista.length}. <br>`;
    }

}