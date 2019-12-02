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

const makeTextForNumber = (number) => {
    const wordsRules = [
        [3, 'BULBASAUR'],
        [5, 'CHARMANDER'],
        [7, 'SQUIRTLE'],
    ]
    const defaultWord = 'PIKA PIKA';

    let result = [];
    for(let idx = 0; idx < wordsRules.length; idx++) {
        if(number % wordsRules[idx][0] === 0) {
            result.push(wordsRules[idx][1]);
        }
    }

    return result.length === 0 ? defaultWord : result.join(' ');
}

const showFizzWords = (count) => {
    const parentElement = document.getElementById('fizz_words');
    clearOldWords(parentElement);
    parentElement.style.visibility = 'visible';
    for (let i = 0; i < count; i++) {
        const newElement = document.createElement('li');
        newElement.innerText = makeTextForNumber(i + 1);
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

window.onload = () => {
    const form = document.getElementById('fizzbuzzform');
    form.onsubmit = () => {
        showGreetings();
        showFizzWords(140);
        return false;
    }
};