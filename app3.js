let second = document.getElementById("second");
    let minute = document.getElementById("minute");
    let hour = document.getElementById("hour");

    setInterval(function(){
        let date = new Date();
        let x = (date.getSeconds()*6);
        second.style.transform = `rotate(${x}deg)`;
        let y = (((date.getMinutes()*60)+(date.getSeconds()))*0.1);
        minute.style.transform = `rotate(${y}deg)`;
        let z = (((date.getHours()*3600) + (date.getMinutes()*60) + date.getSeconds()) * (1/120));
        hour.style.transform = `rotate(${z}deg)`;
    }, 1000);