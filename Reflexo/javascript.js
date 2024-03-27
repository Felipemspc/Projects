$(document).ready(function () {
  // Função para mostrar o tempo de reação dos usuários.
  function displayResults() {
    let reactionTimes =
      JSON.parse(sessionStorage.getItem("reactionTimes")) || [];
    if (reactionTimes.length === 0) {
      alert("No reaction times recorded yet.");
    } else {
      let resultMessage = "Reaction times:\n";
      for (let i = 0; i < reactionTimes.length; i++) {
        resultMessage += i + 1 + ". " + reactionTimes[i] + " seconds\n";
      }
      alert(resultMessage);
    }
  }

  // Botão que mostra os resultados.
  $("#checkResults").click(function () {
    displayResults();
  });

  $("#clickToBegin").click(function () {
    $(this).hide();
    let containerWidth = $("#container").width();
    let containerHeight = $("#container").height();
    let targetWidth = $("#target").width();
    let targetHeight = $("#target").height();
    let randomX = Math.random() * (containerWidth - targetWidth);
    let randomY = Math.random() * (containerHeight - targetHeight);

    $("#target")
      .css({ left: randomX + "px", top: randomY + "px" })
      .show();

    let startTime = new Date().getTime();
    $("#target")
      .off("click")
      .on("click", function () {
        let endTime = new Date().getTime();
        let reactionTime = (endTime - startTime) / 1000;
        alert(
          "Your Reaction Time is: " + reactionTime.toFixed(2) + " seconds."
        );

        //Guardando o tempo de reação dentro do sessionStorage.
        let reactionTimes =
          JSON.parse(sessionStorage.getItem("reactionTimes")) || [];
        reactionTimes.push(reactionTime.toFixed(2));
        sessionStorage.setItem("reactionTimes", JSON.stringify(reactionTimes));

        $("#target").hide();
        $("#clickToBegin").show();
      });
    setTimeout(function () {
      $("#target").hide();
      $("#clickToBegin").show();
    }, Math.random() * 3000 + 1000);
  });
});
