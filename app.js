const iconBtns = document.querySelectorAll('.icon');
const answers = document.querySelectorAll('p');
const buttons = document.querySelectorAll('button');
const bg = document.querySelector('.bg');
let isHidden;


if (window.innerWidth > 500) {
    bg.src = "./assets/images/background-pattern-desktop.svg"
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      handleFAQ(btn)
    })

    btn.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleFAQ(btn)
        }           
    })
})

function handleFAQ(btn) {
    changeIcon(btn);
    if (isHidden) {
        showAnswer(btn);
    } else {
        hideAnswer(btn);
    }
}  

function changeIcon(btn) {
    if (btn.children[0].getAttribute('src') === "./assets/images/icon-minus.svg") {
        btn.children[0].src = "./assets/images/icon-plus.svg";
        isHidden = false;
    } else {
        btn.children[0].src = "./assets/images/icon-minus.svg";
        isHidden = true;
    }
}

function hideAnswer(btn) {
    answers[Array.from(iconBtns).indexOf(btn.children[0])].classList.add('hidden');
}

function showAnswer(btn) {
    answers[Array.from(iconBtns).indexOf(btn.children[0])].classList.remove('hidden')
}