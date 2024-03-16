let btn = document.querySelector('.btn');
    let output = document.querySelector('.image');
    const getImage = async () => {
        let input = document.querySelector('.inputs').value;
        let prom = input;
        if (prom == "") {
            alert("Enter some text");
            return;
        }
        console.log(prom);

        const api = "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";
        btn.innerHTML = "Generating...";    
        const response = await fetch("https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5", {
                headers: { Authorization: `Bearer ${api}` },
                method: "POST",
                body: JSON.stringify({
                    "inputs": prom
                }),
            }
            );

            const result = await response.blob();

            const imgUrl = URL.createObjectURL(result);
            const img = document.createElement("img");
            img.src = imgUrl;
            img.style.backgroundSize = "cover";
            img.style.backgroundRepeat = "no-repeat";
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.borderRadius = "3rem";
            output.innerHTML = "";
            output.appendChild(img);
            btn.innerHTML = "GENERATE";
        }

    btn.addEventListener('click', getImage);