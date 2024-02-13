let all_imgs = document.querySelectorAll(".top_frame img");
let all_bgs = ["images/bg1.jpeg", "images/bg2.jpeg", "images/bg3.jpeg", "images/bg4.jpeg", "images/bg5.jpeg"]

let idx = 0;
function appearIT(){
    if (idx != 0){
        all_imgs[idx-1].style.display = "none";
    }
    if (idx == all_imgs.length){
        document.querySelector(".top_frame").style.display = "none";
        document.querySelector(".bg_image").style.animation = ``;
        document.querySelector(".message").style.display = "block";
        return;
    }

    all_imgs[idx].style.display = "block";
    document.querySelector(".bg_image").style.animation = `bg_changer 10s infinite`;
    idx += 1;
    setTimeout(appearIT, 4000);
}

function onclick_start(){
    document.querySelector(".homescreen").style.display = "none";
    document.querySelector(".top_frame").style.display = "flex";
    appearIT();
}
document.querySelector(".start").onclick = onclick_start;