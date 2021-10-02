// UI
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const year = document.getElementById('year');

const countdown = document.getElementById('countdown');

const loading = document.getElementById('loading');

const currentyear = new Date().getFullYear();
// console.log(currentyear);

const newyeartime = new Date(`January 01 ${currentyear + 1} 00:00:00`);
// console.log(newyeartime);

year.textContent = currentyear+1; /*auto ပြောင်းအောင် innerText နဲ့သုံး*/


function updatecountdown(){
    // console.log('hay');
    const currenttime = new Date();
    // console.log(currenttime);

    const diff = newyeartime - currenttime;
    // console.log(diff);

                            // ms    s    min  h   d
    const d = Math.floor(diff / 1000 / 60 /60 / 24);
    // console.log(d);

    // Math.floor() က နောက်က ဒသမတွေကို ဖျောက်ပီး ကိန်းပြည့်ပဲ ပြစေချင်လို့

    const h = Math.floor(diff / 1000 / 60 /60 ) % 24;
    // console.log(h);
    // hour ကိုရှာချင်ရင် modulas (%) နဲ့ တွက်ပေးရတယ်

    const m = Math.floor(diff / 1000 / 60 ) % 60;
    // console.log(m);

    const s = Math.floor(diff / 1000 ) % 60;
    // console.log(s);

    days.textContent = d;
    hours.textContent = h < 10 ? "0"+h : h; // ? နောက်က အမှန် : အနောက်က အမှား
    minutes.innerText = m < 10 ? "0"+m : m;
    seconds.innerText = s < 10 ? "0"+s : s;
}

//setTimeout(function,ms)>>> 1000ms ပြည့်ရင် ပျောက်သွားအောင်
setTimeout(()=>{
    loading.remove();
    countdown.style.display= "flex";
},1000);
//arrow function နဲ့တွဲသုံးထားတာ
//loading ကို ဖျောက်ချင်လို့ remove() ဆိုတဲ့ function ကိုသုံး

setInterval(updatecountdown,1000);
// reload လုပ်ပေး >>> setInterval(function , ms)