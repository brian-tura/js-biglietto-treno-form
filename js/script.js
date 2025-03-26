const btn = document.getElementById('btn');
const price = 0.21;
const showName = document.getElementById('nome');


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
    console.log(finalPrice);
});






