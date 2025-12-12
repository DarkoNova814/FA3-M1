function replaceAll() {
    let str1 = document.getElementById("txtInput").value;
    console.log(str1);
    

    let newStr = str1.replaceAll(' ', '');
    document.getElementById("txtResult").innerHTML = newStr;
}


function countLetters() {
    let inputText = document.getElementById("tInp4").value;
    

    let lettersOnly = inputText.replace(/[^a-zA-Z]/g, '');
    let letterCount = lettersOnly.length;
    

    document.getElementById("tOut3").innerHTML = letterCount;
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('CountBtn').addEventListener('click', countLetters);
    

    document.getElementById('tInp4').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            countLetters();
        }
    });
});
