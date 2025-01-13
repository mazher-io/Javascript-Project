const quotes = [
    {text: "I love you", author: "Me"},
    {text: "I hate you", author: "Me"},
    {text: "I don't love you", author: "Me"},
    {text: "I love you", author: "You"},
]

document.getElementById('button').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').textContent = `${quote.text}`;
    document.getElementById('author').textContent = `- ${quote.author}`;

});