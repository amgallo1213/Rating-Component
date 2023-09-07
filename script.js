const numberCircle = document.querySelector(".number");


function turnOrange(numberCircle) {
    numberCircle.style.backgroundColor = "orange";
    numberCircle.style.borderRadius = "50%";
    numberCircle.style.color = "white";
    numberCircle.style.borderColor = "orange";
}





function submitRating(element) {
    window.location.href = "submitted.html";
}

