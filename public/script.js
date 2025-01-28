const textarea = document.querySelector('#textInput'),
    wordCount = document.querySelector('#wordCount');

textarea.addEventListener('input', () => {
    const words = textarea.value.split(' ').filter((word) => word !== '');
    wordCount.textContent = words.length;
});
