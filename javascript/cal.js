
var num1=document.getElementById('Number1')
var num2=document.getElementById('Number2')
var result=document.getElementById('res')





function on(){
    if(!num1.value || !num2.value){
        alert("Enter values........");
    }
    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    var c = a/b*100;
    result.innerText = "Percent: " + c;
}

