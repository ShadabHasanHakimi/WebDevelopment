let center = document.querySelector("#center");
center.addEventListener("mousemove", (e)=>{
    let rectLoction = center.getBoundingClientRect();
    // e.clientX: shows the position of the mouse relative to the page
    // rectLocation.left: shows the leftmost position of the rectangle
    let insideRectVal = e.clientX - rectLoction.left;
    if(insideRectVal < rectLoction.width/2){
        let red = gsap.utils.mapRange(0,rectLoction.width/2, 255, 0, insideRectVal);
        gsap.to(center, {
            backgroundColor: `rgb(${red},0,0)`,
            ease: Power4,
        });
    }
    else{
        let green = gsap.utils.mapRange(rectLoction.width/2, rectLoction.width, 0, 255, insideRectVal);
        gsap.to(center, {
            backgroundColor: `rgb(0, ${green}, 0)`,
            ease: Power4,
        });
    }
});