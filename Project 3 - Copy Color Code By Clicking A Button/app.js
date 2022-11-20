// Create onload handlaer 
window.onload = () => {
    main();
}

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
        navigator.clipboard.writeText(output.value)
    });
}

// Random color generator 
function generateHexColor() {
    const red = Math.floor(Math.random() * 255) 
    const green = Math.floor(Math.random() * 255) 
    const blue = Math.floor(Math.random() * 255) 

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16).toString(16)}`
}



// Collect all necessary referance
// Handle the change button click event
// Handle the Copy button click event