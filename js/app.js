const idText = document.querySelector('.card__content__advice-id');
const quoteText = document.querySelector('.card__content__advice-quote');
const button = document.querySelector('.card__btn');

button.addEventListener('click', () =>{
    var request = new XMLHttpRequest()
    request.open('GET', "https://api.adviceslip.com/advice?id="+Math.random(), true)
    request.onload = function() {
        var data = JSON.parse(this.response)
        idText.innerHTML = "ADVICE #"+data.slip.id;
        quoteText.innerHTML = "\""+data.slip.advice+"\"";
    }
    request.send()
    
    
})



