// Configuring Firebase
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

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit the form
function submitForm(e) {
    e.preventDefault();

    let name = getElementVal('name');
    let email = getElementVal('email');
    let message = getElementVal('message');

    saveMessages(name, email, message);

    // Enable Alert
    document.getElementById('alert').style.display = 'block';

    // Remove Alert
    setTimeout(() => {
        document.getElementById('alert').style.display = 'none';
    }, 3000);

    // Reset the form
    document.getElementById('contactForm').reset();
}

// Saving the messages
const saveMessages = (name, email, message) => {
    let newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        email: email,
        message: message
    })
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};