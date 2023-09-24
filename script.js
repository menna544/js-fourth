const plusBtn = document.querySelectorAll('.plus-btn')
const minusBtn = document.querySelectorAll('.minus-btn')
plusBtn.forEach(btn => {
    btn.addEventListener("click", function () {
        const amount = this.closest(".counter").querySelector(".count")
        let countvalue = parseInt(amount.textContent)
        if (countvalue < 9) {
            countvalue++;
        }
        amount.textContent = countvalue;
    })
})
minusBtn.forEach(btn => {
    btn.addEventListener("click", function () {
        const amount = this.closest(".counter").querySelector(".count")
        let countvalue = parseInt(amount.textContent)

        if (countvalue > 1) {
            countvalue--;
        }
        amount.textContent = countvalue;
    })
})

