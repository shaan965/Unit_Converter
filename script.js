function tempConverter(){
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = [celsius*9/5] + 32
    document.getElementById("fahrenheit").value = fahrenheit;
}


function weightConverter(){
    var kilograms = document.getElementById("kilograms").value;
    var pounds = kilograms * 2.2;
    document.getElementById("pounds").value = pounds;
}

function lengthConverter(){
    var kilometers = document.getElementById("km").value;
    var miles = kilometers * 3.28;
    document.getElementById("miles").value = miles;
}
