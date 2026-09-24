let money = 0;
const withdrawAmount = 20;
const depositAmount = 20;

function withdraw() {
    money = money - withdrawAmount;

    const healthText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");

    if(money > 0)
    {
        healthText.innerText = money;
        statusText.innerText = "You're on your way to becoming a millionaire!";
    }
    else
    {
        healthText.innerText = 0;
        statusText.innerText = "You went bankrupt!";
        statusText.style.color = "#f9331d";
        statusText.style.fontWeight = "bold";
        
        document.body.style.backgroundColor = "#610a00";

        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "Bankrupt";

    }
}
function deposit() {
    money = money + depositAmount;

    const healthText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");

        healthText.innerText = "> 0";
        statusText.innerText = "You're on your way to becoming a millionaire!";
        statusText.style.color = "#ffffff";
        statusText.style.fontWeight = "bold";
        
        document.body.style.backgroundColor = "#008b8b";

        document.querySelector("button").disabled = false;
        document.querySelector("button").innerText = "Withdraw $20";

    if(money > 0)
    {
        healthText.innerText = money;
        statusText.innerText = "You're on your way to becoming a millionaire!";
    }
    else
    {
        healthText.innerText = 0;
        statusText.innerText = "You went bankrupt!";
        statusText.style.color = "#f9331d";
        statusText.style.fontWeight = "bold";
        
        document.body.style.backgroundColor = "#610a00";

        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "Bankrupt";

    }
}