// script.js
function checkPalindrome() {
    let text = document.getElementById("text-input").value.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if (text === "") {
        document.getElementById("result").innerText = "Please enter a valid text or number.";
        return;
    }

    let reversedText = text.split("").reverse().join("");

    if (text === reversedText) {
        document.getElementById("result").innerText = "✅ It's a palindrome!";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "❌ Not a palindrome.";
        document.getElementById("result").style.color = "red";
    }
}