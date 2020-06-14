let myPromise = function(){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/andrerco001');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição.')
                }
            }
        }

    });
}

let resultado = myPromise()
                .then(function(response){
                    console.log(response);
                })
                .catch(function(error){
                    console.warn(error);
                });

console.log(resultado);