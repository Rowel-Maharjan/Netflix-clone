document.addEventListener("DOMContentLoaded", function () {
    // Hide all showfull elements initially
    let showfulls = document.querySelectorAll('.showfull');
    showfulls.forEach(showfull => {
        showfull.style.display = "none";
    });
});

function toggleHide(clickedElement) {
    let showfulls = document.querySelectorAll('.showfull');
    
    showfulls.forEach(showfull => {
        if (showfull !== clickedElement.nextElementSibling) {
            showfull.style.display = "none";
        }
    });

    let showfull = clickedElement.nextElementSibling;

    if (showfull.style.display !== "none") {
        showfull.style.display = "none";
    } else {
        showfull.style.display = "block";
    }

    // Change the image source based on the display status
    let icon = clickedElement.querySelector('.icon img');
    if (showfull.style.display === "none") {
        icon.src = "\\assets\\images\\addition.svg";
    } else {
        icon.src = "\\assets\\images\\multiply.svg"; 
    }
}
