

function updateClock(){
    const time = new Date();
    let hours = time.getHours().toString().padStart(2 , 0);
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const minutes = time.getMinutes().toString().padStart(2 , 0);
    const seconds = time.getSeconds().toString().padStart(2 , 0);
    const updatetime = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = updatetime;

}

setInterval(updateClock, 1000);
