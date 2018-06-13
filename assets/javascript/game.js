var lukeHP = 100;
var obiWanHP = 101;
var darthSidiousHP = 102;
var darthMaulHP = 103;

$("#lukeHP").html(lukeHP);
$("#obiWanHP").html(obiWanHP);
$("#sidiousHP").html(darthSidiousHP);
$("#maulHP").html(darthMaulHP);

var playerAttack;
var enemyAttack;

$(document).ready(function () {

$(".roster").on("click", function() {

    alert($(this).attr("id"));

    $("#enemySelect").append($(this).siblings());
    $("#yourCharacterDiv").append($(this));
    $("#characterRoster").remove();

    $(".roster").off("click");

    $("#yourCharacterDiv").children().addClass("yourCharacter");
    $("#yourCharacterDiv").children().removeClass("roster");
    $("#enemySelect").children().addClass("enemy");
    $("#enemySelect").children().removeClass("roster");

    $(".enemy").on("click", function() {
        alert("A div with the class 'enemy' was clicked.");
        $("#defenderDiv").append($(this));
        $("#defenderDiv").children().addClass("defender");
        $(".enemy").off("click");

    });
    
});

});

function combat() {

    var yourHP = $(".yourCharacter p").html();
    console.log(yourHP);
    var defenderHP = $(".defender p").html();
    console.log(defenderHP);

            defenderHP - 25;
            $(".defender p").html(defenderHP);

};
