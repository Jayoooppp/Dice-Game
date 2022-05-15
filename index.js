function randomNumberGenerate()
{
var random_number_1  = Math.random();
random_number_1 = parseInt((random_number_1 * 6) + 1);
return random_number_1;
}
var r1 = randomNumberGenerate();
var r2 = randomNumberGenerate();
while(r1 == r2)
{
    r1 = randomNumberGenerate();
    r2 = randomNumberGenerate();
}
console.log(r1);
console.log(r2);

document.getElementById("img1").src = "images/dice" +r1 +".png";
document.getElementById("img2").src = "images/dice" +r2 +".png";

if(r1 > r2)
{
    document.getElementById("winner").innerHTML = "Player1 Wins";
}else{
    document.getElementById("winner").innerHTML = "Player2 Wins";

}


