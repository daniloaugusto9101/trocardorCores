const cor = document.querySelector(".cor");
const body = document.querySelector("body");
const btn = document.querySelector("button");



const geradorCores = () => {
    const chars = "0123456789ABCDEF";
    let color = "#";

    for (let index = 0; index < 6; index++) {
        color += chars.charAt(Math.floor(Math.random() * chars.length))        
    }
    return color;
}

const exibirCor = (color) => {
    cor.innerHTML = color;
}

const corBody = (cor) => {
    body.style.backgroundColor = cor;
}

const iniciarCor = () =>{
    const cor = geradorCores();
    exibirCor(cor);
    corBody(cor);
}


btn.addEventListener("click", iniciarCor)

iniciarCor();





