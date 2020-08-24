'use strict'

const charactersLimit = 400;

function getRandomWord(words) {
    let randomPosition = Math.round(Math.random() * (words.length -1));
    return words[randomPosition];
}

function getRandomSeparateWord() {
    let numberRandom = Math.random(0, 1) * 100;
    return numberRandom > 30 ? ', ' : ' e ';
}

function generateParagraph(wordsForShuffle) {
    
    let text = '';
    let upperFirstLetter = false;

    while(text.length <= charactersLimit){
        let phrase = getRandomWord(wordsForShuffle);
        let lastLetter = phrase.charAt(phrase.length -1);

        phrase = upperFirstLetter ? phrase.replace(/^./, phrase[0].toUpperCase()) : phrase;
       
        if(['.', '?', '!'].indexOf(lastLetter) >= 0){
            upperFirstLetter = true;
            phrase = phrase.concat(' '); 
        } else {
            upperFirstLetter = false;
            phrase = phrase.concat(getRandomSeparateWord()); 
        }
        
        text = text.concat(phrase);
    }

    return text;
}

function getText(quantity, wordsForShuffle){
   
    let paragraphNumbers = 0;
    let textConcat = '';

    while(paragraphNumbers < quantity){
        let paragraph = generateParagraph(wordsForShuffle);
        textConcat = textConcat.concat(formatParagraph(paragraph));
        paragraphNumbers +=1;
    }

    return textConcat;
}

function formatParagraph(paragraph) {
    return paragraph.replace(/^./, paragraph[0].toUpperCase())
    .slice(0, paragraph.length - 2).concat('.')
    .concat('\n\n');
}

export default {
    getText
}