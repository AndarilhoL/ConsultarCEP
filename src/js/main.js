const cep = document.querySelector("#cep");

const mostrarValores = (result)=>{
    for (const campo in result) {
        if (document.querySelector("#"+campo)) {
            document.querySelector("#"+campo).value = result[campo]
        }       
    }
}

cep.addEventListener("blur",() => {
    let pesquisar = cep.value.replace("-","")
    const opcoes = {
        method:'GET',
        mode:'cors',
        cache:'default'
    }

    fetch(`https://viacep.com.br/ws/${pesquisar}/json`,opcoes)
    .then((response)=>{response.json()
        .then(data => mostrarValores(data))})
    .catch(e => console.log("Deu ruim meu bom:" + e.message))
    
    //console.log(cep.value)
})