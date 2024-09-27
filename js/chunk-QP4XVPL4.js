const newSalt = 'SNryzWpD9as38HF2';
const hashedPassword = '4cf404cf09d824f20ee80702559897782ade6ef45583ab828089136e48fdfe82'; 

let password = '';
let attemptCount = 0;
const maxAttempts = 5;
let lastAttemptTime = 0;
let redirectUrl = '';

// Función para generar un hash SHA-256
async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function fetchRedirectUrl() {
    try {
        const response = await fetch('/js/hydration-entrypoints/components/text.js/acceso/link.txt');
        if (!response.ok) throw new Error('Network response was not ok');
        redirectUrl = await response.text();
    } catch (error) {
        console.error('Error fetching redirect URL:', error);
    }
}

function addDigit(digit) {
    resetAccessMessage();
    
    if (password.length < 26) {
        password += digit;
        updatePasswordDisplay();
    }
}

function clearPassword() {
    password = '';
    updatePasswordDisplay();
}

function updatePasswordDisplay() {
    document.getElementById('password').textContent = '•'.repeat(password.length);
}

async function checkPassword() {
    const currentTime = new Date().getTime();
    const accessMessage = document.getElementById('access-message');

    if (currentTime - lastAttemptTime < 2000) {
        accessMessage.textContent = 'Por favor, espera un momento antes de intentar de nuevo.';
        accessMessage.style.color = '#f44336';
        return;
    }

    lastAttemptTime = currentTime;

    const hashedInput = await sha256(password + newSalt);

    console.log(`Hash calculado: ${hashedInput}`); 

    if (hashedInput === hashedPassword) {
        if (redirectUrl) {
            sessionStorage.setItem('access_granted', 'true');
            window.location.href = redirectUrl.trim(); 
        } else {
            console.error('Redirect URL not set');
        }
    } else {
        attemptCount++;
        if (attemptCount >= maxAttempts) {
            accessMessage.textContent = 'Demasiados intentos fallidos. Vuelva a intentarlo en 30 segundos.';
            accessMessage.style.color = '#f44336';
            disableKeypad();
            setTimeout(() => {
                enableKeypad();
                resetAccessMessage();
            }, 30000);
        } else {
            accessMessage.textContent = `Código de acceso incorrecto. Intento ${attemptCount} de ${maxAttempts}.`;
            accessMessage.style.color = '#f44336';
        }
        clearPassword();
    }
}

function resetAccessMessage() {
    const accessMessage = document.getElementById('access-message');
    accessMessage.textContent = 'Ingrese el código de acceso';
    accessMessage.style.color = '';
}

function disableKeypad() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.disabled = true);
}

function enableKeypad() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.disabled = false);
    attemptCount = 0;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateKeypad() {
    const keypad = document.getElementById('keypad');
    keypad.innerHTML = '';

    const digits = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    
    digits.forEach((digit, index) => {
        if (index === 9) {
            keypad.innerHTML += `<button class="key" onclick="handleKeyPress('clear')"><span class="material-symbols-outlined">backspace</span></button>`;
        }
        keypad.innerHTML += `<button class="key" onclick="handleKeyPress(${digit})">${digit}</button>`;
    });

    keypad.innerHTML += `<button class="key" onclick="handleKeyPress('check')"><span class="material-symbols-outlined">keyboard_tab</span></button>`;

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.addEventListener('click', createRipple);
    });
}

function handleKeyPress(value) {
    if (typeof value === 'number') {
        addDigit(value);
    } else if (value === 'clear') {
        clearPassword();
    } else if (value === 'check') {
        checkPassword().catch(console.error);
    }
}

function createRipple(event) {
    const button = event.currentTarget;
    button.classList.remove('ripple');
    void button.offsetWidth; // Trigger reflow
    button.classList.add('ripple');
}

// Generar el teclado al cargar la página
window.onload = async function() {
    await fetchRedirectUrl();
    generateKeypad();
};

// Manejador de eventos para el teclado físico
document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        handleKeyPress(parseInt(event.key));
    } else if (event.key === 'Enter') {
        event.preventDefault();
        handleKeyPress('check');
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();
        handleKeyPress('clear');
    }
});

