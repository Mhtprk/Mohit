// variable and function defenations 

const customName = document.getElementById('customname');
const randomize = document.querySelector('randomize');
const story = document.querySelector('story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// raw text strings

const storytext = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

const insertX = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas',
];

const insertY = [
    'the soup kitchen',
    'Dineyland',
    'the White House',
];

const insertZ = [
    'sponatneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away',
];

// event listeners and partial function defenation 

randomize.addEventListener('click', result);

function result(){
    let newStory = storytext;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx', xItem).replace(':inserty', yItem).replace(':insertz', zItem)
    
    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace(/Bob/g, name);
    }

    let weight = 300;
    let temperature = 94;

    if(document.getElementById("uk").checked) {
        weight = Math.round(300 / 14);
        weight += 'stone';
        temperature =  Math.round((94 - 32)) * (5/9);
        temperature += 'centigrade';
    }

    newStory = newStory.replace('300 pounds', weight).replace('94')

    story.textContent = newStory;
    story.style.visibility = 'visible';
}