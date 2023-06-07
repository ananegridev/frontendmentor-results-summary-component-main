const totalResult = document.querySelector('.result div span');

const reactionIco = document.querySelector('.react div img');
const reactionTitle = document.querySelector('.react div h4');
const reactionResult = document.querySelector('.react .summary-box-result b');

const memoryIco = document.querySelector('.memory div img');
const memoryTitle = document.querySelector('.memory div h4');
const memoryResult = document.querySelector('.memory .summary-box-result b');


const verbalIco = document.querySelector('.verbal div img');
const verbalTitle = document.querySelector('.verbal div h4');
const verbalResult = document.querySelector('.verbal .summary-box-result b');


const visualIco = document.querySelector('.visual div img');
const visualTitle = document.querySelector('.visual div h4');
const visualResult = document.querySelector('.visual .summary-box-result b');

const url = './assets/json/data.json';

async function getResults() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    reactionTitle.innerText = data[0].category;
    memoryTitle.innerText = data[1].category;
    verbalTitle.innerText = data[2].category;
    visualTitle.innerText = data[2].category;

    reactionIco.setAttribute('src', data[0].icon);
    memoryIco.setAttribute('src', data[1].icon);
    verbalIco.setAttribute('src', data[2].icon);
    visualIco.setAttribute('src', data[3].icon);

    reactionResult.innerText = data[0].score;
    memoryResult.innerText = data[1].score;
    verbalResult.innerText = data[2].score;
    visualResult.innerText = data[3].score;

    sumResult = (data[0].score + data[1].score + data[2].score + data[3].score) / 4;
    totalResult.innerText = sumResult.toFixed(0);
}
  
getResults();
