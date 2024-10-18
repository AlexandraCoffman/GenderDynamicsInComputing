document.addEventListener('DOMContentLoaded', function() {
    const conversation = document.getElementById('conversation');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-btn');
    const rudeWords = ["stupid", "idiot", "shut up", "dumb", "annoying", "hate", "ugly"];
    let conversationEnded = false;
    const appendMessage = (message, fromBot = true) => {
        const p = document.createElement('p');
        p.textContent = message;
        if (fromBot) {
            p.style.color = "blue"; 
        } else {
            p.style.color = "pink"; 
        }
        conversation.appendChild(p);
        conversation.scrollTop = conversation.scrollHeight; 
    };
    const checkForRudeness = (message) => {
        for (let word of rudeWords) {
            if (message.toLowerCase().includes(word)) {
                return true;
            }
        }
        return false;
    };
    const handleResponse = (userMessage) => {
        if (conversationEnded) {
            appendMessage("Sorry, the conversation has ended.", true);
            return;
        }

        if (checkForRudeness(userMessage)) {
            appendMessage("That was rude. Goodbye.", true);
            conversationEnded = true; 
            return;
        }
        if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
            appendMessage("Hello! How can I help you today?", true);
        } else if (userMessage.toLowerCase().includes("how are you")) {
            appendMessage("I'm just a bot, but I'm here to help!", true);
        } else {
            appendMessage("Interesting. Can you tell me more?", true);
        }
    };

    sendButton.addEventListener('click', () => {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;
        appendMessage(userMessage, false);
        userInput.value = "";
        handleResponse(userMessage);
    });
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});