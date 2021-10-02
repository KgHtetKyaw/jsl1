// UI
const togglebtn = document.getElementById('toggle');
const openbtn = document.getElementById('open');

const modal = document.getElementById('modal');
const closebtn = document.getElementById('close');

// Event Listener NAV
togglebtn.addEventListener('click',()=>{
    // console.log('hay');
    document.body.classList.toggle('shownav'); //toggle က add and remove နှစ်ခုကို လုပ်ပေး (toggle မှာ className မရ)
});

// Show Modal (css မှာ‌ ဖျောက်ထားတာကို ပြန်ခေါ်)
openbtn.addEventListener('click',()=>{
    modal.classList.add('showmodal');
});

// Close Modal
closebtn.addEventListener('click',()=>{
   modal.classList.remove('showmodal');
});

// Hide Modal on outside click
// window.addEventListener('click',(e)=>{
//     // console.log(e.target);
//
//     if(e.target === modal){
//         modal.classList.remove('showmodal');
//     }
// });

// Single Line (Hide Modal)
window.addEventListener('click',(e)=>e.target === modal ? modal.classList.remove('showmodal') : false);

// 2AL2 WDF4076