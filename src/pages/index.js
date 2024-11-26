console.log("Trocnaod tela")
try{
    setTimeout(function() {
        window.location.href = '/src/index2.html';
    }, 4000);
    console.log("Tela Carregada")
} catch{
    console.log("Algum erro existente")
}