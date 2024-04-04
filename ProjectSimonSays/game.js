let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let gameRunning = false;
let wrong = new Audio("/ProjectSimonSays/sounds/wrong.mp3");
let level = 0;

$(document).ready(function () {
  function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    let $selectedButton = $("#" + randomChosenColour);
    $selectedButton.fadeOut(100).fadeIn(100);
    // incrementando o level do jogo
    level++ 

    $("#level-title").text("Level " + level);
    
    playSound(randomChosenColour); // Call playSound() with the randomChosenColour
  }

  // Adicionando evento de clique aos botões
  $("button").click(function () {
    let userChosenColour = $(this).attr("id");
    // Adicionando os botões clicados ao array userClickedPattern
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern); // Verifica se os botões clicados estão sendo adicionados corretamente
    playSound(userChosenColour); // Call playSound() with the userChosenColour
    animatePress(userChosenColour);
    
    //chamando funcao checkAnswer após o usuario ter clickado e escolhido a sua cor.
    checkAnswer(userClickedPattern.length-1);
    
  });

  //criando função checkAnswer para verificar se o usuário esta fazendo as escolhas corretas.
  function checkAnswer(currentLevel) {
    // Comparando oo padrao de escolhas do usuario com o do jogo
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
      console.log("Success!");
      // verificando se o usuário acertou nas escolhas de cores.
      if (userClickedPattern.length === gamePattern.length) {
        //inicializando o proximo level apos um delay de 100milisegundos
        setTimeout(function () {
          nextSequence();
        }, 1000);
        userClickedPattern = [];
      }
    } else {
        //adcionando Som de Error quando o usuário errar a cor.
     wrong.play()
     $("body").addClass("game-over")
     setTimeout(function(){
        $("body").removeClass("game-over")
     },200)
     $("h1").text("Game Over, Press Any Key to Restart");
     $(document).one("keypress", function(event) {
        if (event.key !== "a") {
            restartGame();
        }
     })
     
    }
  }
 

  // Função para reproduzir o som
  function playSound(name) {
    let chosenSound = new Audio("/ProjectSimonSays/sounds/" + name + ".mp3");
    chosenSound.play();
  }

  function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    //Removendo a classe "Pressed" depois de 100milisegundos
    setTimeout(function () {
      $("#" + currentColour).removeClass("pressed");
    }, 100);
  }
  //Detectando se a tecla A foi pressionada  para iniciar o jogo. e trazendo a variavel booleana para ter certeza que o jogo nao vai iniciar de novo após ja ter sido iniciado.
  $(document).keypress(function (event) {
    if (event.key === "a" && !gameRunning) {
      nextSequence();
      // adcionar texto level 1 / level 2 etc.....
     
     $("#level-title").text("Level " + level);
         gameRunning = true;
        
    }
    
  });
   //função para reiniciar o jogo.
   function restartGame() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    gameRunning = false;
    $("h1").text("Press A Key to Start");
  }
 

});



