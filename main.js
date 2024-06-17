let image =  document.querySelector(".image-section")
let like = document.querySelector(".image-section i")
let liked = document.querySelector("#like")


image.addEventListener("dblclick", function(){


    console.log("You have liked the Post")

    like.style.transform = "translate(-50%, -50%) scale(3)"

    liked.style.color = "red"
    liked.style.fill ="red"

    setTimeout(function(){
    like.style.transform = "translate(-50%, -50%) scale(0)"
    },800)

})








