! function (window, document, undefined) {

    var i = 0,
        text = document.getElementById("text"),
        speak = "Your mother",
        loop  = function() {
          return typeof speak[i] !== 'undefined' ? 
          false : setTimeout(function() {
              text.innerHTML = speak[i];
              i++;
              loop();
          },4)
            
        };

}(window, document);
