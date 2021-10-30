// best price
const defaultPriceValue = document.getElementById('best-price');
// memory price
const memoryPriceValue = document.getElementById('memory-price');
// storage price
const storagePriceValue = document.getElementById('storage-price');
// delivery charge
const deliveryChargeValue = document.getElementById('delivery-charge');
// total price
const totalPriceValue = document.getElementById('total-price');
// input field
const inputField = document.getElementById('input-field');
// apply button
const applyBtn = document.getElementById('apply-btn');
// footer total amount
const footerTotalAmount = document.getElementById('footer-totalAmount');

// click button, changing and get value
function getValue(costId, costValue, cost) {
    document.getElementById(costId).addEventListener('click', function() {
        costValue.innerText = cost;
        updateTotalPrice(false);
        updateTotalPrice(true);
    })
}

// Update total price
function updateTotalPrice(isTotalAmount) {
    const defaultPrice = parseInt(defaultPriceValue.innerText);
    const memoryPrice = parseInt(memoryPriceValue.innerText);
    const storagePrice = parseInt(storagePriceValue.innerText);
    const deliveryCharge = parseInt(deliveryChargeValue.innerText);
    const totalPrice = defaultPrice + memoryPrice + storagePrice + deliveryCharge;
    if(isTotalAmount) {
        footerTotalAmount.innerText = totalPrice;
    }
    else {
        totalPriceValue.innerText = totalPrice;
    }
}

// memory 8 gb button
    getValue('memory-8', memoryPriceValue, '0');

// memory 16 gb button
    getValue('memory-16', memoryPriceValue, '180');

// storage 256 gb button
    getValue('storage-256', storagePriceValue, '0');

// storage 512 gb button
    getValue('storage-512', storagePriceValue, '100');

// storage 1 tb button
    getValue('storage-1tb', storagePriceValue, '180');

// delivery free button
    getValue('delivery-free', deliveryChargeValue, '0');

// delivery charge button
    getValue('delivery-cost', deliveryChargeValue, '20');

// add pomo code
applyBtn.addEventListener('click', function () {
    if (inputField.value == 'stevekaku') {
        const footerTotalAmountNumber = parseInt(footerTotalAmount.innerText);
        const footerParcentAmount = (footerTotalAmountNumber * 20) / 100;
        const footerAmount = footerTotalAmountNumber - footerParcentAmount;
        footerTotalAmount.innerText = footerAmount;
    }
    inputField.value = '';
});