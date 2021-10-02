// UI
const currencyoneel = document.getElementById('currency-one'),
     amountoneel = document.getElementById('amount-one');

const currencytwoel = document.getElementById('currency-two'),
    amounttwoel = document.getElementById('amount-two');

const swapel = document.getElementById('swap'),
    rateel = document.getElementById('rate');

function calculate(){
    // console.log('hay');

    const crcyone = currencyoneel.value;
    const crcytwo = currencytwoel.value;
    // console.log(crcyone,crcytwo);

    const apikey = "7af26576724bd705e6737970";
    const uri = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${crcyone}`;

    // AJAX Request
    // console.log(fetch(uri));
    // ဆွဲထုတ်  //json format နဲ့လာလို့ json နဲ့ခေါ်
    fetch(uri)
        .then(res=>res.json())
        .then(req=>{
        // console.log(data);
        // console.log(data.conversion_rates);
        // console.log(typeof data.conversion_rates);
        // console.log(data.conversion_rates[crcytwo]);

            const rate = req.conversion_rates[crcytwo];
            // console.log(rate);

            rateel.innerText = `1 ${crcyone} = ${rate} ${crcytwo}`;
            console.log(rateel.innerHtml);

            amounttwoel.value = (amountoneel.value * rate).toFixed(2);
    });

}


// Event Listener
currencyoneel.addEventListener('change',calculate);
amountoneel.addEventListener('input',calculate);

currencytwoel.addEventListener('change',calculate)
amounttwoel.addEventListener('input',calculate);

swapel.addEventListener('click',()=>{
    console.log('hey');

    const temp = currencyoneel.value;

    currencyoneel.value = currencytwoel.value;
    currencytwoel.value = temp;

    calculate();
});
