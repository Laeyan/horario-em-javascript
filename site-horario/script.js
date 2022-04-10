function carregar() {
    var msg = window.document.querySelector("div#msg");
    var img = window.document.querySelector("img#imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if( hora >= 0 && hora < 12 ){
       // "Bom dia!";
        img.src = "manha.png"
        document.body.style.background = "#dabc80"

    }else if(hora >= 12 && hora < 19){
       // "Boa tarde!";
        img.src = "tarde.png"
        document.body.style.background = "#a06866"
        
    }else {
       // "Boa noite!";
        img.src = "noite.png"
        document.body.style.background = "#323345"
    }
}
