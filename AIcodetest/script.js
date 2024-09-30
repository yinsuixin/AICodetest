document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = userInput.value.trim();
        if (message) {
            addMessage('用户', message);
            // 这里应该调用AI API来获取回复
            // 为了演示,我们使用一个模拟的AI回复
            setTimeout(() => {
                addMessage('AI', '这是一个模拟的AI回复。在实际应用中,这里应该是通过API获取的真实AI回复。');
            }, 1000);
            userInput.value = '';
        }
    });

    function addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});