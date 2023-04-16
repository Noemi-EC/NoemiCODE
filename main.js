let btnEnc = document.getElementById("encriptar");

let btnDes = document.getElementById('desencriptar');

let btnCopiar = document.getElementById('copiar');

let btnLimpiar = document.getElementById('limpiar');

function encriptar(evento){
  let entrada = document.getElementById("texto-input").value;
  
  let lista = entrada.split('');
  
  for(let i = 0; i < lista.length; i++){
    switch (lista[i]){
      case 'a':
        lista[i] = 'ai';
        break;
      case 'e':
        lista[i] = 'enter';
        break;
      case 'i':
        lista[i] = 'imes';
        break;
      case 'o':
        lista[i] ='ober';
        break;
      case 'u':
        lista[i] = 'ufat';
        break;
    }
  }
  document.getElementById('texto-output').value = lista.join('');
}

function copiar(){
  let salida = document.getElementById('texto-output');
  salida.select();
  salida.setSelectionRange(0, 99999);
  document.execCommand('copy');
}

function desencriptar(evento){
  let texto = document.getElementById('texto-input').value;
  
  let a = 'a';
  let e = 'e';
  let i = 'i';
  let o = 'o';
  let u = 'u';
  
  texto = texto.replaceAll('ai', a);
  texto = texto.replaceAll('enter', e);
  texto = texto.replaceAll('imes', i);
  texto = texto.replaceAll('ober', o);
  texto = texto.replaceAll('ufat', u);

  document.getElementById('texto-output').value = texto;
}

function limpiar(evento){
  document.getElementById('texto-input').value = '';
  document.getElementById('texto-output'). value = '';
}

btnEnc.onclick = encriptar;
btnCopiar.onclick = copiar;
btnDes.onclick = desencriptar;
btnLimpiar.onclick = limpiar;