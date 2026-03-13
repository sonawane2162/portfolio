gsap.registerPlugin(ScrollTrigger)

gsap.from(".box",{
scrollTrigger:".dashboard",
y:100,
opacity:0,
stagger:.3,
duration:1
})

emailjs.init("9toclGnbEhqGcNDv4")

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault()

emailjs.sendForm(
"service_p81jpds",
"template_m5bdu1u",
this
)

.then(function(){

document.getElementById("success").innerText="I will reach you soon."

})

})

fetch("https://api.countapi.xyz/hit/abhishekportfolio/visits")
.then(res=>res.json())
.then(data=>{
document.getElementById("visits").innerText=data.value
})
