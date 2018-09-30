document.querySelector('.p3').addEventListener('touchstart',function(e) {
    var light = document.querySelector(".p3 .light");
    var dog = document.querySelector(".p3 .dog");
    dog.style.transform = `translate(${e.touches[0].pageX/-10}px,${e.touches[0].pageY/-10}px)`;
    dog.style.transition = 'transform .6s ease-in-out'
    light.style.transform = `translate(${e.touches[0].pageX/-10}px,${e.touches[0].pageY/-10}px)`;
    light.style.transition = 'transform .6s ease'
})