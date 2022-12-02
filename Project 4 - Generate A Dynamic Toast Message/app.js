// Create onload handlaer 
window.onload = () => {
    main();
}

// Globals
let div = null;

function main() {
    const root = document.getElementById('root');
    const changeBtn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn')


    changeBtn.addEventListener('click', function() {
        const bgColor = generateHexColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor
    });

    copyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(output.value);
        if(div != null) {
            div.remove();
			div = null;
        }
        generateTostMessage(`${output.value} copied`)
    });
}

// Random color generator 
function generateHexColor() {
    const red = Math.floor(Math.random() * 255) 
    const green = Math.floor(Math.random() * 255) 
    const blue = Math.floor(Math.random() * 255) 

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16).toString(16)}`
}


function generateTostMessage(msg) {
    div = document.createElement('div');
    div.innerHTML = msg;
    div.className = 'toast-message toast-message-slide-in';

    div.addEventListener('click', function() {
        div.classList.remove('toast-message-slide-in');
		div.classList.add('toast-message-slide-out');

		div.addEventListener('animationend', function () {
			div.remove();
			div = null;
		});
        console.log(div);
    });

    setTimeout(() => {
        div.classList.remove('toast-message-slide-in');
		div.classList.add('toast-message-slide-out');

		div.addEventListener('animationend', function () {
			div.remove();
			div = null;
		});
        // window.location.reload();
    }, 5000);

    document.body.appendChild(div);
}


// Collect all necessary referance
// Handle the change button click event
// Handle the Copy button click event