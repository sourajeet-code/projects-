const word = prompt("Enter a word");
let vowel = 0;

for (let char of word) {
    if (
        char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
        char === "A" || char === "E" || char === "I" || char === "O" || char === "U"
    ) {
        vowel++;
    }
}
if (vowel === 1) {
     alert(`Your word has ${vowel} vowel`);
} 
else if (vowel > 0) {
    alert(`Your word has ${vowel} vowels`);
} else  {
    alert("There are no vowels in your word");
}
let i = confirm("do you want to play again")
if (i) {
    document.location.reload()
}
