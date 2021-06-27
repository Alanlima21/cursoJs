function contar(){
    let numeroInicio = Number(document.getElementById('num1').value);
    let numeroFim = Number(document.getElementById('num2').value);
    let passo = Number(document.getElementById('passo').value);
    let result = document.getElementById('result');

    if(passo <=0){
        passo = 1;
    }
    
    result.innerHTML = "";
    if(numeroInicio < numeroFim){
        while(numeroInicio <= numeroFim){
            result.innerHTML += `${numeroInicio} \u{1f449}`;
            numeroInicio += passo;
        }
    }else{
        while(numeroInicio >= numeroFim){
            result.innerHTML += `${numeroInicio} \u{1f449}`;
            numeroInicio -= passo;
        }
    }

    result.innerHTML += `\u{1F3C1}`;
}