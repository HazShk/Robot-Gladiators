var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//Log Multiple values at once
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
  window.alert("Welcome to Robot Gladiators");
  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle?"
  );
  if (promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        " . " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    //check enemy health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died. ");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );
    //check player health
    if (playerHealth <= 0) {
      window.alert((playerName = " has died "));
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } else if (promptFight === "skip" || "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    //if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye.");
      //subrtract money form playerMoney for skipping
      playerMoney = playerMoney - 2;
      console.log(playerMoney);
    }
    //if no (false), ask question again by running fight function again
    else {
      fight();
    }
  } else {
    window.alert("You need to choose a valid option. Try again.");
  }
};
fight();
