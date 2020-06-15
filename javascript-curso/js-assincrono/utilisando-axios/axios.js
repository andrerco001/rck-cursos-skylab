axios.get('https://api.github.com/users/andrerco001')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });