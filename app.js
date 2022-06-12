const firebaseConfig = {
    apiKey: "AIzaSyDk273lPBWt6ejpTT5wjsR0NpHrH3JdmH0",
    authDomain: "contact-form-7ad80.firebaseapp.com",
    databaseURL: "https://contact-form-7ad80-default-rtdb.firebaseio.com",
    projectId: "contact-form-7ad80",
    storageBucket: "contact-form-7ad80.appspot.com",
    messagingSenderId: "122230002002",
    appId: "1:122230002002:web:8500a9ee74483e3480ea8b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Referencing Database
let contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    let name = getElementVal('name');
    let email = getElementVal('email');
    let message = getElementVal('message');
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};