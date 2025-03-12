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

        

        document.addEventListener("DOMContentLoaded", function () {
            const chatToggle = document.getElementById("chat-toggle");
            const chatContainer = document.getElementById("chat-container");
            const chatInput = document.getElementById("chat-input");
            const chatMessages = document.getElementById("chat-messages");
            const sendBtn = document.getElementById("send-btn");
            const closeChat = document.getElementById("close-chat");
        
            // Your Gemini API Key (Replace with your actual API key)
            const API_KEY = "AIzaSyAdvODSEYjgrlIvfJ6yT-t-LyOJ6cmT928"; 
        
            // Chatbot Responses
            const responses = {
                "hello": "Hey! How can I help you?",
                "who are you": "I'm Shubham Ubale's AI assistant!",
                "portfolio": "Check out my portfolio built with Flask & FastAPI!",
                "fastapi": "FastAPI is a modern web framework for Python.",
                "flask": "Flask is a lightweight Python web framework.",
                "ai security": "I'm working on AI Security and Hiring AI projects.",
                "baaptube": "BaapTube is my YouTube video downloader project!",
                "about me": "I am Shubham Ubale, a Python developer. <a href='your-pdf-link.pdf' target='_blank'>Download My About Me PDF</a>",
                "resume": "Here’s my resume: <a href='your-resume-link.pdf' target='_blank'>Download Resume</a>"
            };
        
            // Function to Display Messages
            function appendMessage(user, message) {
                const msgDiv = document.createElement("div");
                msgDiv.classList.add(user === "You" ? "user-message" : "bot-message");
                msgDiv.innerHTML = `<strong>${user}:</strong> ${message}`;
                chatMessages.appendChild(msgDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;  // Auto-scroll
            }
        
            // Function to Fetch Response from Gemini API
            async function getGeminiResponse(message) {
                const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=${API_KEY}`;
                
                const requestBody = {
                    prompt: { text: message },
                    temperature: 0.7,
                    maxOutputTokens: 100
                };
        
                try {
                    const response = await fetch(endpoint, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(requestBody)
                    });
        
                    const data = await response.json();
                    return data.candidates?.[0]?.output || "Sorry, I couldn't understand that.";
                } catch (error) {
                    console.error("Error:", error);
                    return "Oops! Something went wrong while fetching response.";
                }
            }
        
            // Handle Sending Messages
            sendBtn.addEventListener("click", async () => {
                const userMessage = chatInput.value.trim().toLowerCase();
                if (!userMessage) return;
        
                appendMessage("You", userMessage);
                chatInput.value = "";
        
                let botReply = responses[userMessage];
        
                // If no predefined response, get reply from Gemini API
                if (!botReply) {
                    botReply = await getGeminiResponse(userMessage);
                }
        
                appendMessage("Bot", botReply);
            });
        
            // Toggle Chat Visibility
            chatToggle.addEventListener("click", () => {
                chatContainer.style.display = chatContainer.style.display === "block" ? "none" : "block";
            });
        
            // Close Chat
            closeChat.addEventListener("click", () => {
                chatContainer.style.display = "none";
            });
        });
        