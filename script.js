const scoreText = document.querySelector('.game__wrapper--score');
const gameWrapper = document.querySelector('.game__wrapper--pitch');
let gameScore = 0;
let defaultMode = 700;
let boxNumbers = 6;
let boxName = "pitch__block";
let lightClass = "light";
scoreText.textContent = `Score: ${gameScore}`

//Levels
const easyLevel = document.querySelector('.game__mode--easy')
const mediumLevel = document.querySelector('.game__mode--medium')
const hardLevel = document.querySelector('.game__mode--hard')

const easyChange = () => {
    localStorage.setItem('level', 'easy')
    window.location.reload();
}

const mediumChange = () => {
    localStorage.setItem('level', 'medium')
    window.location.reload();
}

const hardChange = () => {
    localStorage.setItem('level', 'hard')
    window.location.reload();
}

easyLevel.addEventListener('click', easyChange);
mediumLevel.addEventListener('click', mediumChange);
hardLevel.addEventListener('click', hardChange);


if (localStorage.getItem('level') == 'medium') {
    defaultMode = 550;
    boxNumbers = 12;
    lightClass = "light__medium";
    boxName = "pitch__block--medium";
} else if (localStorage.getItem('level') == 'hard') {
    defaultMode = 420;
    boxNumbers = 30;
    lightClass = "light__hard";
    boxName = "pitch__block--hard";
} else {
    defaultMode = 700;
}


//Create Boxes
for (i = 0; i < boxNumbers; i++) {
    const oneBoxEasy = document.createElement('div');
    oneBoxEasy.classList.add(boxName);
    gameWrapper.appendChild(oneBoxEasy);
}

const gameBoxes = document.querySelectorAll(`.${boxName}`);
//Random Box Generator
const randomIndex = () => {
    const randomNumber = Math.floor(Math.random() * gameBoxes.length);
    gameBoxes[randomNumber].classList.add(lightClass);
}
//Hide Box after time
const hideBox = () => {
    gameBoxes.forEach(function (clearBox) {
        clearBox.classList.remove(lightClass);
    })
};
setInterval(hideBox, defaultMode);
//Score and logic
gameBoxes.forEach(function (gameBox) {
    gameBox.addEventListener('click', function () {
        if (gameBox.classList.contains(lightClass)) {
            gameBox.classList.remove(lightClass);
            gameScore += 1;
            scoreText.textContent = `Score: ${gameScore}`
        } else {
            gameScore += 0;
        }

    })
});
setInterval(randomIndex, defaultMode);

// Your existing JavaScript code here...

// New JavaScript code for sign in functionality
const modal = document.getElementById('signInModal');
const signInButton = document.getElementById('signInLink');
const signInFormButton = document.getElementById('signInButton');
const closeButton = document.getElementById('closeButton');

if (modal && signInButton && signInFormButton && closeButton) {
  signInButton.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
  });

  closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });

  signInFormButton.addEventListener('click', (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {        
      alert('Please enter a valid username and password');
      return;
    }

    // You can add your sign in logic here
    // For example, you can send a request to your server to authenticate the user
    // or you can redirect the user to a different page
    // For now, let's just redirect the user to a different page
    window.location.href = 'sign-in.html';
  });
} else {
  console.error('One or more HTML elements were not found');
}