
var h1 = document.querySelector('h1');
var button = document.querySelector('button')
var body = document.body;

// Create a variale thta tracks if dark mode is actice
var darkmodeActive = false;

h1.innerText = 'JS Next Level';

    // Toggle between light mode and dark mode
    // If variable is true, switch to light mode else switch to dark mode

button.addEventListener('click', function () {
    // console.log('click')
    // body.style.cssText = 'background-color: #7777';
    // body.setAttribute('class', 'darkmode another one-more')
    // body.classList.add = ('darkmode')

    if (darkmodeActive === false) {
        // Switch to dark mode
        body.classList.add('darkmode');
        button.innerText = 'Light Mode';
        darkmodeActive = true
    } else {
        // Switch to light mode
        body.classList.remove('darkmode')
        button.innerText = 'Dark Mode';
        darkmodeActive = false
    }
});







// // this a call back
// function newStuff(num, string, callback) {
//     callback('make me a console out');
// }

// function someFunc(someVal) {
//     console.log(someFunc);
// }


// newStuff(10,'some string',someFunc ) 