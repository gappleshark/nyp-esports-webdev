// Get the academic dropdown element
const Academic = document.getElementById("Academic");

// Get all elements with the class 'Course_Selector'
const Course = document.querySelectorAll(".Course_Selector");

// Get specific course sections by their IDs
const Course_SBM = document.querySelector("#Course_SBM");
const Course_SAS = document.querySelector("#Course_SAS");
const Course_SDM = document.querySelector("#Course_SDM");
const Course_SOE = document.querySelector("#Course_SEG");
const Course_HSS = document.querySelector("#Course_SHSS");
const Course_SIT = document.querySelector("#Course_SIT");

// Function to hide all course sections
function Hide_AllCourse() {
    for (let i = 0; i < Course.length; i++) {
        Course[i].style.display = "none";
    }
}

// When the selected academic school changes
Academic.addEventListener("change", function () {

    // First, hide all course sections
    Hide_AllCourse(); 

    // Show the course section based on the selected academic school
    if (Academic.value === "SBM") {
        Course_SBM.style.display = "block"; 
    }
    else if (Academic.value === "SAS") {
        Course_SAS.style.display = "block"; 
    }
    else if (Academic.value === "SDM") {
        Course_SDM.style.display = "block"; 
    }
    else if (Academic.value === "SEG") {
        Course_SOE.style.display = "block"; 
    }
    else if (Academic.value === "SHSS") {
        Course_HSS.style.display = "block"; 
    }
    else if (Academic.value === "SIT") {
        Course_SIT.style.display = "block"; 
    }

});
