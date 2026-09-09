// ===== EDIT YOUR MESSAGES HERE =====
const memories=[
{id:"favorite",label:"My favorite picture of us",title:"One of my favorite pictures. ❤️",text:"This picture is one of my favorites because it reminds me how happy I am when I'm with you.\n\nI could look at this memory a thousand times and still smile."},
{id:"memory",label:"My favorite memory with you",title:"A memory I'll always keep",text:"This is one of those memories I know I'll never forget.\n\nIt's not just what we did — it's how happy I felt being there with you."},
{id:"met",label:"The day we met",title:"Where our story started",text:"I had no idea that meeting you that day would become the beginning of so many memories.\n\nI'm really glad our paths crossed."},
{id:"little",label:"The little things",title:"It's the little things",text:"Sometimes it's the smallest things about you that mean the most to me.\n\nYour laugh, your personality, the random moments, and just being around you — those are the things I appreciate more than I can explain."}
];
const finalMessage=`Izabella I honestly don’t even know where to start

because there’s so much I could say about you and about us 

but I just want you to know how much you really mean to me 

and how grateful I am that I met you I love all the big moments we’ve had together 

but I think I appreciate the little things even more 

the random conversations the stupid jokes the times we’re just sitting around doing nothing and somehow those end up being some of my favorite moments 

I love being around you and I love how you can make a normal day feel way better just by being there

you’ve given me so many memories that I know I’m going to look back on and smile about and I hope we keep making more and more of them 

I know neither of us is perfect and we’re going to have our moments but I wouldn’t trade what we have for anything because you’re someone I genuinely care about and someone I’m always going to appreciate 

I’m glad our paths crossed and I’m glad that out of all the people in the world I got to meet you I hope you always know that you’re important to me and that you have a special place in my heart I love you so much Izabella and I’m really looking forward to everything we still have ahead of us

I love you, Izabella. ❤️`;

// Later, replace null with filenames like "images/favorite.jpg"
const photos={
  favorite:"IMG_20260602_185148_624.webp",
  memory:"20260716_141417.jpg",
  met:"20250317_172040.jpg",
  little:"20260611_111959.jpg"
};
// ===== DON'T NEED TO EDIT BELOW =====
let unlocked=0;
const $=x=>document.getElementById(x);
function show(id){document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));$(id).classList.add("active");scrollTo(0,0)}
function start(){unlocked=0;render();show("gallery")}
function render(){$("count").textContent=`${unlocked} / 4`;$("cards").innerHTML=memories.map(m=>`<button class="card" onclick="choose('${m.id}',this)">${photos[m.id]?`<img src="${photos[m.id]}" style="width:100%;height:100%;object-fit:cover;border-radius:18px">`:"YOUR PHOTO<br><br>HERE"}</button>`).join("")}
function choose(id,card){let m=memories[unlocked];if(id!==m.id){$("wrong").textContent="Not this memory yet... ❤️ Try another one.";setTimeout(()=>$("wrong").textContent="",1800);return}$("num").textContent=`MEMORY ${unlocked+1} OF 4`;$("label").textContent=m.label;$("title").textContent=m.title;$("text").textContent=m.text;$("bigPhoto").innerHTML=photos[id]?`<img src="${photos[id]}" style="width:100%;height:100%;object-fit:cover">`:"YOUR PHOTO HERE";unlocked++;show("memory")}
function back(){if(unlocked===4){$("letter").textContent=finalMessage;show("final")}else{render();show("gallery")}}
