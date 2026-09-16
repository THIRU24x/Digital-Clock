function updateClock(){
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, 0);
    const m=hours>=12 ?"PM" :"AM";
    hours=hours % 12||12; 
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${m}`;
    document.getElementById("clock").textContent = timeString;
    const date= document.getElementById("date");
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  let formattedDate = now.toLocaleDateString("en-US", options);
  
  date.innerText = formattedDate;
}

updateClock();
setInterval(updateClock, 1000);