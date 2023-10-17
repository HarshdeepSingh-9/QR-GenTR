const generateButton = document.getElementById("generate-button");
const qrContainer = document.getElementById("qrcode");
const textInput = document.getElementById("text-input");

let qr;

generateButton.addEventListener("click", generateQRCode);

function generateQRCode() {
    if (textInput.value) {
        qrContainer.innerHTML = "";
        qr = new QRCode(qrContainer, {
            text: textInput.value,
            width: 128,
            height: 128
        });
        qrContainer.style.display = "flex";
        qrContainer.style.justifyContent = "center";
        qrContainer.style.alignItems = "center";
    } else {
        alert("Please enter text or a URL.");
    }
}