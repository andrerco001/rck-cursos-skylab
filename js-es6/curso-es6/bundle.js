"use strict";

// const 
// mutação != redefinição
var usuario = {
  nome: 'Andre'
};
console.log(usuario);
usuario.nome = 'Andre Ricardo';
console.log(usuario);

function test(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

test(10);
