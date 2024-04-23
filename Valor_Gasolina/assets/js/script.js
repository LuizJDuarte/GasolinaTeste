function calcular(event){
    event.preventDefault();
    
    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result");
    let alcoolResult = document.getElementById("alcool-result");
    let gasolinaResult = document.getElementById("gasolina-result");
    let resultadoCalculo = alcoolInput/gasolinaInput;

    alcoolResult.innerHTML = `Álcool R$${alcoolInput}`;
    gasolinaResult.innerHTML = `Gasolina R$${gasolinaInput}`;

    if(resultadoCalculo < 0.7){
        textResult.innerHTML = "Compensa usar Álcool.";
    }

    else{
        textResult.innerHTML = "Compensa usar Gasolina.";
    }

    contentResult.classList.remove("hide");
}

