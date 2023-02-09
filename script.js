const h1 = document.querySelector(".card_profile h1");
const p = document.querySelector('.card_profile p');
const twitch = document.querySelector(".twitch")
const input = document.querySelector("#inputEnviar")
const buttonEnviar = document.querySelector("#btnEnviar")
const resultado = document.querySelector("#resultado")

console.log({
    h1,
    p,
    twitch,
    input,
buttonEnviar
})

buttonEnviar.addEventListener("click", btnOnClick);

function btnOnClick(){
    console.log(input.value);
    resultado.innerText = "¡Su mensaje ha sido enviado con éxito!";
}



// h1.innerHTML = "Benjamín Correa Peñaloza";

// h1.getAttribute = "patito"
// h1.setAttribute = ("class", "rojo")
// h1.classList.add = ("rojo")
// h1.classList.remove = ("rojo")
//toggle y contains

//const img = document.createElement("span")
//img.setAttribute("src", "https://www.ngenespanol.com/wp-content/uploads/2023/01/puma-el-animal-de-la-fuerza-y-vitalidad-de-los-pueblos-prehispanicos.jpg")
//console.log(img)

// const email = document.querySelector(".card_information .mail")

// email.appendChild(img);


//////////////////////////////////////////


