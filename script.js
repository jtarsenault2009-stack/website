// ===== EDIT YOUR MESSAGES HERE =====
const memories=[
{id:"favorite",label:"My favorite picture of us",title:"One of my favorite moments ❤️",text:"This picture is one of my favorites because it reminds me how happy I am when I'm with you.\n\nI could look at this memory a thousand times and still smile."},
{id:"memory",label:"My favorite memory with you",title:"A memory I'll always keep",text:"This is one of those memories I know I'll never forget.\n\nIt's not just what we did — it's how happy I felt being there with you."},
{id:"met",label:"The day we met",title:"Where our story started",text:"I had no idea that meeting you that day would become the beginning of so many memories.\n\nI'm really glad our paths crossed."},
{id:"little",label:"The little things",title:"It's the little things",text:"Sometimes it's the smallest things about you that mean the most to me.\n\nYour laugh, your personality, the random moments, and just being around you — those are the things I appreciate more than I can explain."}
];
const finalMessage=`I don't think I could ever fit everything I feel for you into one website, but I wanted to try.

Thank you for every laugh, every memory, every conversation, and every little moment we've shared.

You make so many ordinary moments feel special, and I'm genuinely grateful for all the time I get to spend with you.

I hope we keep making memories that we'll look back on someday and smile about.

No matter how much time passes, I'll always be thankful that I met you.

I love you, Izabella. ❤️`;

// Later, replace null with filenames like "images/favorite.jpg"
const photos={
  favorite:"20260611_111959.jpg",
  memory:"IMG_20260602_185148_624.webp",
  met:"20250317_172040.jpg",
  little:"20260716_141417.jpg"
};
// ===== DON'T NEED TO EDIT BELOW =====
let unlocked=0;
const $=x=>document.getElementById(x);
function show(id){document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));$(id).classList.add("active");scrollTo(0,0)}
function start(){unlocked=0;render();show("gallery")}
function render(){$("count").textContent=`${unlocked} / 4`;$("cards").innerHTML=memories.map(m=>`<button class="card" onclick="choose('${m.id}',this)">${photos[m.id]?`<img src="${photos[m.id]}" style="width:100%;height:100%;object-fit:cover;border-radius:18px">`:"YOUR PHOTO<br><br>HERE"}</button>`).join("")}
function choose(id,card){let m=memories[unlocked];if(id!==m.id){$("wrong").textContent="Not this memory yet... ❤️ Try another one.";setTimeout(()=>$("wrong").textContent="",1800);return}$("num").textContent=`MEMORY ${unlocked+1} OF 4`;$("label").textContent=m.label;$("title").textContent=m.title;$("text").textContent=m.text;$("bigPhoto").innerHTML=photos[id]?`<img src="${photos[id]}" style="width:100%;height:100%;object-fit:cover">`:"YOUR PHOTO HERE";unlocked++;show("memory")}
function back(){if(unlocked===4){$("letter").textContent=finalMessage;show("final")}else{render();show("gallery")}}
