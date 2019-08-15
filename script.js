window.onload = horario;

function horario(){
    var data = new Date();
    var hora = data.getHours();
    var m = data.getMinutes();
    var s = data.getSeconds();
    setTimeout(horario, 1000); 
    //metodo chamador de função após um tempo
    //1000ms = 1s

    var header = document.querySelector("header");
    var footer = document.querySelector("footer");
    var imagem = document.querySelector("img");
    var msg = document.querySelector("figcaption");

    if(hora >= 18 || hora < 6){ 
        document.body.style.backgroundColor = "rgba(0, 23, 37)";
        header.style.color = "rgb(231, 231, 231)";
        footer.style.color = "rgb(231, 231, 231)";
        imagem.src = "noite.jpeg";
        imagem.alt = "Fotografia Noturna"
        msg.innerHTML = `<b>Boa Noite!</b> são <b>${hora}:${m}:${s}</b> horas`;
    } else if (hora >= 6 && hora < 12) {
        document.body.style.backgroundColor = "rgb(96, 210, 255)";
        header.style.color = "rgb(28, 97, 119)";
        footer.style.color = "rgb(28, 97, 119)";
        imagem.src = "manha.jpeg";
        imagem.alt = "Café da manhã à beira da piscina"
        msg.innerHTML = `<b>Bom Dia!</b> são <b>${hora}:${m}:${s}</b> horas`;
    } else {
        document.body.style.backgroundColor = "rgb(197, 147, 63)";
        header.style.color = "black";
        footer.style.color = "black";
        imagem.src = "tarde.jpeg";
        imagem.alt = "Florence Welch melhor artista"
        msg.innerHTML = `<b>Boa Tarde!</b> são <b>${hora}:${m}:${s}</b> horas`;
    }
}