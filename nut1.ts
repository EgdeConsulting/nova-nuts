// Neida, årets påskenøtter er slett ikke avlyst!

// Dagens kodeord finner du hvis du leser ordet under på følgende måte. Start med bokstaven i midten, og les deretter annenhver bokstav mot venstre og annenhver bokstav mot høyre.

// read the word from the middle, then every other letter to the left and every other letter to the right
const word = 'nrsiaknnpeg';
let newWord = '';

// the first letter is the middle letter
let index = Math.floor(word.length / 2);

// add string to newWord
newWord += word[index];
let posIndex = index;
let negIndex = index;
// the next letter is the letter to the left of the middle letter, the next letter is the letter to the right of the middle letter, and so on
for (let i = 1; i < word.length; i++) {
  if (i % 2 === 0) {
    negIndex++;
    newWord += word[negIndex];
  } else {
    posIndex--;
    newWord += word[posIndex];
    
  }
}


console.log(newWord);