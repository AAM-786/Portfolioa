// Load education data dynamically
document.addEventListener('DOMContentLoaded', () => {
    const educationTable = document.getElementById('education-table');

    if (educationTable) {
        fetch('/Navbar/education.json')
            .then(response => response.json())
            .then(data => {
                const tableBody = educationTable.querySelector('tbody');
                data.forEach(entry => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${entry.degree}</td>
                        <td>${entry.institution}</td>
                        <td>${entry.year}</td>
                        <td>${entry.s} </td>
                        <td>${entry.percentage} </td>
                        
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error loading education data:', error));
    }
});

// Handle contact form submission
document.getElementById('contact-form')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
     
    };

    // Simulate sending data (e.g., to a server)
    console.log('Form submitted with data:', data);

    // Show feedback to the user
    const feedback = document.getElementById('form-feedback');
    feedback.innerHTML = '<p>Thank you for your message! We will get back to you soon.</p>';
    feedback.style.color = 'Black,white,green';
});





// Adding Greetings 


// Load education data dynamically
document.addEventListener('DOMContentLoaded', () => {
    // Toggle Dark/Light Mode
    const toggleButton = document.getElementById('toggle-mode');
    const savedMode = localStorage.getItem('mode') || 'dark';
    
    document.body.classList.toggle('light-mode', savedMode === 'light');

    toggleButton.addEventListener('click', () => {
        const isLightMode = document.body.classList.toggle('light-mode');
        localStorage.setItem('mode', isLightMode ? 'light' : 'dark');
    });

    // Dynamic Date and Greeting


// Dynamic Date and Greeting
const greetingMessage = document.getElementById('greeting-message');

function updateGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting = '<b>Good Evening !!</b>';
    if (hours < 12) {
        greeting = 'Good Morning !!';
    } else if (hours < 18) {
        greeting = '<b>Good Afternoon !!</b>';
    }

    const formattedDate = now.toLocaleDateString('en-IN', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        
        
    });

    greetingMessage.innerHTML = `<strong>${greeting}</strong><br>${formattedDate}<br><b>Have a great day ahead!<b>`;
}

// Initial greeting message update
updateGreeting();

// Update every second
setInterval(updateGreeting, 1000);


//change colors Dynamically 


const mixtures = [
  /*
  'rgba(255, 255, 255, 1),  rgba(220, 220, 220, 1)',
  'rgba(210, 210, 210, 1),rgba(192, 192, 192, 1)',
  'rgba(173, 173, 173, 1), rgba(147, 147, 147, 1)',
  'rgba(117, 117, 117, 1),rgba(92, 92, 92, 1)',
  'rgba(74, 74, 74, 1),rgba(55, 55, 55, 1)',
  'rgba(44, 44, 44, 1),rgba(0, 0, 1, 1)','rgba(0, 0, 0, 1)'

  */
  
  
  
    'rgba(57, 255, 20, 0.5), rgba(27, 3, 163, 0.5)', // Neon Green and Blue
    'rgba(255, 110, 199, 0.5), rgba(177, 43, 145, 0.5)', // Neon Pink and Purple
    'rgba(232, 255, 43, 0.5), rgba(255, 94, 0, 0.5)', // Neon Yellow and Orange
    'rgba(65, 105, 225, 0.5), rgba(80, 200, 120, 0.5)', // Royal Blue and Emerald Green
    'rgba(220, 20, 60, 0.5), rgba(255, 215, 0, 0.5)', // Crimson and Gold
    'rgba(0, 255, 255, 0.5), rgba(50, 255, 126, 0.5)' // Neon Cyan and Lime /
     //---------------------------//
     
     
];


let currentMixIndex = 0;

function changeColor() {
    document.body.style.background = `linear-gradient(${mixtures[currentMixIndex]})`;
    currentMixIndex = (currentMixIndex + 1) % mixtures.length;
}

setInterval(changeColor, 1000);
changeColor(); // Initial color change


});
/*

let currentMix = 0;

function changeColorP() {
    document.body.style.background.hero= `linear-gradient(${mixtures[currentMix]})`;
    currentMix = (currentMix + 1) % mixtures.length;
}

setInterval(changeColorP, 1000);
changeColorP(); // Initial color change

*/


const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const contents = document.querySelectorAll('.content');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Handle navigation link clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        
        // Hide all content sections
        contents.forEach(content => content.classList.remove('active'));
        
        // Show the targeted content section
        document.getElementById(targetId).classList.add('active');

        // Close mobile menu if in mobile view
        if (window.innerWidth <= 6) {
            navLinks.classList.remove('active');
        }
    });
    
    
});    
    

    
    
