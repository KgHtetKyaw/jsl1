// UI
// Start Formvalidation UI
const form = document.getElementById('form'),
    username = document.getElementById('username'),
    email = document.getElementById('email'),
    password = document.getElementById('password');

const containerform = document.querySelector('.container-form');
// End Formvalidation UI

// Start Exchangerate UI
const rateel = document.getElementById('rate'),
    swapbtn = document.getElementById('swap');

const currencyone = document.getElementById('currency-one'),
    amountone = document.getElementById('amount-one');

const currencytwo = document.getElementById('currency-two'),
    amounttwo = document.getElementById('amount-two');

const containerexchangerateshow = document.querySelector('.container-exchangerate');
// End Exchangerate UI

// Start Countdown UI
const year = document.getElementById('year');

const countdown = document.getElementById('countdown');
const days = document.getElementById('days'),
    hours = document.getElementById('hours'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds');

const currentyear = new Date().getFullYear();

const newyeartime = new Date(`January 01 ${currentyear + 1} 00:00:00`);

year.innerText = currentyear+1;

const containercountdown = document.querySelector('.container-newyearcountdown');
// End Countdown UI

// Start Loan Calculator
const loantime = document.getElementById('loantime');
const bubble = document.querySelector('.sp2');

const loanform = document.getElementById('loan-form'),
         resultel = document.getElementById('result');

const containerloancalculator = document.querySelector('.container-loancalculator');
// End Loan Calculator

// start Formvalidation
// Event Listener
form.addEventListener('submit',(e)=>{
   e.preventDefault();

   if(username.value === 'KgKg'){
      // console.log('ok');
      showsuccess(username,'Username is correct');
   }else{
      showerror(username,'Username is incorrect');
   }

   if(username.value === ''){
      showerror(username,'Username is required');
   }

   if(email.value === 'kgkg@gmail.com'){
      showsuccess(email,'Email is correct')
   }else{
      showerror(email,'Email is incorrect');
   }

   if(email.value === ''){
      showerror(email,'Email is required');
   }

   if(password.value === '12345'){
      showsuccess(password,'Password is correct');
   }else{
      showerror(password,'Password is incorrect');
   }

   if(password.value === ''){
      showerror(password,'Password is required');
   }

   if(username.value === 'KgKg' && email.value === 'kgkg@gmail.com' && password.value === '12345'){

      // setTimeout(hideform,800);
      hideform();

      containerexchangerateshow.classList.add('show');
      containercountdown.classList.add('show');
      containerloancalculator.classList.add('show');
   }

});


// function showerror and showsuccess
function showerror(input,message){
   const formgroup = input.parentElement;
   formgroup.classList.add('error');

   const msg = formgroup.querySelector('small');
   msg.innerText = message;
}

function showsuccess(input,message){
   const formgroup = input.parentElement;
   formgroup.classList.add('success');

   const msg = formgroup.querySelector('small');
   msg.innerText = message;
}

// function hide form
function hideform(){
   // console.log('exchange rate');
   containerform.style.visibility = 'hidden';

   const formgroup = document.getElementById('row');
   formgroup.classList.add('hidden');
}
// end Formvalidation


// start Exchange Rate
function calculate(){
   // console.log('hay');

   const crcyone = currencyone.value;
   const crcytwo = currencytwo.value;

   const amtone = amountone.value;
   const amttwo = amounttwo.value;

   const apikey = "7af26576724bd705e6737970";
   const uri = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${crcyone}`;

   // AJAX Request

   fetch(uri)
       .then(res=>res.json())
       .then(data=>{
          const rate = data.conversion_rates[crcytwo];
          rateel.innerText = `1 ${crcyone} = ${rate} ${crcytwo}`;

          amounttwo.value = (amountone.value * rate).toFixed(2);
       });

}
// Event Listener
currencyone.addEventListener('change',calculate);
amountone.addEventListener('input',calculate);

currencytwo.addEventListener('change',calculate);
amounttwo.addEventListener('input',calculate);

swapbtn.addEventListener('click',()=>{
   // console.log('swap');

   const temp = currencyone.value;

   currencyone.value = currencytwo.value;
   currencytwo.value = temp;

   calculate();

});

// end Exchange Rate


// start countdown
function updatecountdown(){
   const currenttime = new Date();

   const diff = newyeartime - currenttime;

   const d = Math.floor(diff / 1000 / 60 / 60 / 24);

   const h = Math.floor(diff / 1000 / 60 / 60) % 24;

   const m = Math.floor(diff / 1000 / 60) % 60;

   const s = Math.floor(diff / 1000) % 60;

   days.textContent = d < 100 ? "0"+d : d < 10 ? "00"+d : d;
   hours.textContent = h < 10 ? "0"+h : h;
   minutes.innerText = m < 10 ? "0"+m : m;
   seconds.innerText = s < 10 ? "0"+s : s;
}

setTimeout(()=>{
   countdown.style.display = "flex";
},0);

setInterval(updatecountdown,1000);

// end countdown


// Start Loan Calculator
loantime.addEventListener('input',()=>{
   const valu = loantime.value;
   bubble.textContent = valu > 1 ? `${valu} Months` : `${valu} Month`;
});

loanform.addEventListener('submit',function (e){
   // resultel.style.display = "none";

   setTimeout(calculateresult,500);

   e.preventDefault();
});


function calculateresult(){

   const amount = document.getElementById('loanamount');
   const interest = document.getElementById('loanpercent');

   const monthlypayment = document.getElementById('monthly'),
         totalinterest = document.getElementById('totalinterest'),
         totalpayment = document.getElementById('totalpayment');

   const getpercentamount = parseFloat(amount.value);
   const getpercentinterest = parseFloat(interest.value)/12;
   const getterm = parseFloat(loantime.value);

   const monthly = Math.round((getpercentamount * (getterm * getpercentinterest))/100);

   if(monthly){
      monthlypayment.value = ((getpercentamount+monthly)/getterm).toFixed(2);
      totalinterest.value = monthly.toFixed(2);
      totalpayment.value = (monthlypayment.value * getterm).toFixed(2);

      resultel.style.display = "block";
   }else{
      showerror1("Please check your number");
      // console.log('error');
   }
}

function showerror1(message){
   const errordiv = document.createElement('div');

   errordiv.className = "alert alert-danger";

   errordiv.appendChild(document.createTextNode(message));

   const card = document.querySelector('.card');
   const heading = document.getElementById('heading');

   card.insertBefore(errordiv,heading);

   setTimeout(clearerror,2000);
}

function clearerror(){
   document.querySelector('.alert').remove();
}

// End Loan Calculator