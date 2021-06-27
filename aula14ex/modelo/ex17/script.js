function gerar(){
    let numero = Number(document.getElementById('num').value);
    let result = document.getElementById('result');
    result.innerHTML = '';

    for(let i=1; i<=10; i++){
        let item = document.createElement('option');
        item.text = `${i} x ${numero} = ${numero * i} \n`;
        item.value = `tab${i}`
        result.appendChild(item);
    }
}