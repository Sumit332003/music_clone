var poster=document.querySelector(".left");
var play=document.querySelector("#play")
var forwd=document.querySelector("#forward")
var backwd=document.querySelector("#backword")
//var sName=document.querySelector("#sName")



var arr2=[
    {songName:"Aarzoo",url:"./Song/Aarzoo.mp3" , image:"./img/img.jpg"},
    {songName:"Khwab",url:"./Song/Khwab.mp3" , image:"./img/img2.jpg"},
    {songName:"Ok_Jaanu",url:"./Song/okJaanu.mp3" , image:"./img/img4.jpg"},
    {songName:"Tere Pyar Mein",url:"./Song/Tere_Pyar.mp3" , image:"./img/img3.jpg"},
    {songName:"Kaash Aisa Hota",url:"./Song/Kaash.mp3" , image:"./img/heart.jpg"},
    ];
    var audio = new Audio();
   
    var selectSong = 0;
function mainFunction(){
   var clutter ="";
   arr2.forEach(function(elm,index){

      clutter = clutter + `<div class="song-card" id=${index}> 
      <div class="part1">
           <img src="${elm.image}" alt="">
           <h2>${elm.songName}</h2>
       </div>
      <h6>3.56</h6>
   </div>`
  
   })



   // var clutter2 ="";
   // arr2.forEach(function(elm,index){

   //    clutter2 = clutter2 + ` 
   //         <h2>${elm.songName}</h2>`
       
   // })
  document.querySelector(".all_songs").innerHTML=clutter;
  console.log(clutter);
  audio.src=arr2[selectSong].url
   poster.style.backgroundImage = `url(${arr2[selectSong].image})`
 //  poster.style.backgroundImage = `url(${arr2[selectSong].image.songName})`
// poster.innerHTML=`<h2>${elm.songName}</h2>`
//aposter.innerHTML=clutter2

}
mainFunction()

document.querySelector(".all_songs")
.addEventListener("click",function(dets){
    // console.log(arr2[dets.target.id].url)
 //  audio.src=arr2[dets.target.id].url
   selectSong=dets.target.id
  play.innerHTML="play"
  flag=1
   mainFunction();
    audio.play();
})


var flag = 0

play.addEventListener("click",function(){
   if(flag==0){
      play.innerHTML="play"
      mainFunction()
      audio.play()
      flag=1
   }
   else{
      play.innerHTML="pause"
      mainFunction()
      audio.pause()
      flag=0;
   }
})

forwd.addEventListener("click",function(){
     if(selectSong < arr2.length-1){
      selectSong++
      mainFunction()
      audio.play()
      backwd.style.opacity=1
     }else{
      forwd.style.opacity=0.3
     }
})

backwd.addEventListener("click",function(){
   if(selectSong >0){
    selectSong--
    mainFunction()
    audio.play()
    forwd.style.opacity=1
   }else{
    backwd.style.opacity=0.3
    
   }
})
