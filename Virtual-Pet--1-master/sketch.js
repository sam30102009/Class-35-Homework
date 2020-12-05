var dog,di1,di,database,foodS,foodStock;

function preload(){
di = loadImage("images/dogImg.png");
di1 = loadImage("images/dogImg1.png");
}

function setup() {
createCanvas(500,500);
database = firebase.database();
foodStock=database.ref('food')
foodStock.on("value",readStock);
dog = createSprite(250,250,10,10);
dog.addImage(di);
dog.scale = 0.3
}


function draw() {  
background(46, 139, 87);

textSize(20)
fill("Black")
textAlign(CENTER,CENTER)
text("Note: Press UP_ARROW To feed Drgo Milk",250,100);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(di1);
}

drawSprites();
}

function readStock(data){
foodS=data.val()
}

function writeStock(x){
if(x<=0){
x=0
}else{
x=x-1;
}
  database.ref('/').update({
food:x
})
}