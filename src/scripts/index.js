const titleBox = document.querySelector('.title');
const text = document.querySelector('.text');
const enterBtn = document.querySelector('.enterBtn');

titleBox.addEventListener("animationend", ()=>{
    titleBox.classList.add("permaLight");
});

text.addEventListener("animationend", ()=>{
    text.classList.add("glowerShower");
    titleBox.classList.add("moveUp");
    setTimeout(() => {
        enterBtn.classList.remove("hidden");
    }, 2000);
});