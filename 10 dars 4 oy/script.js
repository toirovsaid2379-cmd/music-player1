let cover_img = document.querySelector (".album-cover")
let nomi = document.querySelector(".title")
let select = document.querySelector("select")
let playBtn = document.querySelector(".play")
let range = document.querySelector(".range")
let arr= ["Shape of you", "Ты и Я", "Hope"]
let ijroetish = false
cover_img.src = './0.jpg'
nomi.innerHTML = arr[0]
let audio = new Audio()



playBtn.addEventListener("click", ()=>{
    audio.src = `./${select.value}.mp3`

   
if(playBtn.innerHTML == "▶️"){
    playBtn.innerHTML = "⏸️"
    audio.play()
}else if(playBtn.innerHTML == "⏸️"){
    playBtn.innerHTML = "▶️"
    audio.pause()
}
})



audio.addEventListener("loadedmetadata", ()=>{
    range.max = audio.duration
})


audio.addEventListener("timeupdate", ()=>{
    range.value = audio.currentTime
})

range.addEventListener("input", ()=>{
    audio.currentTime = range.value
})

select.addEventListener("change", (e)=>{
cover_img.src = `./${select.value}.jpg`
nomi.innerHTML = arr[select.value]
})
