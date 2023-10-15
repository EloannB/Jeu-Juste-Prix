var items = [
    {
        name: "item1",
        price: Math.floor(Math.random() * 100) + 1,
        image: "images/HINSHARK-Bonnet-Ecouteur-Bluetooth-281x300.jpg.webp",
        description: "Bonnet Ecouteur Bluetooth"
    },
    {
        name: "item2",
        price: Math.floor(Math.random() * 100) + 1,
        image: "images/Xiaomi-Mi-Smart-Band-6-20220825-021434-450x215.png.webp",
        description: "Xiaomi Mi Smart Band 6"
    },
    {
        name: "item3",
        price: Math.floor(Math.random() * 100) + 1,
        image: "images/telechargement-25-400x210-1.png.webp",
        description: "Apple HomePod Mini"
    },
    {
        name: "item4",
        price: Math.floor(Math.random() * 100) + 1,
        image: "images/Samsung-Gear-VR-R322-400x300.jpg.webp",
        description: "Samsung Gear VR"
    },
    {
        name: "item5",
        price: Math.floor(Math.random() * 100) + 1,
        image: "images/Ultimates-Ears-Wonderboom-358x300.jpg.webp",
        description: "Ultimates Ears Wonderboom"
    },
]

var attempts = 10

var current_item = items[Math.floor(Math.random() * items.length)]

var current_price = current_item.price

document.getElementById("item-image").src = current_item.image

function checkPrice(e) {

    e.preventDefault()

    var guess = document.getElementById("guess").value

    var victoryGif = document.getElementById("victory-gif")

    var defeatGif = document.getElementById("defeat-gif")

    if (guess == current_price) {

        document.getElementById("result").innerHTML = `Bravo ! Vous avez trouvé le juste prix !`

        document.getElementById("guess").disabled = true

        victoryGif.style.display = "block"

        return

    } else if (guess > current_price) {

        document.getElementById("result").innerHTML = `Le prix est plus petit que ${guess}€`

    } else if (guess < current_price) {

        document.getElementById("result").innerHTML = `Le prix est plus grand que ${guess}€`

    }

    attempts--

    if (attempts == 0) {

        document.getElementById("result").innerHTML = `Vous avez perdu! Le juste prix était ${current_price}€`

        document.getElementById("guess").disabled = true

        defeatGif.style.display = "block"

        return

    }

}

document.getElementById("guess-form").addEventListener("submit", checkPrice)



const refreshButton = document.getElementById('logo-refresh');

refreshButton.addEventListener('click', function () {

    location.reload();
})
