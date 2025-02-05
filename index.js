var iframeMap = {
    "Dashboard": "https://docs.google.com/document/d/e/2PACX-1vRRCU4PUvB_wtGfXlDvmlJ1jgXgvdZTruy_4eGW70i4a3yixU4XIY9aZxEz8FJaU5-OoJddGJIO91xW/pub?embedded=true",
    "Map": "https://www.google.com/maps/d/u/6/embed?mid=1kWBQ9SNwwDjUrEqiFN1LQ6r5q6pWpGw&ehbc=2E312F&noprof=1",
    "Misc": "https://docs.google.com/document/d/e/2PACX-1vQB3aoK1ks-cDKkrYvW1mSHQBZvb806UR7yJNOkw8M39ZOahSprImaA_CyXdc7Ycy4uQj9ClsSa9nKg/pub?embedded=true"
}

// Estimated datetime for now
var countDownDate = new Date("Dec 27, 2024 16:00:00 GMT-5").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = "~" + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s till Operation Echo";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Operation Echo is In Progress";
    }
}, 1000);

let options = {
    timeZone: 'EST',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
},
    formatter = new Intl.DateTimeFormat([], options);

var x = setInterval(function () {
    document.getElementById("datetime").innerHTML = "Montreal (GMT-5)<br>" + formatter.format(new Date());
}, 1000);


// window.setInterval("reloadIFrame();", 5000);
function reloadIFrame() {
    document.getElementById("dashboard").src = "https://docs.google.com/document/d/e/2PACX-1vRRCU4PUvB_wtGfXlDvmlJ1jgXgvdZTruy_4eGW70i4a3yixU4XIY9aZxEz8FJaU5-OoJddGJIO91xW/pub?embedded=true";
    document.getElementById("map").src = "https://www.google.com/maps/d/u/6/embed?mid=1kWBQ9SNwwDjUrEqiFN1LQ6r5q6pWpGw&ehbc=2E312F&noprof=1";
    document.getElementById("traffic").src = "https://www.google.com/maps/vt/data=XHPXLaEuKujieiEd8RwyvMDhzojV5_gjWQSbPscZ_9NX2yhhyRiMCpfJoDhfSpm9eD6RZPEjKQbe1ppLMbogrTVPaicCJiBPBHmHz766KpQ3_mtYMRmd-vxBMjBbWLuO6sG_CNtcqwIHw7Dt0UNQGQGzvFshZg5HVLXmyoWyYsdRE0_vY1mezqVGFLn80Lk2KefwGc1a2Rh3tcFqNPd6p5lbeJZ6_R1qYFuQx0STM_4sx8m1u4IfFLYq1sCSj4XYgDSgS_zcwpgzDO7w5A";
    document.getElementById("misc").src = "https://docs.google.com/document/d/e/2PACX-1vQB3aoK1ks-cDKkrYvW1mSHQBZvb806UR7yJNOkw8M39ZOahSprImaA_CyXdc7Ycy4uQj9ClsSa9nKg/pub?embedded=true";
}


var x = setInterval(function () {
    Array.from(document.getElementsByClassName("cctv-reload")).forEach(
        function (element, index, array) {
            element.load()
        }
    );
}, 30000);

// document.addEventListener("DOMContentLoaded", (event) => {
//     console.log("DOM fully loaded and parsed");
//     Array.from(document.getElementsByClassName("cctv-reload")).forEach(
//         function (element, index, array) {
//             element.addEventListener('loadstart', function () {
//                 element.setAttribute("class", "cctv-reload loading");
//                 console.log("loading");
//             });
//             // element.addEventListener('canplay', function () {
//             //     element.setAttribute("class", "cctv-reload");
//             // });
//         }
//     );
// });


function openModal(block) {
    document.body.setAttribute("class", "modal-open");

    document.getElementById('card-modal').style.display = "block";
    document.getElementById("modal-title").innerHTML = block;
    document.getElementById("modal-iframe").src = iframeMap[block];
}


function closeModal() {
    document.getElementById('card-modal').style.display = "none";
    document.body.setAttribute("class", "");
    document.getElementById("modal-iframe").src = "";
}