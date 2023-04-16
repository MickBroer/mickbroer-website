const zenderKamers = document.getElementById("zenderKamers");
const zender = document.getElementById("zender");
const juni2022 = document.getElementById("juni2022");
const bladeren = document.getElementById("bladeren");
const iframe = document.getElementById("showcase");
const fadeInTime = 200;
let clickZK = 0;
let clickZ = 0;
let clickJuni = 0;
let clickBladeren = 0;

zenderKamers.addEventListener(
    "mouseover",
    function(){
        if (clickZK % 2 == 0){
            zenderKamers.style.color = "black";
            zenderKamers.innerHTML = "[___] ZENDER:KAMERS <i>(2023)</i>";
        }
        else{
            return;
        }   
    }
)

zenderKamers.addEventListener(
    "mouseout",
    function(){
        if (clickZK % 2 == 0){
            zenderKamers.style.color = "rgb(132, 116, 116)";
            zenderKamers.innerHTML = "[___] ZENDER:KAMERS <i>(2023)</i>";
        }
        else{
            return;
        }
    }
)

zenderKamers.addEventListener(
    "mouseDown",
    function(){
        if (clickZK % 2 == 0){
            zenderKamers.style.color = "black";
            zenderKamers.innerHTML = "[ █ ] ZENDER:KAMERS <i>(2023)</i>";

            zender.innerHTML = "[___] ZENDER <i>(2022)</i>";
            juni2022.innerHTML = "[___] juni 2022 <i>(2022)</i>";
            bladeren.innerHTML = "[___] De bladeren willen zijn maar de wind blijft maar kutten <i>(2020)</i>";

            zender.style.color = "rgb(132, 116, 116)";
            juni2022.style.color = "rgb(132, 116, 116)";
            bladeren.style.color = "rgb(132, 116, 116)";

            clickZ = 0;
            clickJuni = 0;
            clickBladeren = 0;
        }
        else{
            return;
        }
    }
)

zenderKamers.addEventListener(
    "click",
    function(){
        if (clickZK % 2 == 0){
            zenderKamers.style.color = "black";
            zenderKamers.innerHTML = "[ █ ] ZENDER:KAMERS <i>(2023)</i>";
            iframe.src = "/zenderKamers";
            zender.innerHTML = "[___] ZENDER <i>(2022)</i>";
            juni2022.innerHTML = "[___] juni 2022 <i>(2022)</i>";
            bladeren.innerHTML = "[___] De bladeren willen zijn maar de wind blijft maar kutten <i>(2020)</i>";

            zender.style.color = "rgb(132, 116, 116)";
            juni2022.style.color = "rgb(132, 116, 116)";
            bladeren.style.color = "rgb(132, 116, 116)";

            clickZ = 0;
            clickJuni = 0;
            clickBladeren = 0;
        }
        else{
            zenderKamers.innerHTML = "[___] ZENDER:KAMERS <i>(2023)</i>";
            iframe.src = "";
        }
        clickZK++;
    }
)

zender.addEventListener(
    "mouseover",
    function(){
        if (clickZ % 2 == 0){
            zender.style.color = "black";
            zender.innerHTML = "[___] ZENDER <i>(2022)</i>";
        }
        else{
            return;
        }   
    }
)

zender.addEventListener(
    "mouseout",
    function(){
        if (clickZ % 2 == 0){
            zender.style.color = "rgb(132, 116, 116)";
            zender.innerHTML = "[___] ZENDER <i>(2022)</i>";
        }
        else{
            return;
        }
    }
)

zender.addEventListener(
    "mouseDown",
    function(){
        if (clickZ % 2 == 0){
            zender.style.color = "black";
            zender.innerHTML = "[ █ ] ZENDER<i>(2022)</i>";

            zenderKamers.innerHTML = "[___] ZENDER:KAMERS <i>(2023)</i>";
            juni2022.innerHTML = "[___] juni 2022 <i>(2022)</i>";
            bladeren.innerHTML = "[___] De bladeren willen zijn maar de wind blijft maar kutten <i>(2020)</i>";

            zenderKamers.style.color = "rgb(132, 116, 116)";
            juni2022.style.color = "rgb(132, 116, 116)";
            bladeren.style.color = "rgb(132, 116, 116)";

            clickZK = 0;
            clickJuni = 0;
            clickBladeren = 0;
        }
        else{
            return;
        }
    }
)

zender.addEventListener(
    "click",
    function(){
        if (clickZ % 2 == 0){
            zender.style.color = "black";
            zender.innerHTML = "[ █ ] ZENDER <i>(2022)</i>";
            iframe.src = "/zender";

            zenderKamers.innerHTML = "[___] ZENDER:KAMERS <i>(2023)</i>";
            juni2022.innerHTML = "[___] juni 2022 <i>(2022)</i>";
            bladeren.innerHTML = "[___] De bladeren willen zijn maar de wind blijft maar kutten <i>(2020)</i>";

            zenderKamers.style.color = "rgb(132, 116, 116)";
            juni2022.style.color = "rgb(132, 116, 116)";
            bladeren.style.color = "rgb(132, 116, 116)";

            clickZK = 0;
            clickJuni = 0;
            clickBladeren = 0;
        }
        else{
            zender.innerHTML = "[___] ZENDER <i>(2022)</i>";
            iframe.src = "";
        }
        clickZ++;
    }
)

juni2022.addEventListener(
    "mouseover",
    function(){
        if (clickJuni % 2 == 0){
            juni2022.style.color = "black";
            juni2022.innerHTML = "[___] juni 2022 <i>(2022)</i>";
        }
        else{
            return;
        }   
    }
)

juni2022.addEventListener(
    "mouseout",
    function(){
        if (clickJuni % 2 == 0){
            juni2022.style.color = "rgb(132, 116, 116)";
            juni2022.innerHTML = "[___] juni 2022 <i>(2022)</i>";
        }
        else{
            return;
        }
    }
)

juni2022.addEventListener(
    "mouseDown",
    function(){
        if (clickJuni % 2 == 0){
            juni2022.style.color = "black";
            juni2022.innerHTML = "[ █ ] juni2022<i>(2022)</i>";

            zenderKamers.innerHTML = "[___] ZENDER:KAMERS <i>(2023)</i>";
            zender.innerHTML = "[___] ZENDER <i>(2022)</i>";
            bladeren.innerHTML = "[___] De bladeren willen zijn maar de wind blijft maar kutten <i>(2020)</i>";

            zenderKamers.style.color = "rgb(132, 116, 116)";
            zender.style.color = "rgb(132, 116, 116)";
            bladeren.style.color = "rgb(132, 116, 116)";

            clickZK = 0;
            clickZ = 0;
            clickBladeren = 0;
        }
        else{
            return;
        }
    }
)

juni2022.addEventListener(
    "click",
    function(){
        if (clickJuni % 2 == 0){
            juni2022.style.color = "black";
            juni2022.innerHTML = "[ █ ] juni 2022 <i>(2022)</i>";
            iframe.src = "/juni2022";

            zenderKamers.innerHTML = "[___] ZENDER:KAMERS <i>(2023)</i>";
            zender.innerHTML = "[___] ZENDER <i>(2022)</i>";
            bladeren.innerHTML = "[___] De bladeren willen zijn maar de wind blijft maar kutten <i>(2020)</i>";

            zenderKamers.style.color = "rgb(132, 116, 116)";
            zender.style.color = "rgb(132, 116, 116)";
            bladeren.style.color = "rgb(132, 116, 116)";

            clickZK = 0;
            clickZ = 0;
            clickBladeren = 0;

        }
        else{
            juni2022.innerHTML = "[___] juni 2022 <i>(2022)</i>";
            iframe.src = "";
        }
        clickJuni++;
    }
)

bladeren.addEventListener(
    "mouseover",
    function(){
        if (clickJuni % 2 == 0){
            bladeren.style.color = "black";
            bladeren.innerHTML = "[___] De bladeren willen zijn maar de wind blijft maar kutten <i>(2020)</i>";
        }
        else{
            return;
        }   
    }
)

bladeren.addEventListener(
    "mouseout",
    function(){
        if (clickBladeren % 2 == 0){
            bladeren.style.color = "rgb(132, 116, 116)";
            bladeren.innerHTML = "[___] De bladeren willen zijn maar de wind blijft maar kutten <i>(2020)</i>";
        }
        else{
            return;
        }
    }
)

bladeren.addEventListener(
    "mouseDown",
    function(){
        if (clickBladeren % 2 == 0){
            bladeren.style.color = "black";
            bladeren.innerHTML = "[ █ ] De bladeren willen zijn maar de wind blijft maar kutten <i>(2020)</i>";

            zenderKamers.innerHTML = "[___] ZENDER:KAMERS <i>(2023)</i>";
            zender.innerHTML = "[___] ZENDER <i>(2022)</i>";
            juni2022.innerHTML = "[___] juni 2022 <i>(2022)</i>";

            zenderKamers.style.color = "rgb(132, 116, 116)";
            zender.style.color = "rgb(132, 116, 116)";
            juni2022.style.color = "rgb(132, 116, 116)";

            clickZK = 0;
            clickZ = 0;
            clickJuni = 0;
        }
        else{
            return;
        }
    }
)

bladeren.addEventListener(
    "click",
    function(){
        if (clickBladeren % 2 == 0){
            bladeren.style.color = "black";
            bladeren.innerHTML = "[ █ ] De bladeren willen zijn maar de wind blijft maar kutten <i>(2020)</i>";
            iframe.src = "/bladeren";

            zenderKamers.innerHTML = "[___] ZENDER:KAMERS <i>(2023)</i>";
            zender.innerHTML = "[___] ZENDER <i>(2022)</i>";
            juni2022.innerHTML = "[___] juni 2022 <i>(2022)</i>";

            zenderKamers.style.color = "rgb(132, 116, 116)";
            zender.style.color = "rgb(132, 116, 116)";
            juni2022.style.color = "rgb(132, 116, 116)";

            clickZK = 0;
            clickZ = 0;
            clickJuni = 0;

        }
        else{
            bladeren.innerHTML = "[___] De bladeren willen zijn maar de wind blijft maar kutten <i>(2020)</i>";
            iframe.src = "";
        }
        clickBladeren++;
    }
)


positionIframe();