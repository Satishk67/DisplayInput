// Select all input fields and btns and resulting divs
const inputs = document.querySelectorAll('.bx');
const proceed_btn = document.querySelector('.proceed');
const search_btn = document.querySelector('.btn');
const output1 = document.querySelectorAll('.res')[0];
const output2 = document.querySelectorAll('.res')[1];

// ➤ proceed-btn
proceed_btn.addEventListener('click', () => {
    alert("Corfirm Submission")
    const name = inputs[0].value.trim();
    const college = inputs[1].value.trim();
    
    if (name && college) {
        output1.textContent = `Hello ${name}. I am glad to know that you are from ${college}.`;
    } 
    else {
        output1.textContent = `Please enter both name and college`;
    }
});

function handle_search() {
    const anything = inputs[2].value.trim();
    if (anything) {
        output2.textContent = `Your Input: ${anything} `;
    } 
    else {
        output2.textContent = "Please type something.";
    }
}

// ➤ search-btn
search_btn.addEventListener('click', handle_search);
inputs[2].addEventListener('keydown',(event)=>{
    if(event.key == 'Enter'){
        event.preventDefault();
        handle_search();
    }

});
