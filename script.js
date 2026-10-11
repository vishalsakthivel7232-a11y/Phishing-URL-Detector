document.getElementById("scanButton").onclick = function () {
    let input = document.getElementById("urlInput").value;
    let result = document.getElementById("result");

    if (input.trim() === "") {
        result.innerHTML = "Please enter a URL!";
    } else {
        result.innerHTML = "Your entered URL is: " + input;
    }
};