let light = document.querySelector("#light").classList;
let noLight = document.querySelector("#noLight").classList;
let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", function() {
    noLight.toggle("hidden")
})

// console.log("its working")
// btn2.classList.toggle("light-on")
// light.classList.toggle("hidden");
// noLight.classList.toggle("hidden");
