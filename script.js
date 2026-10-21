const challengeBank = [
  {
    title: 'Choose the sound pattern that fits.',
    choices: ['/tʃiːn/', '/ʃiːn/', '/tiːn/'],
    correct: 1,
  },
  {
    title: 'Which form matches the stress rule?',
    choices: ['PRE.sent', 'pre.SENT', 'pre.sent'],
    correct: 1,
  },
  {
    title: 'Select the phoneme with the correct vowel shift.',
    choices: ['/bæd/', '/bed/', '/bɔd/'],
    correct: 0,
  },
  {
    title: 'Which syllable pattern is most natural?',
    choices: ['CVC.CVC', 'CV.CVC', 'CV.CV.CV'],
    correct: 2,
  },
];

const challengeTitle = document.getElementById('challenge-title');
const choiceList = document.getElementById('choice-list');
let challengeIndex = 0;

function renderChallenge() {
  const challenge = challengeBank[challengeIndex % challengeBank.length];
  challengeTitle.textContent = challenge.title;
  choiceList.innerHTML = '';

  challenge.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice';
    button.textContent = choice;

    if (index === challenge.correct) {
      button.classList.add('active');
    }

    button.addEventListener('click', () => {
      const allChoices = choiceList.querySelectorAll('.choice');
      allChoices.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
    });

    choiceList.appendChild(button);
  });
}

setInterval(() => {
  challengeIndex += 1;
  renderChallenge();
}, 3500);

renderChallenge();

document.getElementById('year').textContent = new Date().getFullYear();
