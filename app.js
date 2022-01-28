const navSlide=()=>{
    const navbar=document.querySelector(".navbar")
    const burger=document.querySelector(".burger")
    const nav=document.querySelector(".right")
    
    

    burger.addEventListener("click",()=>{
        // console.log("hel")
        nav.classList.toggle('nav-active');
    
    
        
       burger.classList.toggle("toggle")
    //    
    
    });
   
    
  
        
    
}
navSlide();
const sct=()=>{
    const scrollTotop=document.querySelector(".scrolltotop");
        scrollTotop.addEventListener("click",()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    })

    window.addEventListener("scroll",()=>{
        window.pageYOffset>100   
        ? (scrollTotop.style.display="flex")
        : (scrollTotop.style.display="none");
    })
}

sct();



