let quoteData = [];
let currentQuoteData = {};

let randomIndex = (dataLength) => {
    return Math.floor(Math.random() * dataLength);
};

document.addEventListener("DOMContentLoaded", async function () {
    const author = document.querySelector(".author");
    const quote = document.querySelector(".quote");
    const tag = document.querySelector(".tag");
    const newQuoteBtn = document.querySelector("#new-quote");
    const copyQuoteBtn = document.querySelector("#copy-quote");
    const alertText = document.querySelector("#alert-text");

    if (quoteData.length === 0) {
        fetch("https://type.fit/api/quotes")
            .then((response) => response.json())
            .then((data) => {
                quoteData = data;
                currentQuoteData = quoteData[randomIndex(quoteData.length)];
                author.innerText = currentQuoteData.author;
                quote.innerText = currentQuoteData.text;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    newQuoteBtn.addEventListener("click", function () {
        currentQuoteData = quoteData[randomIndex(quoteData.length)];
        author.innerText = currentQuoteData.author;
        quote.innerText = currentQuoteData.text;
        alertText.innerText = "New Quote Generated";

        setTimeout(function () {
            alertText.innerText = "";
        }, 1000);
    });

    copyQuoteBtn.addEventListener("click", function () {
        navigator.clipboard.writeText(quote.innerText);
        alertText.innerText = "Copied to Clipboard";

        setTimeout(function () {
            alertText.innerText = "";
        }, 1000);
    });
});
