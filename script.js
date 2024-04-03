const button = document.querySelector("#btn");
const par = document.querySelector("#par");
const quotes = [

    "Success is not a random act. It arises out of a predictable and powerful set of circumstances and opportunities.",
    "Maybe we can’t predict the future, but we can predict some things.",
    "Knowing what to expect next gives children a sense of security.",
    "How we interpret the events in our lives, our perspective, is the framework for our forthcoming response—whether there will even be one or whether we’ll just lie there and take it.",
    "May the wind under your wings bear you where the sun sails and the moon walks.",
    "Where there’s life there’s hope.",
    "The best way to predict the future is to invent it.",
    "Everything changes with time. You can't predict where you're gonna be next year; you have no idea, you know what I mean?"
];
button.addEventListener("click", () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})