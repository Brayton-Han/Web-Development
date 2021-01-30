function checkField3(){
    var field = document.getElementById("field3").value;
    var regex = /^[A-A-Za-z]{3}$/;
    if(regex.test(field))
        document.getElementById("message3").innerHTML = "Input accepted";
    else
        document.getElementById("message3").innerHTML = "Please use a three letter code.";
}