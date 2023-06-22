const API_LINK = "https://api.adviceslip.com/advice";
const adviceNumber = document.querySelector('.advice-generator_advice-number')
const adviceQuote = document.querySelector('.advice-generator_quotes')
const fetchBtn = document.querySelector('button.advice-generator_btn')

const fetchNewAdvice = async () => {
    const response = await fetch(API_LINK);
    const advice = await response.json()
    return advice
};

const ProvideAdvice = (adviceObj) => {
    const {id,advice} = adviceObj;
    adviceNumber.textContent = `ADVICE #${id}`;
    adviceQuote.textContent = advice;
};

const generateNewAdvice = async()=> {
    const data = await fetchNewAdvice()
    const advice = data.slip;

//Render
    ProvideAdvice(advice);
};

window.addEventListener('DOMContentLoaded', () => {
    fetchBtn.addEventListener('click', generateNewAdvice)
})

