

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/QQ.jpg") {
        myImage.setAttribute("src","images/Wechat.jpg");
    } else {
        myImage.setAttribute("src", "images/QQ.jpg");
    }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name");
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hello Big ${myName}`;
    }

}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello Big, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}