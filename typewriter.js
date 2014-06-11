! function (window, undefined) {

    var i = 0;
    var $ = function (id) {
        return document.getElementById(id);
    }
    var text = $("text")
    var typeWriter = function (arr) {
        text.innerHTML += arr[i];
        i++;
    }
    var speak = "Your mother";
    var loop = setInterval(function () {
        typeWriter(speak)
        if (i === speak.length)
            clearInterval(loop);
    }, 100);

}(window);
