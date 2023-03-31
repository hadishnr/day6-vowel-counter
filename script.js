const input = document.querySelector('.input-text');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const countVowel = () => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  const str = input.value.toLowerCase();

  for (const string of str) {
    if (vowels.includes(string)) {
      count++;
    }
  }
  result.innerHTML = `${str.toUpperCase()} has ${count} vowels`;
};

btn.addEventListener('click', countVowel);
