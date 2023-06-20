// Captura dos elementos do HTML
const textIn = document.querySelector("textarea");
const textOut = document.querySelector("#textOut");
const aviso = document.querySelector("#notification");
// Vetores com a criptografia
var gatilhos = ['e', 'i', 'a', 'o', 'u'];
var correspondentes = ['enter', 'imes', 'ai', 'ober','ufat'];
// Uma expressão regular que define os caracteres aceitos
var patt1 = /[^a-z0-9\s]/gm;

// Verifica o que o usuário está digitando e o avisa quanto a restrição
var verificador = false;
function verifica() {
    verificador = false;
    //Usa o método `search` para verificar se há alguma caractere diferente dos já definidos
    if(textIn.value.search(patt1) != -1 && textIn.value != "") {
        //Caso a condição se prove verdadeira o verificador fica verdadeiro e trava as outras funções atreladas aos botões e dispara um aviso
        verificador = true;
        aviso.textContent = "⚠ Não use letras maiúsculas, com acento ou caracteres especiais";
    }else{
        //Caso a condição seja falsa retira-se o aviso
        aviso.textContent = "";
    }
}

// Captura o texto inserido e aplica a criptografia
function encriptando(textIn) {
    textoSaida = textIn;
    if (textIn == "") {
        return "Nada para criptografar!"
    }else{
        //Lógica de criptografia: Percorre toda a entrada de texto e troca os correspondentes com o uso do método `replace`
        for (var i = 0; i < 5; i++) {
            textoSaida = textoSaida.replaceAll(gatilhos[i], correspondentes[i]);
        }
        return textoSaida;
    }
}

// Captura o texto inserido e aplica a descriptografia
function desencriptando(textIn) {
    textoSaida = textIn;
    if (textIn == "") {
        return "Nada para descriptografar!"
    }else{
        //Lógica de descriptografia: Percorre toda a entrada de texto e troca os correspondentes com o uso do método `replace`
        for (var j = 0; j < 5; j++) {
            textoSaida = textoSaida.replaceAll(correspondentes[j], gatilhos[j]);
        }
        return textoSaida;
    }
}

// Função atrelada ao botão criptografar
function criptografar() {
    if(!verificador) {
        textOut.textContent = encriptando(textIn.value);
        textIn.value = "";
        textIn.focus();
    }
}

// Função atrelada ao botão descriptografar
function descriptografar() {
    if(!verificador) {
        textOut.textContent = desencriptando(textIn.value);
        textIn.value = "";
        textIn.focus();
    }
}

// Função atrelada ao botão copiar
function copiando() {
    var texto = textOut.textContent;
    if(texto != "Nada foi descriptografado ainda.") {
        navigator.clipboard.writeText(texto);
        textOut.textContent = "Copiado para área de transferência!";
        textIn.focus();
    }
}

// Executa a função verifica a cada 1 milisegundo
setInterval(verifica, 1);