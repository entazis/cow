const fortunes = [
    "The grass is always greener... but you're already in a great pasture!",
    "Moo-ve forward with confidence today.",
    "You are udderly amazing!",
    "Don't have a cow, man. Everything will work out.",
    "The steaks have never been higher for your success!",
    "You're not just any cow in the herd - you're legendary.",
    "Take life one pasture at a time.",
    "Today's forecast: 100% chance of being awesome.",
    "Holy cow! Good things are coming your way.",
    "Remember: even the finest cheese was once just milk.",
    "You're moo-ving in the right direction!",
    "Don't let anyone milk your happiness.",
    "Be outstanding in your field. Literally.",
    "The universe is conspiring in your favor. No bull.",
    "You've got the mooves to succeed!",
    "Life is better when you're not following the herd.",
    "Believe in yourself - you're no ordinary heifer!",
    "Your potential is un-bull-ievable!",
    "Today is a good day to be utterly yourself.",
    "Karma will catch up... unless you're faster!",
    "A wise cow once said: 'Just moo it.'",
    "You're the cream that rises to the top!",
    "Don't cry over spilled milk. Get a new glass!",
    "Your future is looking dairy good!",
    "Keep calm and say moo.",
    "Success is just around the barn!",
    "You have moo-nificent potential!",
    "The path to success is paved with good in-tent-ions.",
    "You're one in a cow-llion!",
    "Happiness is a warm sunny pasture."
];

const cowMoods = [
    // Happy cow
    `        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,
    
    // Winking cow
    `        \\   ^__^
         \\  (o-)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,
    
    // Excited cow
    `        \\   ^__^
         \\  (OO)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,
    
    // Sleepy cow
    `        \\   ^__^
         \\  (==)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,
    
    // Surprised cow
    `        \\   ^__^
         \\  (@@)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`
];

let mooCount = parseInt(localStorage.getItem('mooCount') || '0');

const cowContainer = document.getElementById('cowContainer');
const mooButton = document.getElementById('mooButton');
const fortuneEl = document.getElementById('fortune');
const cowEl = document.getElementById('cow');
const mooCountEl = document.getElementById('mooCount');

// Initialize count display
mooCountEl.textContent = mooCount;

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateMoo() {
    // Update fortune
    fortuneEl.textContent = getRandomItem(fortunes);
    
    // Update cow mood
    cowEl.textContent = getRandomItem(cowMoods);
    
    // Animate cow
    cowEl.classList.remove('moo');
    void cowEl.offsetWidth; // Trigger reflow
    cowEl.classList.add('moo');
    
    // Update counter
    mooCount++;
    mooCountEl.textContent = mooCount;
    localStorage.setItem('mooCount', mooCount.toString());
    
    // Play a subtle "moo" (optional visual feedback)
    cowContainer.style.background = '#fffef0';
    setTimeout(() => {
        cowContainer.style.background = '#fff';
    }, 100);
    
    // Track the moo
    if (window.trackEvent) trackEvent('moo');
}

// Event listeners
cowContainer.addEventListener('click', generateMoo);
mooButton.addEventListener('click', generateMoo);

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        generateMoo();
    }
});

// Easter egg: Konami code for super moo
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        fortuneEl.textContent = "🌟 SUPER MOO! You found the secret! You are truly legendary! 🌟";
        document.body.style.background = 'linear-gradient(135deg, #ff9a56 0%, #ff6b35 100%)';
        setTimeout(() => {
            document.body.style.background = 'linear-gradient(135deg, #a8e063 0%, #56ab2f 100%)';
        }, 3000);
    }
});
