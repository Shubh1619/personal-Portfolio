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
                strings: ['a Web Developer', 'a Python Developer', 'a AI Developer'],
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

        // Chatbot
        const chatBtn = document.querySelector('.chat-btn');
const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.querySelector('.chat-widget-input');
const chatWidgetSubmit = document.querySelector('.chat-widget-submit');
const chatWidgetClose = document.querySelector('.chat-widget-close');
const chatWidgetMessages = document.querySelector('.chat-widget-messages');

// Toggle chat widget
chatBtn.addEventListener('click', function () {
    chatWidget.classList.toggle('open');
});

// Close chat widget
chatWidgetClose.addEventListener('click', function () {
    chatWidget.classList.remove('open');
});

// Send message
chatWidgetSubmit.addEventListener('click', function () {
    sendMessage();
});

// Send message on pressing Enter key
chatWidgetInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    // Rule-based responses
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        return "Hello! How can I help you today?";
    } else if (lowerCaseMessage.includes('how are you')) {
        return "I'm just a bot, but I'm functioning perfectly! How about you?";
    } else if (lowerCaseMessage.includes('projects')) {
        return "I can tell you about my projects. Which one are you interested in?";
    } else if (lowerCaseMessage.includes('skills')) {
        return "My skills include JavaScript, HTML, CSS, and more!";
    } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye')) {
        return "Goodbye! Have a great day!";
    } else {
        return "I'm sorry, I don't understand that. Can you rephrase?";
    }
}

function sendMessage() {
    let message = chatWidgetInput.value.trim();
    if (message) {
        const time = getCurrentTime();

        // Add user message with timestamp
        chatWidgetMessages.innerHTML += `
            <div class="chat-widget-message chat-widget-message-user">
                <div class="message-text">${message}</div>
                <div class="message-time">${time}</div>
            </div>
        `;

        // Clear input
        chatWidgetInput.value = '';

        // Simulate bot typing
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            const botTime = getCurrentTime();

            // Add bot response with timestamp
            chatWidgetMessages.innerHTML += `
                <div class="chat-widget-message chat-widget-message-bot">
                    <div class="message-text">${botResponse}</div>
                    <div class="message-time">${botTime}</div>
                </div>
            `;
            chatWidgetMessages.scrollTop = chatWidgetMessages.scrollHeight;
        }, 500); // Simulate a delay for bot response
    }
}