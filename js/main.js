let qrcodeform = document.getElementById("qrcode-generator")
let qrcodeinput = document.getElementById("qrcode-input")
let qrCode;

function generateQRcode(qrinput) {
    return new QRCode("qrgen", {
        text: qrinput,
        width: 138,
        height: 138,
        colorDark: "#0F0E11",
        colorLight: "#2B2D35",
        correctLevel : QRCode.CorrectLevel.H
    });
}

// Event Listner for form submition 
qrcodeform.addEventListener("submit", function(event){
    // Prevent form submission
    event.preventDefault();
    let qrinput = qrcodeinput.value;
    if(qrCode == null) {
        // Generate code initially
        qrCode = generateQRcode(qrinput);
    }
    else {
        // If code already generated
        qrCode.makeCode(qrinput);
    }
})