const messages = [
    'Oscar',
    'Ana',
    'Nikolai',
    'Laura',
    'Juan',
    'Jesus'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };