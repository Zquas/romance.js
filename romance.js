lyrics = "Say goodnight, with each bite does your sanity die, sucking the life out, letting the dark, inside";
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function parseText(){
    // let sentenceArray = [];
    // for(let i=0; i<text.length; i++){
    //     if(text[i] === )
    //     sentenceArray.push(text[i].toLowerCase());
    // }
    // return sentenceArray;
    console.log(lyrics.toLowerCase().replace(regex, ''));
    return lyrics.toLowerCase().replace(regex, '');
}

function generateWordPairs(){
    let wordPairs = {};
    let words = parseText(lyrics);
    for(i=0; i<words.length-1; i++){
        let currentWord = words[i];
        let nextWord = words[i+1];
        if (wordPairs[currentWord]){
            wordPairs[currentWord] = nextWord;
        }
    }
    return wordPairs;
}

function randomlyChoose(wordArray){
    let index = Math.floor(wordArray.length*Math.random());
    return wordArray[index];
}

function writeLine(lyrics, limit){
    let words = parseText(lyrics);
    let wordPairs = generateWordPairs(lyrics);
    let word = randomlyChoose(words);
    let sentence = [word];
    while(wordpairs[word]){
        let nextWord = wordPairs[word];
        word = randomlyChoose(nextWord);
        sentence.push(word);
        if (sentence.length > limit){
            break;
        }
    }
    return sentence.join(' ');
}

function generatePoem(lyrics, limit){
    for(i=0; i< limit; i++){
        let poem = Math.floor(Math.random()*10)+1;
        console.log(writeLine(lyrics, 1));
    }
}
console.log(parseText(lyrics));