const clearOldWords = (parentElement) => {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

const getGreetings = (firstName, middleInitial, lastName)  => {
    if(firstName || middleInitial || lastName) {
        return `Welcome to the Pokepages, ${firstName} ${middleInitial}${lastName}!`;
    } else {
        return `Welcome to the Pokepages!`;
    }
}

const makeTextForNumber = (number, wordsRules, defaultWord) => {
    let result = [];
    for(let idx = 0; idx < wordsRules.length; idx++) {
        if(number % wordsRules[idx][0] === 0) {
            result.push(wordsRules[idx][1]);
        }
    }

    return result.length === 0 ? defaultWord : result.join(' ');
}

const showFizzWords = (count, wordsRules, defaultWord) => {
    const parentElement = document.getElementById('fizz_words');
    clearOldWords(parentElement);
    parentElement.style.visibility = 'visible';
    for (let i = 0; i < count; i++) {
        const newElement = document.createElement('li');
        newElement.innerText = makeTextForNumber(i + 1, wordsRules, defaultWord);
        parentElement.appendChild(newElement);
    }
}

const showGreetings = () => {
    const firstName = document.getElementById('first_name').value;
    let middleInitial = document.getElementById('middle_initial').value;
    if(middleInitial) middleInitial += '. ';
    const lastName = document.getElementById('last_name').value;

    document.getElementById('greeting').innerText = getGreetings(firstName, middleInitial, lastName);
}

const getDefaultWord = () => {
    return document.getElementById('default_word').value;
}

const getRepeatCount = () => {
    return +(document.getElementById('repeat_count').value);
}

const getWordRules = () => {
    let rules = [];
    const dividers = document.querySelectorAll("input[name = 'divider[]']");
    const words = document.querySelectorAll("input[name = 'showWord[]']");
    for(let i = 0; i < dividers.length; i++) {
        const divider = +(dividers[i].value);
        if(divider <= 0) {
            return null;
        }
        const showWord = words[i].value;
        if(!showWord) {
            return null;
        }
        rules.push([divider, showWord]);
    }
    return rules;
}

window.onload = () => {
    const form = document.getElementById('fizzbuzzform');
    form.onsubmit = () => {

        const wordRules = getWordRules();
        const defaultWord = getDefaultWord();
        const count = getRepeatCount();
    
        if(!wordRules || defaultWord.length === 0 || count <= 0) {
            alert('Please correct the values on the form!');
            return false;
        }

        showGreetings();
        showFizzWords(count, wordRules, defaultWord);
        return false;
    }
};