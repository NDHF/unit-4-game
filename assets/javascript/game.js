var lukeHP = 100;
var obiWanHP = 101;
var darthSidiousHP = 102;
var darthMaulHP = 103;

var lukeBaseAttackPower = 6;
var obiWanBaseAttackPower = 7;
var darthSidiousBaseAttackPower = 8;
var darthMaulBaseAttackPower = 9;

var attackMultiplier = 0;

$("#lukeHP").html(lukeHP);
$("#obiWanHP").html(obiWanHP);
$("#sidiousHP").html(darthSidiousHP);
$("#maulHP").html(darthMaulHP);

$(document).ready(function () {

    function playerAttackMessage(playerCharacter, attack) {
        $("#playerAttack").html(playerCharacter + " attacks for " + attack + " points.");
    };

    function enemyAttackMessage(opponent, attack) {
        $("#enemyAttack").html(opponent + " attacks for " + attack + " points.");
    };

$(".roster").on("click", function() {

    // alert($(this).attr("id"));

    $("#enemySelect").append($(this).siblings());
    $("#yourCharacterDiv").append($(this));
    $("#characterRoster").remove();

    $(".roster").off("click");

    $("#yourCharacterDiv").children().addClass("yourCharacter");
    $("#yourCharacterDiv").children().removeClass("roster");
    $("#enemySelect").children().addClass("enemy");
    $("#enemySelect").children().removeClass("roster");

    function enemyClick() { 
        $(".enemy").on("click", function() {
        // alert("A div with the class 'enemy' was clicked.");
        $("#defenderDiv").append($(this));
        $("#defenderDiv").children().addClass("defender");
        $(".enemy").off("click");

    });

    };

    enemyClick();

    $("#combatButton").on("click", function() {
        // alert("Player is: " + $("div.yourCharacter").attr("id"));
        // alert("Enemy is: " + $("div.defender").attr("id"));
        attackMultiplier++;
    
        var lukeAttack = lukeBaseAttackPower * attackMultiplier;
        var obiWanAttack = obiWanBaseAttackPower * attackMultiplier;
        var darthSidiousAttack = darthSidiousBaseAttackPower * attackMultiplier;
        var darthMaulAttack = darthMaulAttack * attackMultiplier;

        var lukeCounterattack = 10;
        var obiWanCounterattack = 12;
        var darthSidiousCounterattack = 13;
        var darthMaulCounterattack = 14;
    
        if ($("div.yourCharacter").attr("id") === "luke") {
    
            playerAttackMessage("Luke", lukeAttack)
    
            if ($("div.defender").attr("id") === "obiWan")  {
                obiWanHP -= lukeAttack;
                $("#obiWanHP").html(obiWanHP);
                lukeHP -= obiWanCounterattack;
                $("#lukeHP").html(lukeHP);
                enemyAttackMessage("Obi-Wan", obiWanCounterattack);
            } 
        }
    
        if ($(".defender p").html() <= 0) {
            $("#defenderDiv").children().remove();
            $("#playerAttack").html("Player Wins! Choose your next opponent...");
            $("#enemyAttack").html("");
            enemyClick();
        }
        
    
    });
    
});

});

// $("div.defender").remove();
            // $("div.defenderDiv").children().remove();
    