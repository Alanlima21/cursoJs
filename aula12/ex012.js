
agora = new Date();
hora = agora.getHours;

if(hora < 12 && hora >= 5){
    console.log('Bom Dia');
}else if (hora <= 18 && hora >= 12){
    console.log('Boa Tarde');
}else if(hora < 5 && hora >= 0){
    console.log('Boa Madrugada');
}else{
    console.log('Boa Noite');
}