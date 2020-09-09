/*Random quote generator
*Button will have event listener so on click a function will run to chose a new quote at random. 
*Function will produce a random number a conditional statement will compare the number with the conditions.
*Each condition contains a quote and author which will run if matched.
*/

const randomQuoteButton = document.getElementById('random-quote-button');
randomQuoteButton.addEventListener('click', changeQuote);

function changeQuote () {
    let randomNumber = Math.floor(Math.random() * 5);
    const quoteParagraph = document.getElementById('quote-paragraph');
    const authorName = document.getElementById('author');
    console.log(randomNumber);
    if (randomNumber === 0) {
        quoteParagraph.textContent = 'Beauty is truth, truth beauty,that is all Ye know on earth, and all ye need to know.';
        authorName.textContent = 'John Keats';
    }
    else if (randomNumber === 1) {
        quoteParagraph.textContent = 'But I\, being poor, have only my dreams\; I have spread my dreams under your feet\; Tread softly because you tread on my dreams.';
        authorName.textContent = 'W.B. Yeats';
    }
    else if (randomNumber === 2) {
        quoteParagraph.textContent = 'Education is an admirable thing, but it is well to remember from time to time that nothing that is worth knowing can be taught.';
        authorName.textContent = 'Oscar Wilde';
    }
    else if (randomNumber === 3) {
        quoteParagraph.textContent = 'Two things are infinite: the universe and human stupidity\; and I\'m not sure about the universe.';
        authorName.textContent = 'Albert Einstein';
    }
    else if (randomNumber === 4) {
        quoteParagraph.textContent = 'A room without books is like a body without a soul.';
        authorName.textContent = 'Marcus Tullius Cicero';
    }
    else {
        console.log('ERROR: randomQuote')
    }
}