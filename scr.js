const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const date = new Date();

    const seconds = date.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    //console.log(seconds);

    const minutes = date.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    //console.log(minutes);

    const hours = date.getHours();
    const hoursDegree = ((hours / 12) * 360) + 90 + ((minutes / 60) * 30);
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    //console.log(hours);

}

setInterval(setDate, 1000)