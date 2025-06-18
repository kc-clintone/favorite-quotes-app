const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Stay hungry, stay foolish.",
  "In the middle of every difficulty lies opportunity.",
  "You miss 100% of the shots you don't take.",
];

function showRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
}

showRandomQuote();
