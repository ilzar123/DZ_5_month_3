const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const convert = (elem, target, isTrue) => {
    elem.addEventListener('input', ()=> {
    const req = new XMLHttpRequest()
    req.open("GET", "data.json")
    req.setRequestHeader("Content-type", "application/json")
    req.send()
    req.onload = () => {
        const response = JSON.parse(req.response)
        if (elem === som) {
            target.value = (elem.value / response.usd).toFixed(2)
            isTrue.value = (elem.value / response.eur).toFixed(2)
        } else if (elem === usd) {
            target.value = (elem.value * response.usd).toFixed(2)
            isTrue.value = (elem.value * response.usd / response.eur).toFixed(2)
        } else if (elem === eur) {
            target.value = (elem.value * response.eur).toFixed(2)
            isTrue.value = (elem.value * response.eur / response.usd).toFixed(2)
        }
        elem.value === '' ? (target.value = '') : null
        elem.value === '' ? (isTrue.value = '') : null
    }
})
}

convert(som, usd, eur, 12)
convert(usd, som, eur, '')
convert(eur, som, usd, '')