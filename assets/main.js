const display=document.getElementById("display");
document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        var currentValue = document.getElementById('display').value;

        var newValue = currentValue + event.key;
        document.getElementById('display').value = newValue;
    }
    else if (event.key === 'Delete' || event.key === 'Backspace') {
        var currentValue = document.getElementById('display').value;
        var newValue = currentValue.slice(0, -1);
        document.getElementById('display').value = newValue;
    }
});
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

