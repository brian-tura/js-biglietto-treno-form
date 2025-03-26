const btn = document.getElementById('btn');
const showName = document.getElementById('showName');
const showPrice = document.getElementById('showPrice');
const price = 0.21;

btn.addEventListener("click", function (event) {
    event.preventDefault();
    const distance = document.getElementById('distance').value;
    const age = document.getElementById('age').value;
    const name = document.getElementById('name');
    showName.innerHTML = name.value.trim();
    let finalPrice = price * distance;
    if (age < 18) {
        finalPrice *= 0.8;
    }
    if (age > 65) {
        finalPrice *= 0.6;
    }
    showPrice.innerHTML = finalPrice.toFixed(2)+" €";
});






