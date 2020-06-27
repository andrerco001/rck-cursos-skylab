// const 
// mutação != redefinição
const usuario = {
    nome:'Andre'
};
console.log(usuario);
usuario.nome = 'Andre Ricardo';

console.log(usuario);

function test(x){
    let y = 2;

    if(x > 5){
        let y = 4;
        console.log(x, y);
    }
}

test(10);
