// Get user data from localStorage
const userName = localStorage.getItem("UserInput_Name");
const userEmail = localStorage.getItem("UserInput_Email");
const userPhone = localStorage.getItem("UserInput_PhoneNumber");
const userAcademic = localStorage.getItem("UserInput_Academic");
const userCourse = localStorage.getItem("UserInput_Course");
const userPlatform = localStorage.getItem("UserInput_Platforms");
const userInterest = localStorage.getItem("UserInput_Interest");
const userNewsCheck = localStorage.getItem("UserInput_NewsCheck");

// Map short-form names of schools to full school names
const Academic_Selector = {
    'SBM': 'School of Business Management',
    'SAS': 'School of Applied Science',
    'SDM': 'School of Design & Media',
    'SEG': 'School of Engineering',
    'SHSS': 'School of Health & Social Sciences',
    'SIT': 'School of Information Technology'
}

// Map each school to their courses
const Course_Selector = {
    SBM: {
        'Course1': 'Diploma in Business Management (C94)',
        'Course2': 'Diploma in Banking & Finance (C96)',
        'Course3': 'Diploma in Accountancy & Finance (C98)',
        'Course4': 'Diploma in Food & Beverage Business (C46)',
        'Course5': 'Diploma in Hospitality & Tourism Management (C67)',
        'Course6': 'Diploma in Media & Communication Management (C93)',
        'Course7': 'Diploma in Sport & Wellness Management (C81)',
        'Course8': 'Common Business & Technology Programme (C24)',
        'Course9': 'Common Business Programme (C34)',
    },
    SAS: {
        'Course1': 'Common Science Programme (C27)',
        'Course2': 'Diploma in Biomedical Science with Analytics (C25)',
        'Course3': 'Diploma in Applied Chemistry (C45)',
        'Course4': 'Diploma in Biologics & Process Technology (C49)',
        'Course5': 'Diploma in Food Science & Nutrition (C69)',
        'Course6': 'Diploma in Pharmaceutical Science (C65)',
        'Course7': 'Diploma in Chemical & Pharmaceutical Technology (C73)',
    },
    SDM: {
        'Course1': 'Diploma in Animation, Games & Visual Effects (C29)',
        'Course2': 'Diploma in Architecture (C38)',
        'Course3': 'Diploma in Communication & Motion Design (C30)',
        'Course4': 'Diploma in Experiential Product & Interior Design (C32)',
        'Course5': 'Diploma in Game Development & Technology (C70)',
        'Course6': 'Common Design & Media Programme (C28)',
    },
    SEG: {
        'Course1': 'Common Engineering Programme (C42)',
        'Course2': 'Diploma in Advanced & Digital Manufacturing (C62)',
        'Course3': 'Diploma in Aerospace Engineering (C26)',
        'Course4': 'Diploma in AI & Data Engineering (C31)',
        'Course5': 'Diploma in Biomedical Engineering (C71)',
        'Course6': 'Diploma in Cloud Engineering (C75)',
        'Course7': 'Diploma in Electronic & Computer Engineering (C89)',
        'Course8': 'Diploma in Robotics & Mechatronics (C87)',
        'Course9': 'Diploma in Sustainability in Engineering with Business (C41)',
    },
    SHSS: {
        'Course1': 'Diploma in Nursing (C97)',
        'Course2': 'Diploma in Social Work (C47)',
        'Course3': 'Diploma in Psychology & Community Care (C52)',
    },
    SIT: {
        'Course1': 'Diploma in Applied AI & Analytics (C43)',
        'Course2': 'Diploma in Business & Financial Technology (C35)',
        'Course3': 'Common Business & Technology Programme (C24)',
        'Course4': 'Common ICT Programme (C36)',
        'Course5': 'Diploma in Cybersecurity & Digital Forensics (C54)',
        'Course6': 'Diploma in Information Technology (C85)',
    }
};

// Get the full school name 
let AcademicNAME = Academic_Selector[userAcademic];

// Get the full course name 
let CourseNAME = Course_Selector[userAcademic][userCourse];

// Display the retrieved data in the respective HTML elements
document.getElementById("userNameResponse").textContent = userName;
document.getElementById("userEmailResponse").textContent = userEmail;
document.getElementById("userPhoneResponse").textContent = userPhone;
document.getElementById("userAcademicResponse").textContent = AcademicNAME;
document.getElementById("userCourseResponse").textContent = CourseNAME;
document.getElementById("userPlatformResponse").textContent = userPlatform;
document.getElementById("userInterestResponse").textContent = userInterest;
document.getElementById("userNewsCheckResponse").textContent = userNewsCheck;
