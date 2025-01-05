document.getElementById("awal").addEventListener("change", function () {
    const awalValue = parseInt(this.value)
    const akhirSelect = document.getElementById("akhir")

    Array.from(akhirSelect.options).forEach((option) => {
        option.style.display = "block"
    })

    Array.from(akhirSelect.options).forEach((option) => {
        if (parseInt(option.value) <= awalValue) {
            option.style.display = "none"
        }
    })

    if (parseInt(akhirSelect.value) <= awalValue) {
        akhirSelect.value = ""
    }
})

document.querySelector(".lihat").addEventListener("click", function () {
    const awalValue = parseInt(document.getElementById("awal").value)
    const akhirValue = parseInt(document.getElementById("akhir").value)
    const container = document.getElementById("tabel-perkalian")
    container.innerHTML = ""
    for (let i = awalValue; i <= akhirValue; i++) {
        let tableHTML = `<table border=2><caption>Perkalian ${i}</caption>`
        for (let j = 1; j <= 10; j++) {
            tableHTML += `<tr><td>${i} x ${j} = ${i * j}</td></tr>`
        }
        tableHTML += "</table>"
        container.innerHTML += tableHTML
    }
})

document.querySelector(".reset").addEventListener("click", function () {
    document.getElementById("tabel-perkalian").innerHTML = ""
})
