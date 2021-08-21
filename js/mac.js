const firstMemory = document.getElementById('first-memory')
const secondMemory = document.getElementById('second-memory')
const firstStorage = document.getElementById('first-storage')
const secondStorage = document.getElementById('second-storage')
const thirdStorage = document.getElementById('third-storage')
const memoryCost = document.getElementById('memory-cost')
const storageCost = document.getElementById('storage-cost')
const deliveryCost = document.getElementById('delivery-cost')
const deliveryFree = document.getElementById('delivery-free')
const deliveryCharge = document.getElementById('delivery-charge')
const total = document.getElementById('total')
const bestPrice = document.getElementById('best-price')
const totalAmount = document.getElementById('total-price')

/* Total price calculate */
function totalPriceUpdate() {
    const memoryAmount = parseInt(memoryCost.innerText);
    const storageAmount = parseInt(storageCost.innerText)
    const deliveryAmount = parseInt(deliveryCharge.innerText)
    const bestPriceAmount = parseInt(bestPrice.innerText)
    const grandTotal = memoryAmount + storageAmount + deliveryAmount + bestPriceAmount;
    total.innerText = grandTotal;
    // console.log(total.innerText)
    totalAmount.innerText = total.innerText
    total.innerText = totalAmount.innerText;

}

/* promo code section  */
document.getElementById('apply-code').addEventListener('click', function () {
    const userPromo = document.getElementById('promo-code');
    if (userPromo.value == 'stevekaku') {
        const discountAmount = totalAmount.innerText * .2;
        const newAmount = totalAmount.innerText - discountAmount;
        totalAmount.innerText = newAmount;
        console.log(totalAmount.innerText);
        document.getElementById('apply-code').disabled = true;

        // clear input field 
        userPromo.value = ' ';
        return newAmount;
    }


})
/* Memory cost */
document.getElementById('best-price').addEventListener('click', function () {
    bestPrice.innerText = 1299;
    totalPriceUpdate()
})
document.getElementById('first-memory').addEventListener('click', function () {
    memoryCost.innerText = 0;
    totalPriceUpdate()
})
document.getElementById('second-memory').addEventListener('click', function () {
    memoryCost.innerText = 180;
    totalPriceUpdate()
})
/* Storage cost  */
document.getElementById('first-storage').addEventListener('click', function () {
    storageCost.innerText = 0;
    totalPriceUpdate()
})
document.getElementById('second-storage').addEventListener('click', function () {
    storageCost.innerText = 100;
    totalPriceUpdate()
})
document.getElementById('third-storage').addEventListener('click', function () {
    storageCost.innerText = 180;
    totalPriceUpdate()
})
/* Delivery cost  */
document.getElementById('delivery-free').addEventListener('click', function () {
    deliveryCharge.innerText = 0;
    totalPriceUpdate()
})
document.getElementById('delivery-cost').addEventListener('click', function () {
    deliveryCharge.innerText = 20;
    totalPriceUpdate()
})