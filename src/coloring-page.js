import littleGuyFillSvg from './coloring/little-guy.js';

const head = document.getElementById('head');
const color = 'hex code';

head.addEventListener('click', () => {
    head.setAttribute('fill', '#c842f4');
});

// littleGuyFillSvg();