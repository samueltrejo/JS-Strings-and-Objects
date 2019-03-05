// console.log("yo mah dude")

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

// console.log(iAmThirsty(9));
// console.log(iAmThirsty(27));
// console.log(iAmThirsty(70));
// console.log(iAmThirsty('yo mah dude'));

// bonus print to dom

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

const catName = () => {
    return 'killer';
}

const bucketOCats = {
    cat1: 'fluffy',
    cat2: 5,
    cat3: catName,
    cat4: {
        water: 'nope',
        sunlight: 'yep'
    }
};

// console.log(bucketOCats.cat2);
// console.log(bucketOCats['cat2']);

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

// console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);
// console.log(hitchhikers_guide['random_facts']['ultimate_answer']['meaning_of_life']);

let eom = 'employee_of_the_month';

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010",
    // vacation_days: 20
    // eom: eom;
  }

console.log(`Our company's lawyer is ${employee.name}`);
console.log(`Jeff was hired on ${employee.hire_date}`);

// employee['vacation_days'] = 20; //works
employee.vacation_days = 20; //works
console.log(employee.vacation_days);

// employee.eom = false; //does not work
employee[eom] = false; //works

console.log(employee.employee_of_the_month);

console.log(employee)

const printAnswer = (questionNum, answer) => {
    const objDiv = document.getElementById('object-div');
    
    objDiv.innerHTML += `Answer ${questionNum}: ${employee[answer]}</br>`
    objDiv.innerHTML = JSON.stringify(employee);
}

printAnswer('1', 'name');
printAnswer('2', 'hire_date');
printAnswer('3', 'vacation_days');
printAnswer('4', 'employee_of_the_month');