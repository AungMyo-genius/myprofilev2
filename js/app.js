const darkorlight = document.querySelector(".lightordarks");
const body = document.body;
const brandImg = document.getElementById("brand-img");
const dorlicon = document.querySelector(".lightordarks .fas");
const isCheck = document.querySelector(".form-check-input")


darkorlight.addEventListener("click" , changemode);

window.addEventListener('load', () => {
    if(localStorage.getItem('status') == 'dark'){
        changemode()
        isCheck.checked = true;
    }else{
        isCheck.checked = false;
    }
})


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
        localStorage.setItem("status", "light")
        
    } else {
        
        document.querySelector(".navbar-dark").classList.replace("navbar-dark","navbar-light");
        body.classList.add("light");
        changeAll();
        brandImg.src = "img/branddark.png";
        localStorage.setItem("status", "dark")

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
// Start Type Effect
// set up text to print, each item in array is new line
let aText = new Array(
   ' I am Aung Myo, Frontend Developer.', 'I want to be a Full-stack Developer.'
    );
let iSpeed = 100; // time delay of print out
let iIndex = 0; // start printing array at this posision
let iArrLength = aText[0].length; // the length of the text array
let iScrollAt = 20; // start scrolling up at this many lines
     
let iTextPos = 0; // initialise text position
let sContents = ''; // initialise contents variable
let iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     let destination = document.querySelector(".profiletexts");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();
// End Type Effect


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
const skillbtns = document.querySelectorAll("#portfolio a");
const card_btns = document.querySelectorAll(".skillcards a");
const skillscores = document.querySelectorAll(".skillscores");

function removeactive() {
    skillscores.forEach( skill => skill.classList.remove("active"));
}

skillbtns.forEach( btn => {
    btn.addEventListener("click", ()=>{
        btn.children[2].classList.add("active");
        const point = btn.getAttribute("points");
        btn.children[2].style.height = `${point}%`;
        btn.children[2].innerHTML = `<span class="display-6">${point}%</span>`;
    })
    
    btn.addEventListener("mouseleave", removeactive);
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