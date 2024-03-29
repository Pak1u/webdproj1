var userImageLink = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png";

    var time_start, end_time;

    var downloadSize = 5616998;
    var downloadImgSrc = new Image();

    downloadImgSrc.onload = function () {
        end_time = new Date().getTime();
        displaySpeed();
    };
    time_start = new Date().getTime();
    downloadImgSrc.src = userImageLink;

    function displaySpeed() {
        var timeDuration = (end_time - time_start) / 1000;
        var loadedBits = downloadSize * 8;

        var bps = (loadedBits / timeDuration).toFixed(2);
        var speedInKbps = (bps / 1024).toFixed(2);
        var speedInMbps = (speedInKbps / 1024).toFixed(2);
        setTimeout(function(){
            document.getElementsByTagName("h1")[0].innerText = "Your internet speed is: \n" + bps + " bps\n" + speedInKbps + " kbps\n" + speedInMbps + " Mbps\n";
        }, 8000);
    }