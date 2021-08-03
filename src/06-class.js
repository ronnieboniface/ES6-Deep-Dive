username.addEventListener('keyup', () => {
  greeting.textContent = 'Hello ' + this.value;
});

username.addEventListener('keyup', function () {
  greeting.textContent = 'Hello ' + this.value;
});