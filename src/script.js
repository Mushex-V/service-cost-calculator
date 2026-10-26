const form = document.querySelector('#calculator-form')
const serviceTypeSelect = document.querySelector('#service-type')
const pagesCountInput = document.querySelector('#pages-count')
const pagesValueSpan = document.querySelector('#pages-value')
const optionResponsive = document.querySelector('#option-responsive')
const optionSeo = document.querySelector('#option-seo')
const optionUrgent = document.querySelector('#option-urgent')
const totalPriceSpan = document.querySelector('#total-price')

function calculateTotal() {

    let basePrice = parseFloat(serviceTypeSelect.value)

    const pagesCount = parseInt(pagesCountInput.value)
    const pagesPrice = (pagesCount - 1) * 20

    pagesValueSpan.textContent = `${pagesCount}`;

    let optionsPrice = 0
    if (optionResponsive.checked) {
        optionsPrice += parseFloat(optionResponsive.value)
    }
    if (optionSeo.checked) {
        optionsPrice += parseFloat(optionSeo.value)
    }

    let subtotal = basePrice + pagesPrice + optionsPrice

    if (optionUrgent.checked) {
        subtotal *= parseFloat(optionUrgent.value)
    }

    totalPriceSpan.textContent = `$${Math.round(subtotal)}`;
}

form.addEventListener('input', calculateTotal)

calculateTotal()

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const serviceText = serviceTypeSelect.options[serviceTypeSelect.selectedIndex].text
    const pagesCount = parseInt(pagesCountInput.value)

    const responsive = optionResponsive.checked ? 'Да' : 'Нет';
    const seo = optionSeo.checked ? 'Да' : 'Нет';
    const urgent = optionUrgent.checked ? 'Да (+30%)' : 'Нет';

    const totalPrice = totalPriceSpan.textContent

    const message = `Привет! Хочу заказать проект:%0A` +
        `— Тип: ${serviceText}%0A` +
        `— Страниц: ${pagesCount}%0A` +
        `— Адаптивность: ${responsive}%0A` +
        `— SEO-оптимизация: ${seo}%0A` +
        `— Срочно: ${urgent}%0A` +
        `------------------------%0A` +
        `Итоговая стоимость: ${totalPrice}`;

    const telegramUsername = 'Mushex_V'

    const telegramUrl = `https://t.me/${telegramUsername}?text=${message}`
    window.open(telegramUrl, '_blank')
})