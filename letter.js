let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    var audio = new Audio("love.mp3");

    audio.setAttribute("onended", "document.getElementById('test').innerHTML = 'working'");

    audio.play();

let i =0
let str = ' My heartbeat....Loving you taught a lots of things to me — things I thought never existed.I noticed that you’re the person I need to survive. You are the air my nostrils needs, the food which my soul needs. You are my heartbeat — this is the reason why I don’t want to lose you because I won’t be able to bear the pain. If Love was taken as the biggest coding challenge in the world, then I should be given the prize because I’ve conquered it. What I feel for you is so strong, I haven’t felt that way for anyone else You have given me a perfect gift, only my heart can understand. You have trapped me in the web of Love because loving you is now like a sickness, and I want to be sick all the life. You are the best friend I never had, and you’re also a family to me — the family I never had. Meeting with you has shown me how beautiful and marvelous it is to have someone who can love you in return. I will do anything within my reach, just to spend my whole life with you.I Have adored all that you have shared with me, the gentle touch of your hands, your warm hugs, your loving kisses, and the feel of your soft  skin,  holding your hand. I am shocked what you have done to my heart.Sweetie, I purple you.  I love to feel the  peace of your loving arms and . I love to to feel the love and desire of your  touch. I want to swim in the warm sea of your love, want to be surrounded by it, . I want to hold you close and never let you go.With all the love  I love you, My Queen'


let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },190);  
}, 55);  

function appearBackground(){
setTimeout(()=>{
box.style.opacity=0.8
},150)
}
appearBackground()

})