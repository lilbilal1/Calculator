const display=document.getElementById("display");

function appendToDisplay(input){
    display.value+=input
}
function clearDisplay(){
    display.value="";
}
function calcule(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="error"
    }
}
function leftremove(){
    let currentText=display.value;
    if(currentText.length>0){
        display.value=currentText.slice(0,-1)
    }
}
function rightremove(){
    let currentText=display.value;
    if(currentText.length>0){
        display.value=currentText.slice(1)
    }
}

