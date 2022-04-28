function CalculateSum(){
    let firstNumber = Number(document.getElementById("FirstNumber").value);
    let secodNumber = Number(document.getElementById("SecondNumber").value);
    let result = firstNumber + secodNumber;
    alert("Aprēķinu rezultāts ir " + result);
}

function Calculate(){
    let firstNumber = Number(document.getElementById("FirstNumber").value);
    let secodNumber = Number(document.getElementById("SecondNumber").value);
    let operation = document.getElementById("operation").value;

    firstNumber = parseFloat(firstNumber);
    secodNumber= parseFloat(secodNumber);

    if(operation == "+"){
        result = firstNumber+secodNumber;
    }else if (operation == "-"){
        result = firstNumber - secodNumber
    }else if(operation == "*"){
        result = firstNumber * secodNumber
    }else if (operation == "/"){
        resuly = firstNumber / secodNumber
    }else{
        result = "Nevar aprēķināt"
    }

    alert("Aprēķina rezultāts" + result);
}









function SwitchMode() {
    var element = document.body;
    let button = document.getElementById("ModeSwitchButton");
    element.classList.toggle("dark-mode");
    if(button.value == "dark - mode"){
        button.value = "light mode";
    }
}