document.querySelector("button").addEventListener("mouseover", (e)=>{
    e.target.style.transform = "translate(3px)";
})
document.querySelector("button").addEventListener("mouseout", (e)=>{
    e.target.style.transform = "translate(0px)";
})
function calc(){

    let bill = parseInt(document.getElementById("bill").value);
    let given = parseInt(document.getElementById("given").value);
    if(isNaN(bill) || isNaN(given)){
        alert("wrong input");
    }
    else{
        let left = given - bill;
        let data = document.querySelectorAll("td");
        let ticker = [-1, 500, 100, 50, 10, 5, 1];
        let j = 0;
        data.forEach(element => {
            if(j!=0){
                let i = 0;
                while(left >= ticker[j]){
                    left = left - ticker[j];
                    i++;
                }
                element.innerHTML = i;
            }
            j++;
        });
        document.getElementById("bill").value = bill;
        document.getElementById("given").value = given;
    }

}