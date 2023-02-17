
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let cards = [firstCard, secondCard] 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard(){
    return 5
}
function startGame() {
    renderGame()
}
function renderGame() {
           // 3. Render the sum on the page using this format -> "Sum: 14"
      cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = getRandomCard()
    
    sum += card
    
     cards.push(card)
    console.log(cards)
    renderGame()
}
  


