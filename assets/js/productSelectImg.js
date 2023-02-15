// product select
function tempImg(){
    
    console.log("img conect..")
}
var imgProduct = document.getElementById("mainImg")
var smailSelectProduct = document.getElementsByClassName("smail-img")
var tamplateImg = document.getElementsByClassName("img-temp")

smailSelectProduct[0].onclick = function() {
    imgProduct.src = smailSelectProduct[0].src;
}

smailSelectProduct[1].onclick = function() {
    imgProduct.src = smailSelectProduct[1].src;
}

smailSelectProduct[2].onclick = function() {
    imgProduct.src = smailSelectProduct[2].src;
}

smailSelectProduct[3].onclick = function() {
    imgProduct.src = smailSelectProduct[3].src;
}

// ========== Size ==============
const selecSize = document.querySelectorAll(".size")

selecSize.forEach((size,index) =>{
    size.addEventListener('click', () =>{
        selecSize.forEach((size) =>{
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

// ======= detail pembayaran show 
const btnBayar = document.getElementById('btn__bayar')
const close = document.getElementById('close__buy')
const detailCard = document.getElementById('detail__card')

btnBayar.addEventListener('click',() => {
    detailCard.style.display = "flex"
})

close.addEventListener('click',() =>{
    detailCard.style.display = "none"
})