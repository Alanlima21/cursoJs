function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano').value;
    var res = document.querySelector('div#res');
    if(fAno.length == 0 || fAno > ano ){
        alert('Verifique os dados e tente novamente');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'bebe.png');
            }else if(idade < 21){
                img.setAttribute('src', 'Hjovem.png')
            }else if (idade < 50){
                img.setAttribute('src', 'Homem.png');
            }else{
               img.setAttribute('src', 'Hidoso.png');
            }
        } else{
            genero = 'Mulher';
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'bebe.png');
            }else if(idade < 21){
                img.setAttribute('src', 'Mjovem.png');
            }else if (idade < 50){
                img.setAttribute('src', 'mulher.png');
            }else{
                img.setAttribute('src', 'Midosa.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}