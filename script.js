const app = document.querySelector('.app');
const container = document.querySelector('.container');
const body = document.querySelector('body');

const darktheme = document.querySelector('.holder');


function toggleDarkTheme() {
    app.classList.toggle("dark-theme");
    container.classList.toggle("dark-theme");
    body.classList.toggle("dark-theme");
}

darktheme.addEventListener('click', function() {

    darktheme.classList.toggle("on");
    toggleDarkTheme()
    darktheme.classList.toggle("off");

  });


//   const toggleDarkTheme = (event) => {
//     updateDisplay(event.target.textContent);
// }

// keys.forEach(key => key.addEventListener('click', toggleDarkTheme));