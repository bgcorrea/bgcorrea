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


function enviarFormulario() {
    const formulario = document.getElementById('formularioParticipacion');
    const nombre = formulario.elements['nombre'].value;
    const correo = formulario.elements['correo'].value;
    const pais = formulario.elements['pais'].value;
    const genero = formulario.elements['genero'].value;
    const motivo = formulario.elements['motivo'].value;
  
    // Puedes realizar validaciones adicionales aquí
  
    // Envía los datos al servidor (puedes usar la técnica que prefieras, por ejemplo, fetch o XMLHttpRequest)
    const datos = { nombre, correo, pais, genero, motivo };
    // Aquí puedes agregar el código para enviar los datos al servidor, por ejemplo, mediante una solicitud HTTP
  
    // Muestra un mensaje de éxito al usuario
    resultado.innerText = "¡Formulario enviado con éxito!";
    // También podrías reiniciar el formulario si lo deseas
    formulario.reset();
  }
  