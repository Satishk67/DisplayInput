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
        output2.textContent = `Result for: ${anything} `;
    } 
    else {
        output2.textContent = "Please type something.";
    }
}

// ➤ search-btn
search_btn.addEventListener('click', function(){
    handle_search();
    searchImage();
});
inputs[2].addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
        e.preventDefault();
        // above one is optional
        handle_search();
        searchImage();
    }

});

async function searchImage() {
    const accessKey = "xrmKAvQqWc-jfAoRUf2fP7GTAFqvO-C5yZFGEPUxC-A";
    const input = inputs[2].value.trim();

    const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(input)}&client_id=${accessKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.urls && data.urls.regular) {
          document.getElementById('imageResult').innerHTML = `
            <img src="${data.urls.regular}" alt="${input}" class="resultImage"/>
          `;
        } else {
          document.getElementById('imageResult').innerHTML = `<p>No image found.</p>`;
        }
      } catch (error) {
        console.error('Error:', error);
        document.getElementById('imageResult').innerHTML = `<p>Failed to fetch image.</p>`;
      }
    }
