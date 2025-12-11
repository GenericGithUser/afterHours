const media = window.matchMedia("(max-width: 600px)");
const menuBtn = document.querySelector(".menu");
const otherBlog = document.querySelector(".otherBlogs");

function handleChange(a){
    if (a.matches) {
        otherBlog.classList.add("hidder");
    } else {
        otherBlog.classList.remove("hidder");
    }
}

media.addEventListener("change", handleChange);

handleChange(media);

let click = false;

menuBtn.addEventListener("click", ()=>{
    
    if (click != true) {
        menuBtn.classList.add("rotate");
        click = true;
        otherBlog.classList.remove("hidder");
    }
    else{
        menuBtn.classList.remove("rotate");
        click = false;
        otherBlog.classList.add("hidder");
    }

});
