const clearOldWords = (parentElement) => {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

const makeTextForNumber = (number) => {
    const by3 = number % 3 === 0;
    const by5 = number % 5 === 0;
    if (by3) {
        return by5 ? 'BULBASAUR CHARMANDER' : 'BULBASAUR';
    }
    return by5 ? 'CHARMANDER' : 'PIKA PIKA';
}

const getGreetings = (firstName, middleInitial, lastName)  => {
    if(firstName || middleInitial || lastName) {
        return `Welcome to the Pokepages, ${firstName} ${middleInitial}${lastName}!`;
    } else {
        return `Welcome to the Pokepages!`;
    }
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