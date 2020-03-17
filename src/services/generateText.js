'use strict'

const charactersLimit = 400;
const ipsums = ['i', 'ip', 'sum', 'um', 'm', 'l', 'lo', 'rem', 'em', 'm'];

function shuffleWords(wordsForShuffle) {
    let randomWord = getRandomWord(wordsForShuffle);

    let wordList = randomWord.split(' ');
   
    let word = getRandomWord(wordList);
    let wordConcatIpsum = word.concat(' ').concat(getRandomWord(ipsums));
    
    return wordConcatIpsum;
}


function getRandomWord(words) {
    let randomPosition = Math.round(Math.random() * (words.length -1));
    return words[randomPosition];
}

function getRandomSeparateWord() {
    return ', '
}

function generateText(wordsForShuffle) {
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
            phrase = phrase.concat(', '); 
        }
        
        text = text.concat(phrase);
    }

    return text;
}

function getText(quantity, wordsForShuffle){
    let textNumbers = 0;
    let textConcat = '';

    while(textNumbers < quantity){
        let textGenerate = generateText(wordsForShuffle);
        textConcat = textConcat.concat(formatText(textGenerate));
        textNumbers +=1;
    }

    return textConcat;
}

function formatText(words) {
    return words.replace(/^./, words[0].toUpperCase())
    .slice(0, words.length - 2).concat('.')
    .concat('\n\n');

}

export default {
    getText
}