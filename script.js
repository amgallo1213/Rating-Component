const numberCircle = document.querySelector(".number");

function turnOrange(element) {
    numberCircle.style.backgroundColor = "orange";
    numberCircle.style.borderRadius = "50%";
    numberCircle.style.color = "white";
    numberCircle.style.borderColor = "orange";
}

function submitRating() {
    window.location.href="submitted.html";
}