const darkorlight = document.querySelector(".lightordarks");
const body = document.body;
const brandImg = document.getElementById("brand-img");
const dorlicon = document.querySelector(".lightordarks .fas");


darkorlight.addEventListener("click" , changemode);

function changeAll(){
    changeText();
    changeBg();
    changeicon();
    changeindicator();
    changecardbtn();
}

function changemode(){
    
    if(body.classList.contains("light")){

        document.querySelector(".navbar-light").classList.replace("navbar-light","navbar-dark");
        body.classList.remove("light");
        changeAll();
        brandImg.src = "img/brandlight.png";

    } else {
        
        document.querySelector(".navbar-dark").classList.replace("navbar-dark","navbar-light");
        body.classList.add("light");
        changeAll();
        brandImg.src = "img/branddark.png";

    }
}

function changeText(){
    const darks = document.querySelectorAll(".text-dark");
    const lights = document.querySelectorAll(".text-light");
    lights.forEach( light => light.classList.replace("text-light", "text-dark"));
    darks.forEach( dark => dark.classList.replace("text-dark", "text-light"));
}

function changeBg(){
    const darks = document.querySelectorAll(".bg-dark");
    const lights = document.querySelectorAll(".bg-light");
    lights.forEach( light => light.classList.replace("bg-light", "bg-dark"));
    darks.forEach( dark => dark.classList.replace("bg-dark", "bg-light"));
    
}

const changeicon = ()=>{
    if(dorlicon.classList.contains("fa-sun")) 
    {
        dorlicon.classList.replace("fa-sun","fa-moon");
    } else{
        dorlicon.classList.replace("fa-moon","fa-sun");
    }
}


window.addEventListener("scroll", ()=>{
    if(window.scrollY > 200) {
        document.querySelector(".navbar").classList.add("smalls");
    } else {
        document.querySelector(".navbar").classList.remove("smalls");
    }
})
// Start About section
const nowyear = new Date().getFullYear();
const indicators = document.querySelector(".carousel-indicators");
const indi_btns = document.querySelectorAll(".indicatorbtns .btn-secondary");

document.getElementById("age").innerText = `${nowyear - 1995}`;


function changeindicator(){
    if(!(indicators.classList.contains("darks"))){
        indicators.classList.add("darks");
    } else{
        indicators.classList.remove("darks");
    }
}
// End About section

// Start Portfolio Section
const progressText = document.querySelector(".skill-progress .d-block");
const progress = document.querySelector(".skill-progress .d-none");
const skillbtns = document.querySelectorAll("#portfolio a");
const progress_bar = document.querySelector(".progress-bar");
const card_btns = document.querySelectorAll(".skillcards a");


skillbtns.forEach( btn => {
    btn.addEventListener("click", ()=>{
        progressText.classList.replace("d-block", "d-none");
        progress.classList.replace("d-none", "d-block");
        const skill = btn.getAttribute("points");
        const colors = btn.lastElementChild.style.color;
        progress_bar.style.backgroundColor = colors;
        progress_bar.style.width = `${skill}%`;
        progress_bar.innerText = `${skill}%`;
    })
})

function changecardbtn() {
    card_btns.forEach( btn => 
        btn.classList.contains("btn-outline-light")?btn.classList.replace("btn-outline-light","btn-outline-dark") : btn.classList.replace("btn-outline-dark","btn-outline-light")
        // if(btn.classList.contains("btn-outline-light")) 
        // {
        //     btn.classList.replace("btn-outline-light","btn-outline-dark");
        // } else{
        //     btn.classList.replace("btn-outline-dark","btn-outline-light");
        // }
)
}


// End Portfolio Section