const containerFluid = document.querySelector('.container-fluid');
const z1 = document.querySelector('.z1');
const z2 = document.querySelector('.z2');
const z3 = document.querySelector('.z3');
const z4 = document.querySelector('.z4');
const active = document.querySelector('.active');
const slider = document.querySelector('.slider-container');

z1.addEventListener('click', () => {
    slider.style.transform = 'translateY(0)';
    active.style.top = 0;
    containerFluid.style.backgroundImage = "linear-gradient(to right, #fc5c7d, #6a82fb)";
})
z2.addEventListener('click', () => {
    slider.style.transform = 'translateY(-25%)';
    active.style.top = "100px";
    containerFluid.style.backgroundImage = "radial-gradient(circle farthest-side, #fceabb, #f8b500)";
})
z3.addEventListener('click', () => {
    slider.style.transform = 'translateY(-50%)';
    active.style.top = "200px";
    containerFluid.style.backgroundImage = "linear-gradient(25deg,#d64c7f,#ee4758 50%)";
})
z4.addEventListener('click', () => {
    slider.style.transform = 'translateY(-75%)';
    active.style.top = "300px";
    containerFluid.style.backgroundImage = "radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )";
})

console.log(100);