        // Loading Screen
        $(window).on('load', function() {
            let counter = 0;
            let interval = setInterval(function() {
                counter += Math.floor(Math.random() * 5) + 1;
                if (counter >= 100) {
                    counter = 100;
                    clearInterval(interval);
                    setTimeout(function() {
                        $('.loading-screen').fadeOut(500);
                    }, 500);
                }
                $('.counter').text(counter + '%');
            }, 50);
        });
        
        $(document).ready(function() {
            // Typed.js
            let typed = new Typed('.typing', {
                strings: ['a Web Developer', 'a Designer', 'a Creator'],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });

            // Particles.js
            particlesJS.load('particles-js', 'particles.json', function() {
                console.log('Particles.js loaded!');
            });

            // Scroll animations
            $(window).scroll(function() {
                $('.slide-up, .slide-in-left, .slide-in-right').each(function() {
                    let position = $(this).offset().top;
                    let scrollPosition = $(window).scrollTop() + $(window).height() * 0.8;
                    if (scrollPosition > position) {
                        $(this).addClass('visible');
                    }
                });

                // Back to top button
                if ($(window).scrollTop() > 300) {
                    $('.back-to-top').addClass('show');
                } else {
                    $('.back-to-top').removeClass('show');
                }
            });

            // Back to top button click
            $('.back-to-top').click(function() {
                $('html, body').animate({ scrollTop: 0 }, 800);
                return false;
            });

            // Cursor animation
            let cursor = document.querySelector('.cursor');
            let cursorFollower = document.querySelector('.cursor-follower');

            document.addEventListener('mousemove', function(e) {
                cursor.style.left = e.pageX + 'px';
                cursor.style.top = e.pageY + 'px';
                cursorFollower.style.left = e.pageX + 'px';
                cursorFollower.style.top = e.pageY + 'px';
            });

            document.addEventListener('mouseenter', function() {
                cursor.style.opacity = 1;
                cursorFollower.style.opacity = 1;
            });

            document.addEventListener('mouseleave', function() {
                cursor.style.opacity = 0;
                cursorFollower.style.opacity = 0;
            });

            // Form submission
            $('#contactForm').on('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                $('#contactForm')[0].reset();
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
            const toggleBtn = document.getElementById("theme-toggle");
            const body = document.body;
        
            // Check Local Storage for Theme Preference
            if (localStorage.getItem("theme") === "light") {
                body.classList.add("light-mode");
            }
        
            toggleBtn.addEventListener("click", function () {
                body.classList.toggle("light-mode");
        
                // Save theme preference
                if (body.classList.contains("light-mode")) {
                    localStorage.setItem("theme", "light");
                } else {
                    localStorage.setItem("theme", "dark");
                }
            });
        });

      
const chatToggle = document.getElementById("chat-toggle");
const chatContainer = document.getElementById("chat-container");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");
const sendBtn = document.getElementById("send-btn");

const responses = {
    "hello": "Hey! How can I help you?",
    "who are you": "I'm Shubham Ubale's AI chat assistant!",
    "portfolio": "Check out my portfolio website with Flask and FastAPI!",
    "fastapi": "FastAPI is a modern web framework for building APIs with Python.",
    "flask": "Flask is a lightweight web framework in Python.",
    "ai security": "I'm working on AI Security and Hiring AI projects.",
    "baaptube": "BaapTube is my YouTube video downloader project!",
    "default": "I'm still learning! Ask me about FastAPI, Flask, or my projects.",
    "about me": "I am Shubham Ubale, a passionate Python developer working on AI security and FastAPI. You can learn more about me here: <a href='your-pdf-link.pdf' target='_blank'>Download My About Me PDF</a>",
    "portfolio": "Check out my portfolio website: <a href='https://yourportfolio.com' target='_blank'>Visit Here</a>",
    "resume": "Here’s my resume: <a href='your-resume-link.pdf' target='_blank'>Download Resume</a>",
    "default": "I'm here to help! Ask me anything about FastAPI, Flask, AI Security, or my projects."
};



function appendMessage(user, message) {
    const msgDiv = document.createElement("div");
    msgDiv.innerHTML = `<strong>${user}:</strong> ${message}`;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendBtn.addEventListener("click", () => {
    const userMessage = chatInput.value.toLowerCase();
    if (!userMessage) return;
    appendMessage("You", userMessage);
    chatInput.value = "";
    setTimeout(() => {
        const botReply = responses[userMessage] || responses["default"];
        appendMessage("Bot", botReply);
    }, 500);
});

chatToggle.addEventListener("click", () => {
    chatContainer.style.display = chatContainer.style.display === "block" ? "none" : "block";
});
        