const { jsPDF } = require("jspdf");
// const html2pdf = require("html2pdf");
// const { html2canvas } = require('html2canvas')
// const { renderToString } = require("react-dom/server");

const generateButton = document.querySelector('#generate-button');

var elementHandler = {
  '#ignorePDF': function (element, renderer) {
    return true;
  }
};

generateButton.addEventListener('click', async function() {
  // Remove junk

  var inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.style.border = '0 none';
  });

  var generateButton = document.getElementById('generate-button');
  generateButton.style.display = 'none';

  // Process

  var element = document.getElementById('entire-thing');
  var opt = {
    margin:       0.5,
    filename:     'myfile.pdf',
    html2canvas:  { scale: 1, scrollY: 0 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
    scale: 4,
    letterRendering: true,
    image: { type: 'jpeg', quality: 1 },
    html2canvas: {
      dpi: 192,
      scale: 4,
      scrollY: 0,
      letterRendering: true,
      useCORS: true
    },
  };

  await html2pdf().from(element).set(opt).save();

  // Add junk back in

  inputs.forEach(input => {
    input.style.border = '';
  });

  generateButton.style.display = '';
})