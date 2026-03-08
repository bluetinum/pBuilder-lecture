
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersContainer = document.getElementById('lotto-numbers');

    generateBtn.addEventListener('click', () => {
        // Clear previous numbers
        lottoNumbersContainer.innerHTML = '';

        // Generate 6 unique numbers
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        // Sort and display the numbers
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, index) => {
            setTimeout(() => {
                const ball = document.createElement('div');
                ball.classList.add('lotto-ball');
                ball.textContent = number;
                lottoNumbersContainer.appendChild(ball);
            }, index * 300); // Stagger the animation
        });
    });
});
