

// Animacion al dezplazar
// $( document ).ready(function() {
//     new WOW().init();
//   });


// progres bar  
  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 20;
        $("#dynamic")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 79)
            clearInterval(interval);
    }, 1000);
  });
// HTML, CSS
  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 16;
        $("#dynamic2")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 64)
            clearInterval(interval);
    }, 1000);
  });
// JAVASCRIPT
  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 15;
        $("#dynamic7")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 75)
            clearInterval(interval);
    }, 1000);
  });
//METABASE
  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 20;
        $("#dynamic8")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 80)
            clearInterval(interval);
    }, 1000);
  });
//POSTMAN
  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 20;
        $("#dynamic3")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 80)
            clearInterval(interval);
    }, 1000);
  });
//CHARLES
  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 18;
        $("#dynamic5")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 72)
            clearInterval(interval);
    }, 1000);
  });
  //JSON
  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 21;
        $("#dynamic9")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 84)
            clearInterval(interval);
    }, 1000);
  });
//DEVTOOLS
$(function() {
  var current_progress = 0;
  var interval = setInterval(function() {
      current_progress += 21;
      $("#dynamic10")
      .css("width", current_progress + "%")
      .attr("aria-valuenow", current_progress)
      .text(current_progress + "%");
      if (current_progress >= 84)
          clearInterval(interval);
  }, 1000);
});
  //TMS
$(function() {
  var current_progress = 0;
  var interval = setInterval(function() {
      current_progress += 22;
      $("#dynamic11")
      .css("width", current_progress + "%")
      .attr("aria-valuenow", current_progress)
      .text(current_progress + "%");
      if (current_progress >= 88)
          clearInterval(interval);
  }, 1000);
});
  // Tooltips Initialization
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// toast 
const alerta = document.querySelector("#alerta");
alerta.addEventListener("click", () =>  {
    toastr.info('Alerta', "PDF EN DESARROLLO", {"progressBar": true});

})
