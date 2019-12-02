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

const divisibleBy = (counter, divisor) => counter % divisor === 0;

const makeTextForNumber = (number) => {
    if (divisibleBy(number, 3)) {
        return divisibleBy(number, 5) ? 'BULBASAUR, CHARMANDER' : 'BULBASAUR';
    }
    return divisibleBy(number, 5) ? 'CHARMANDER' : 'PIKA PIKA';
}

const createLiElement = (number) => {
    const newElement = document.createElement('li');
    newElement.innerText = makeTextForNumber(number + 1);
    return newElement;
}

const showFizzWords = (count) => {
    const parentElement = document.getElementById('fizz_words');
    clearOldWords(parentElement);
    parentElement.style.visibility = 'visible';
    for (let i = 0; i < count; i++) {
        parentElement.appendChild(createLiElement(i));
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