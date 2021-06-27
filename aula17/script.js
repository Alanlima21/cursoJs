lista = [];
function adicionar(){
    let result = document.getElementById('view');
    result.innerHTML = '';
    let valor = document.getElementById('num').value;
    let select = document.getElementById('list');
    let num = Number(valor);
    

    if(valor.length == 0 || num < 1 || num > 100){
        alert('Informe um valor válido');
    }else{
        this.lista.push(num);
        let item = document.createElement('option');
        item.text = `Valor ${num} adicionado`;
        select.appendChild(item);
    }
}

function finalizar(){
    if(this.lista.length == 0 ){
        alert('Adicione valores antes de finalizar ');
    }else{
        let result = document.getElementById('view');
        this.lista.sort();

        result.innerHTML = `Ao todo temos ${this.lista.length} números cadastrados. <br>`;
        result.innerHTML += `O maior valor informado foi ${this.lista[this.lista.length -1 ]} <br>`;
        result.innerHTML += `O menor valor informado foi ${this.lista[0]} <br>`;

        let soma = 0;
        for(let num in this.lista){
            soma += this.lista[num];
        }

        result.innerHTML += `Somando todos os valores temos ${soma}. <br>`;
        result.innerHTML += `a média dos valores digitados é ${soma / this.lista.length}. <br>`;
    }

}