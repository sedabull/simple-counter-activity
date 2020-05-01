let counter = document.querySelector('#counter');
let incrementButton = document.querySelector('#increment');
let decrementButton = document.querySelector('#decrement');

incrementButton.addEventListener("click", function() {
    counter.innerHTML = Number(counter.innerHTML) + 1;

    if (counter.innerHTML >= 10) {
        counter.style.color = 'red';
    }//end if

    console.log("+ button clicked");
});

decrementButton.addEventListener("click", function() {
    if (counter.innerHTML > 0) {
        counter.innerHTML -= 1;
    }//end if

    if (counter.innerHTML < 10) {
        counter.style.color = 'black';
    }//end if
    
    console.log("- button clicked");
});