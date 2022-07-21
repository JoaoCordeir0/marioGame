<?php
session_start();
$_SESSION['start-game'] = True;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo do mario</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/style-lvl-<?php echo $_GET['level'] ?>.css">
</head>

<body>
    <div class="game-board">
        <img class="nuvem" src="img/clouds.png" alt="">
        <img class="mario" src="img/mario.gif" alt="">
        <img class="pipe" src="img/pipe.png" alt="">
    </div>   
    <div class="game-over">
        <h1>Game Over</h1>
        <button onclick="history.go(0)">Jogar novamente</button> <br> <br> <br>
        <p>ou</p><br> <br> <br>
        <a href="mario">Volte para o menu</a>
    </div>
    <div class="bycordeiro">
        By Cordeiro
    </div>
</body>

<?php if ($_GET['level'] == "deus") { ?>
    <script src="js/deus.js"></script>
<?php } else { ?>
    <script src="js/script.js"></script>
<?php } ?>

</html>