
const buttons = document.querySelectorAll(".btn");
const value = document.getElementById("value");
let count = 0;

buttons.forEach((item) => {
    item.addEventListener("click", (e) => {
        const tags = e.currentTarget.classList;
        if(tags.contains("increase")){
            count = count + 1;
        } else if(tags.contains("decrease")) {
            if(count > 0) {
                count = count - 1;
            }
        } else {
            count = 0;
        }
        value.textContent = count;
    });
});




