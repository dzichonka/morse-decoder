const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let result = '';
  for (let l = 0; l < expr.length; l = l + 10) {
    let letter = expr.slice(l, l + 10);
    console.log(letter);
    if (letter === "**********") {
      result += " ";
    } else {
      let morseSign = "";
      for (let s = 0; s < 10; s = s + 2) {
        let sign = letter.slice(s, s + 2);
        console.log(sign);
        if (sign === "10") {
          morseSign += ".";
        } else if (sign === "11") {
          morseSign += "-";
        }
        console.log(morseSign);

      }
      if (MORSE_TABLE[morseSign]) {
        result += MORSE_TABLE[morseSign];
      }
    }
  }
  return result;
}

console.log(decode("00000011110000000010"));
