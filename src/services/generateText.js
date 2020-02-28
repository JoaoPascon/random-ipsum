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

function generateText(wordsForShuffle) {
    let text = '';

    while(text.length <= charactersLimit){
        text = text.concat(getRandomWord(wordsForShuffle)).concat(' ');
    }

    return text;
}

function getText(quantity, wordsForShuffle){
    let textNumbers = 0;
    let textTotal = '';

    while(textNumbers < quantity){
        let textGenerate = generateText(wordsForShuffle);
        textGenerate = upperCaseFirstLetter(textGenerate);
        textTotal = textTotal.concat(textGenerate).concat('\n\n');
        textNumbers +=1;
    }

    return textTotal;
}

function upperCaseFirstLetter(words) {
    return words.replace(/^./, words[0].toUpperCase());
}

export default {
    getText
}