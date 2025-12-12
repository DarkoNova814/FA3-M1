function replaceAll() {
    let str1 = document.getElementById("txtInput").value;
    console.log(str1);
   

    let newStr = str1.replaceAll(' ','');
    document.getElementById("txtResult").innerHTML = newStr;

}
