const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var divisions;
    

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


divisions = new Divisions(50,50,5,10)











}




  function draw(){
background(0)
Engine.update(engine)
drawSprites()
    }