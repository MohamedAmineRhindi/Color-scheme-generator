const getColorsContainerHtml = colorsArray => colorsArray.map(col =>
    `
    <div class="color-container">
        <div class="color" style="background-color:${col}"></div>
        <div class="colo-hex-code">${col}</div>
    </div>
    `
).join("")

document.querySelector(".color-picker").addEventListener("submit", event => {
    event.preventDefault()
    const seedColor = document.querySelector(".color-input").value.replace("#", "")
    const schemeMode = document.querySelector(".scheme-mode").value
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${schemeMode}&count=6`)
        .then(res => res.json())
        .then(data => {
            const colorsArray = data.colors.map(jsonCol => jsonCol.hex.value)
            document.querySelector(".colors-container").innerHTML = getColorsContainerHtml(colorsArray)
        })
})


