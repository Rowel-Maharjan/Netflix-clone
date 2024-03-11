// function toggleHide(clickedElement) {
//     let showfulls = document.querySelectorAll('.showfull');
    
//     showfulls.forEach(showfull => {
//         if (showfull !== clickedElement.nextElementSibling) {
//             showfull.style.display = "none";
//         }
//     });

//     let showfull = clickedElement.nextElementSibling;

//     if (showfull.style.display !== "none") {
//         showfull.style.display = "none";
//     } else {
//         showfull.style.display = "block";
//     }
//     let icon = clickedElement.querySelector('.icon img');
//     if (showfull.style.display === "none") {
//         icon.src = "\\assets\\images\\addition.svg";
//     } else {
//         icon.src = "\\assets\\images\\multiply.svg"; 
//     }
// }

function toggleHide(clickedElement) {
    let showfulls = document.querySelectorAll('.showfull');

    showfulls.forEach(showfull => {
        if (showfull !== clickedElement.nextElementSibling) {
            showfull.classList.remove('active');
        }
    });
    let showfull = clickedElement.nextElementSibling;
    showfull.classList.toggle('active');
    
    let icon = clickedElement.querySelector('.icon img');
    if (showfull.classList.contains('active')) {
        icon.src = "\\assets\\images\\multiply.svg"; 
    } else {
        icon.src = "\\assets\\images\\addition.svg";
    }
}

