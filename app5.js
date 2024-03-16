document.querySelector(".container").addEventListener("mouseover", ()=>{
    document.querySelector(".container").style.transform = "translateX(-20px)";
    document.querySelector(".container").style.transform = "translateY(-20px)";
});
document.querySelector(".container").addEventListener("mouseout", ()=>{
    document.querySelector(".container").style.transform = "translateX(0px)";
    document.querySelector(".container").style.transform = "translateY(0px)";
});

function calc(){
    let dms = parseInt(document.getElementById("dms").value);
    let dsa = parseInt(document.getElementById("dsa").value);
    let coa = parseInt(document.getElementById("coa").value);
    let web = parseInt(document.getElementById("web").value);
    let flag = true;
    marks = [dms, coa, dsa, web];
    console.log(marks);
    const number = marks.map((e)=>{
        if(e > 100 || e < 0){
            alert("Enter marks between 0 and 100");
            flag = false;
        }
        return e;
    });
    if(flag){
        let sum = 0;
        number.forEach(element => {
            sum = sum + element;
        });
        console.log(sum);
        let percentage = ((sum/(number.length*100))*100);
        document.getElementById("percent").innerText = percentage + "%";
        let grade;
        if(percentage >= 90) grade = "A+";
        else if(percentage >= 80) grade = "A";
        else if(percentage >= 70) grade = "B+";
        else if(percentage >= 60) grade = "B";
        else if(percentage >= 50) grade = "C";
        else if(percentage >= 40) grade = "D";
        else grade = "Fail";

        document.getElementById("grade").innerText = grade;
    }
}