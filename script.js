const wrapper = document.querySelector('.wrapper');
const qrInput = document.querySelector('.form input');
const generateBtn = document.querySelector('.form button')
const qrImage = document.querySelector('.qr-code img')

generateBtn.addEventListener('click', () => {
    console.log("load 1");
    let qrValue = qrInput.value;
    if(!qrValue){return;}
    generateBtn.innerText = "sabar...";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImage.addEventListener('load',() => {
        console.log("load 2");
        wrapper.classList.add('active');
        generateBtn.innerText = "Generate QR code";
    })
    console.log(qrImage);
});

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value){
        wrapper.classList.remove('active')
    }
});