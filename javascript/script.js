// diretriz que tengo que seguir para
// `La letra "e" es convertida para "enter"`
// `La letra "o" es convertida para "ober"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "u" es convertida para "ufat"`

function encriptar() {
  let texto = document.getElementById("text-in").value;
  let texencriptado = texto.replace(/e/gim, "enter");
  texencriptado = texencriptado.replace(/o/gim, "ober");
  texencriptado = texencriptado.replace(/i/gim, "imes");
  texencriptado = texencriptado.replace(/a/gim, "ai");
  texencriptado = texencriptado.replace(/u/gim, "ufat");

  document.getElementById("imaderecha").style.display = "none";
  document.getElementById("text-derecho").style.display = "none";
  document.getElementById("texto_ou").innerHTML = texencriptado;
  document.getElementById("copiar").style.display = "initial";
  document.getElementById("container-button").style.display = "inherit";
  console.log(texto);
}

function desencriptar() {
  let texto = document.getElementById("text-in").value;
  let texencriptado = texto.replace(/enter/gim, "e");
  texencriptado = texencriptado.replace(/ober/gim, "o");
  texencriptado = texencriptado.replace(/imes/gim, "i");
  texencriptado = texencriptado.replace(/ai/gim, "a");
  texencriptado = texencriptado.replace(/ufat/gim, "u");

  document.getElementById("imaderecha").style.display = "none";
  document.getElementById("text-derecho").style.display = "none";
  document.getElementById("texto_ou").innerHTML = texencriptado;
  document.getElementById("copiar").style.display = "initial";
  document.getElementById("container-button").style.display = "inherit";
}
function copyDocument() {
  let selector = document.getElementById("texto_ou");
  selector.select();
  document.execCommand("copy");
  alert("!se copio¡");
}
function limpiarTextarea() {
  let textarea = document.getElementById("text-in");
  textarea.value = "";
}
//  document.getElementById("bt-encriptar").onClick = encriptar;
//  document.getElementById("bt-desencriptar").onClick = desencriptar;
//  document.getElementById("copiar").onClick =copyDocument;
