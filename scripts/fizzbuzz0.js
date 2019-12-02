const showFizzWords = (count) => {
    const parentElement = document.getElementById('fizz_words');
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    parentElement.style.visibility = 'visible';
    for (let i = 0; i < count; i++) {
        const newElement = document.createElement('li');
        newElement.innerText = (i % 2 === 0) 
            ? 'PIKA PIKA PIKACHU - the number is odd' 
            : 'PIKA PIKA PIKACHU - the number is even';
        parentElement.appendChild(newElement);
    }
}

const getGreetings = (firstName, middleInitial, lastName)  => {
    if(firstName || middleInitial || lastName) {
        return `Welcome to the Pokepages, ${firstName} ${middleInitial}${lastName}!`;
    } else {
        return `Welcome to the Pokepages!`;
    }
}

const getTopCountLabel = (firstName) => {
    if(firstName) {
        return `How high do you want to count, ${firstName}?`;
    } else {
        return `How high do you want to count?`;
    }
}

window.onload = () => {
    const form = document.getElementById('fizzbuzzform');
    form.onsubmit = () => {
        const firstName = document.getElementById('first_name').value;
        let middleInitial = document.getElementById('middle_initial').value;
        if(middleInitial) middleInitial += '. ';
        const lastName = document.getElementById('last_name').value;
        const nextSubmitForm = document.getElementById('fizz_count');
        nextSubmitForm.style.display = 'block';
        document.getElementById('greeting').innerText = getGreetings(firstName, middleInitial, lastName);
        document.getElementById('top_count_label').innerText = getTopCountLabel(firstName);
        return false;
    }

    const countForm = document.getElementById('fizz_count');
    countForm.onsubmit = () => {
        const countNumber = +document.getElementById('top_count').value;
        showFizzWords(countNumber);
        return false;
    }
};