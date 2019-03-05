console.log("yo mah dude")

const iAmThirsty = (num) => {
    if(num < 21) {
        return 'drink some water'
    } else if (num > 20 && num < 65) {
        return 'have a beer'
    } else if (num > 64) {
        return 'take a nap'
    } else {
        return 'wutuuuuup'
    }
};

//function says if i am under 21 to drink water
//if over 21 but under 65 says have a bear
//over 65, take a nap

console.log(iAmThirsty(9));
console.log(iAmThirsty(27));
console.log(iAmThirsty(70));
console.log(iAmThirsty('yo mah dude'));

//bonus print to dom

// const printToDom = () => {
//     const ageDiv = document.getElementById(divId);
//     ageDiv.value = 
//     ageDiv.innerHTML += `You are ${age}, ${iAmThirsty(age)}</br>`
// }

const form = document.querySelector('form');

function printToDom() {
    event.preventDefault()
    const ageDiv = document.getElementById('age');
    const ageInput = document.getElementById('age-input');
    ageDiv.innerHTML += `You are ${ageInput.value}, ${iAmThirsty(ageInput.value)}</br>`
};

form.addEventListener('click', printToDom);