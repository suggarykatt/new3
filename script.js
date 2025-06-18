document.getElementById('surprise').addEventListener('click', () => {
  const letter = document.querySelector('.letter');
  const text = `My dearest love,

Every moment with you is like a star in the night sky — glowing, eternal, and beautiful. 
You are the moonlight in my darkest hours and the melody to my silent days. 
This letter is just a small attempt to show how deeply I adore you.

Forever yours,
❤️`;

  letter.classList.remove('hidden');

  let i = 0;
  const speed = 50;
  const typeText = () => {
    if (i < text.length) {
      document.getElementById('typed-text').textContent += text.charAt(i);
      i++;
      setTimeout(typeText, speed);
    }
  };

  typeText();
});
