function calc(){
    const bar = document.querySelector(".bar");
    bar.style.width = "0%";
    let weight = parseInt(document.getElementById("weight").value);
    let height = parseInt(document.getElementById("height").value);
    if(isNaN(height)){
        alert("Enter your Height Correctly");
        return;
    }
    if(isNaN(weight)){
        alert("Enter your Weight Correctly");
        return;
    }
    height = height/100;
    let bmi = weight/(height*height);
    bmi = Math.round(bmi*10)/10;

    const report = document.querySelector(".report");
    if(bmi < 16){
        report.innerText = "Severe Thinness " + bmi;
        bar.style.backgroundColor = "#FF0000"; // Red color for BMI < 16
    }
    else if(bmi < 17){
        report.innerText = "Moderate Thinness " + bmi;
        bar.style.backgroundColor = "#FF0000"; // Red color for BMI < 17
    }
    else if(bmi < 18.5){
        report.innerText = "Mild Thinness " + bmi;
        bar.style.backgroundColor = "#FF0000"; // Red color for BMI < 18.5
    }
    else if(bmi < 25){
        report.innerText = "Normal " + bmi;
        bar.style.backgroundColor = "#00FF00"; // Green color for BMI < 25
    }
    else if(bmi < 30){
        report.innerText = "Overweight " + bmi;
        bar.style.backgroundColor = "#FF0000"; // Red color for BMI < 30
    }
    else if(bmi < 35){
        report.innerText = "Obese Class I " + bmi;
        bar.style.backgroundColor = "#FF0000"; // Red color for BMI < 35
    }
    else if(bmi < 40){
        report.innerText = "Obese Class II " + bmi;
        bar.style.backgroundColor = "#FF0000"; // Red color for BMI < 40
    }
    else{
        report.innerText = "Obese Class III " + bmi;
        bar.style.backgroundColor = "#FF0000"; // Red color for BMI >= 40
    }
    let t = Math.min(100, (bmi/40)*100);
    let i = 0;
    let interval = setInterval(()=>{
        bar.style.width = i + "%";
        if(i >= t){
            clearInterval(interval);
        }
        i++;
    }, 10);
}
