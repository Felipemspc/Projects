$(document).ready(function () {
  $("#clickToBegin").click(function () {
    $(this).hide();
    let containerWidth = $("#container").width();
    let containerHeight = $("#container").height();
    let targetWidth = $("#target").width();
    let targetHeight = $("#target").height();
    let randomX = Math.random() * (containerWidth - targetWidth);
    let randomY = Math.random() * (containerHeight - targetHeight);

    $("#target")
      .css({
        left: randomX + "px",
        top: randomY + "px",
      })
      .show();

    let startTime = new Date().getTime(); // Guarda a contagem de tempo

    $("#target")
      .off("click")
      .on("click", function () {
        let endTime = new Date().getTime();
        let reactionTime = (endTime - startTime) / 1000;
        alert("Your reaction time is: " + reactionTime.toFixed(2) + " seconds");
        $("#target").hide();
        $("#clickToBegin").show();
      });

    setTimeout(function () {
      $("#target").hide();
      $("#clickToBegin").show();
    }, Math.random() * 3000 + 1000); // Random delay between 1 to 4 seconds
  });
});
