const qrinput = document.getElementById('qr-input');
const qrimg = document.getElementById('qr-img');
const qrbtn = document.getElementById('qr-btn');

console.log(qrinput, qrimg, qrbtn);

qrbtn.addEventListener('click', () => {
  const inputValue = qrinput.value;
  console.log(inputValue);

  if (!inputValue) {
    alert('Please enter the link in placerholder');
    return;
  } else {
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    arimg.alt = `QR code for ${inputValue}`;
  }
});
