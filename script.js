
const textoParaProcesar = document.querySelector(".TextInput");
const mensajeParaMostrar = document.querySelector(".TextInputArea");

/*Funcion que se ejecuta cuando se presiona el boton Encriptar*/
function btnEncriptar () {
    const textoEncriptado = encriptar(textoParaProcesar.value);
    mensajeParaMostrar.value = textoEncriptado;
} 

/*Funcion que se ejecuta cuando se presiona el boton Desencriptar*/
function btnDesencriptar () {
    const textoDesencriptado = desencriptar(textoParaProcesar.value);
    mensajeParaMostrar.value = textoDesencriptado;
} 

function encriptar(stringParaEncriptar){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for (let i=0; i < matrizCodigo.length; i++){
        if (stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringParaEncriptar;
}

function desencriptar(stringParaDesencriptar){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
    for (let i=0; i < matrizCodigo.length; i++){
        if(stringParaDesencriptar.includes(matrizCodigo[i][1])){
            stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringParaDesencriptar;
}