const synth = window.speechSynthesis;
        document.getElementById("submit").addEventListener("click", ()=>{
            let input = document.querySelector("#input").value;
            const utterThis = new SpeechSynthesisUtterance(input);
            synth.speak(utterThis);
        });