var eyeBall = document.querySelector(".pupil");


document.onmousemove = (event) => {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    

    console.log(eyeBall == null);
    console.log(eyeBall);
}

document.onmouseout = (event) => {
    eyeBall.transition = "0.7s";
    eyeBall.left = "50%";
    eyeBall.top = "50%";
}

