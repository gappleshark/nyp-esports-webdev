const Full_Name = document.getElementById("Full_Name");
const Error_message_FullName = document.getElementById("Error_message FullName");
const Name_Match = /^[A-Za-z\s]+$/;//name format,only accept a-z and A-Z and space

const Email = document.getElementById("Email");
const Error_message_Email = document.getElementById("Error_message Email");
const Email_Match = /\S+@\S+\.\S+/;//email format 

const PhoneNumber = document.getElementById("PhoneNumber");
const Error_message_PhoneNumber = document.getElementById("Error_message PhoneNumber");
const Phone_Match = /^\d{8}$/;//must be number and 8 digits

//check the change of the input,instead of clicking the submit button to detect error, this programs will show error message and remove message immediately (it is something like live detection)
Full_Name.addEventListener("input", () => { //live detection
  if (Name_Match.test(Full_Name.value)) {   //check the userinput is in the correct format
    Error_message_FullName.style.display = "none";   //remove error message once user enters correct input format
  } else {
    Error_message_FullName.style.display = "block"; //display error message when user never follow the requirements
  }
});

Email.addEventListener("input", () => {
  if (Email_Match.test(Email.value)) {
    Error_message_Email.style.display = "none";
  } else {
    Error_message_Email.style.display = "block";
  }
});

PhoneNumber.addEventListener("input", () => {
  if (Phone_Match.test(PhoneNumber.value)) {
    Error_message_PhoneNumber.style.display = "none";
  } else {
    Error_message_PhoneNumber.style.display = "block";
  }
});

const academic_A = document.getElementById("Academic"); 
const Error_message_Academic = document.getElementById("Error_message Academic");
 academic_A.addEventListener("change",()=>{
  if(academic_A.value){  //if [academic] got something, ifelse statement will determine that it is true, if not, show false
    Error_message_Academic.style.display = 'none' ////if u alr selects the school, remove error message 
  }
});



function SubmitForm() {
  //============================Extract the error messages from html===========================================
  const Error_message_Academic = document.getElementById("Error_message Academic");
  const Error_message_Platform = document.getElementById("Error_message Platform");  
  const Error_message_Interest = document.getElementById("Error_message Interest");
  
  //=====================Receive and store user input into variables from the HTML============================ 
  const name = document.getElementById("Full_Name").value;
  const email = document.getElementById("Email").value;
  const phone = document.getElementById("PhoneNumber").value;
  const academic = document.getElementById("Academic").value; 

  const SUBMIT_BUTTON = document.getElementById("Submit_Button");
  SUBMIT_BUTTON.classList.add("loading");  //classlist adds another class without adding additional class in html
  SUBMIT_BUTTON.textContent = "Submitting..."; //change the textcontent from [Submit] to [Submitting...]

 //==========================Clear alls Error message=========================================================

  Error_message_Academic.style.display = "none"; 
  Error_message_FullName.style.display = "none"; 
  Error_message_Email.style.display = "none";       //click the submit button removes all the error messages
  Error_message_PhoneNumber.style.display = "none"; 
  Error_message_Platform.style.display = "none"; 

  //=========================Course Selector==================================================================
  let course;
  
   if (academic === 'SAS') {
    course = document.getElementById("Course_SAS_Selector").value;
  } else if (academic === 'SBM') {
    course = document.getElementById("Course_SBM_Selector").value;
  } else if (academic === 'SDM') {
    course = document.getElementById("Course_SDM_Selector").value; // .value = course1 to any number
  } else if (academic === 'SEG') {
    course = document.getElementById("Course_SEG_Selector").value; //if school equal to one of them, extract the coursename
  } else if (academic === 'SHSS') {
    course = document.getElementById("Course_SHSS_Selector").value;
  } else if (academic === 'SIT') {
    course = document.getElementById("Course_SIT_Selector").value;
  }
//================== USER INPUT ERROR DETECTION ================================================================

  if (!Name_Match.test(name)){
    Error_message_FullName.style.display = 'block'
    ResetButton()
    return;
  }
  if (!Email_Match.test(email)){
    Error_message_Email.style.display = 'block'
    ResetButton()
    return;
  }
  if (!Phone_Match.test(phone)){
    Error_message_PhoneNumber.style.display = 'block'
    ResetButton()
    return;
  }
  if (!course) {
    Error_message_Academic.style.display = 'block'
    ResetButton()
    return;
  }


//=================Checkbox Platform Selector======================================================================
const PlatformCheckboxes = document.querySelectorAll('input[name="Platform"]:checked'); //select all Userinput elements that using [name = platform]
const PlatformsList= [];

for (let i = 0; i < PlatformCheckboxes.length; i++) {
  PlatformsList.push(PlatformCheckboxes[i].value);  // store the selected checkbox value into array
}
if (PlatformsList.length == 0){
    Error_message_Platform.style.display = 'block'
    ResetButton()
    return;
}
//=================Option Interest Selector=======================================================================

const interest = document.querySelector('input[name="Interest"]:checked')?.value || ""; //[?.value] returns undefined instead of crashing system， if the value is undefined, set the variable to "" means empty

if (!interest){
    Error_message_Interest.style.display = 'block'
    ResetButton()
    return;
}


//================= News via Email Selector)==============================================================
const NewsCheck = document.querySelector('input[name="NewsCheck"]:checked')?.value || "No";



  //Store the data into localstorage
  localStorage.setItem("UserInput_Name", name);
  localStorage.setItem("UserInput_Email", email);
  localStorage.setItem("UserInput_PhoneNumber", phone);
  localStorage.setItem("UserInput_Academic", academic);
  localStorage.setItem("UserInput_Course", course);
  localStorage.setItem("UserInput_Platforms", PlatformsList.join(", "));
  localStorage.setItem("UserInput_Interest", interest);
  localStorage.setItem("UserInput_NewsCheck", NewsCheck);

  //SET TIMEOUT, after 2 sec go to submission page
  setTimeout(() => {
    SUBMIT_BUTTON.textContent = "Submit";
    window.location.href = "/HTML/submission.html"
  }, 2000);

  function ResetButton(){
    SUBMIT_BUTTON.classList.remove("loading");
    SUBMIT_BUTTON.textContent = "Submit";
  };
}