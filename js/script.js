var eyeBall = document.querySelector('#pupil_left');
var eyeBall2 = document.querySelector('#pupil_right');
//document query selector return the first Element within the document by using DFS pre-order traversal of DOM tree
//DOM tree: Document Object Node, tree representation of the web page that gets loaded into the browser. 
//Represents the web page as a series of object, with each object housing their own object


document.onmousemove = (event) => {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    

    // LEFT EYEBALL
    eyeBall.style.left = x;
    eyeBall.style.top = y;
    eyeBall.style.transition = "0s";


    // RIGHT EYEBALL
    eyeBall2.style.left = x;
    eyeBall2.style.top = y;
    eyeBall2.style.transition = "0s";
    eyeBall2.style.left = x;
    //commit
}

document.onmouseout = (event) => {
    eyeBall.style.left = "50%";
    eyeBall.style.top = "50%";
    eyeBall.style.transition = "0.7s";

    eyeBall2.style.left = "50%";
    eyeBall2.style.top = "50%";
    eyeBall2.style.transition = "0.7s";
}

