var originTxt;
var joinedTxt;
var fontcj;
var sentence = [];
var rcolor = [];
var gcolor = [];
var bcolor = [];

function preload(){
originTxt = loadStrings("data/TwoCities.txt");
fontcj = loadFont("data/cracj___.ttf");

}

function setup() {
  createCanvas(800, 800);
  background(255);
  //console.log(originTxt);
  joinedTxt = join(originTxt, " ");
  //console.log(joinedTxt);
  var p1begin = joinedTxt.indexOf("orderly");
  var p1end = joinedTxt.indexOf("principally");
  var endl = "principally";
  var para1 = joinedTxt.substring(p1begin, p1end + endl);// seems not work?
  //console.log(para1);
  
  var para2 = para1.replace(/Tellson/gi, "Lorry");//switch a name
  var para3 = para2.replace(/Chapter/gi, "Part");
  //console.log(para3);
  
  var London = para3.match(/London/gi);
  var Paris = para3.match(/Paris/gi);
  //console.log(London.length);
  //console.log(Paris.length);
  var UScities1 = para3.replace(/London/gi, "New York");
  var UScities2 = UScities1.replace(/London/gi, "Washington");// a tale of two US cities now.
  
  var Capti = para3.match(/([S-U])\w+/g);
  //console.log(Capti.length);
  var final = UScities2.replace(/([S-U])\w+/g, " ");//delete everyword with capital S-U
  //console.log(final); //Seem to work but unfortunately we are unable to read it now.
  
  var firstbegin = final.indexOf("Period");
  var firstfinal = final.indexOf("despair");
  var first = final.substring(firstbegin, firstfinal + 7);
  //console.log(first);// get the first paragraph from the book
  var time = [];
  
  for(var i = 0; i <= 10; i ++){
    time[0] = 0;
    sentence[10] = "it was the winter of despair";
    if(0 < i < 10){
    time[i] = first.indexOf("it ", time[i - 1] + 1);
    //console.log(time[i]);
    sentence[i] = first.slice(time[i-1], time[i]);
      rcolor[i] = random(8 * sentence[i].length);
      gcolor[i] = random(8 * sentence[i].length);
      bcolor[i] = random(8 * sentence[i].length);
    }
    if(i > 0){
    console.log(sentence[i]); // when I use the loop to split the paragraph,  
                              //the "r" of the last word (despair)disappear.
                              // I give the string to sentence[10] by myself in order to fix it
                              //but the "r" is still missing
    
    }
  }
  
 
  
  
}

function draw() {
  textFont(fontcj, 25);
  for(var i = 1; i <=10; i ++){
     fill(rcolor[i], gcolor[i], bcolor[i]);
    text(sentence[i], 50, 20 + 50 * i);
    ellipse(50 + 18 * sentence[i].length, 20 + 50 * i, 30, 30);
  }
  
}

