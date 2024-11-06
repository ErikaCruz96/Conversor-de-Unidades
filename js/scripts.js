//selecionar elementos
const numbElement = document.querySelector("#numb");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector ("#to");
const convertBtn = document.querySelector("#convert-btn");
const resultElement = document.querySelector("#result")
const messageElement = document.querySelector("#message");

//Função para converter unidades
function convert(){
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if(fromValue === toValue){
        resultElement.value = numbElement.value;
        messageElement.textContent = "";
        return;
    }

    //converter para metros
    let meters;
    switch(fromValue){
        case "m":
            meters = numbElement.value;
            break;
        case "km":
            meters = numbElement.value * 1000;
            break;
        case "cm":
            meters = numbElement.value / 100;
            break;
        case "mm":
            meters = numbElement.value / 1000;
            break;
    }

    //converter metros para a unidade de saída
    let res;
    switch(toValue){
        case "m":
            res = meters;
            break;
        case "km":
            res = meters / 1000;
            break;
        case "cm":
            res = meters * 100;
            break;
        case "mm":
            res = meters * 1000;
            break;
    }

    //Exibir resultado
    resultElement.value = res;

    //Exibir mensagem
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;

    const mes = `${numbElement.value} ${fromLabel} equivalem a ${resultElement.value} ${toLabel}`

    messageElement.textContent = mes;
    return;//boa prática - função foi concluída
}

convertBtn.addEventListener("click", convert);