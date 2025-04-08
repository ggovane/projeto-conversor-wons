const currentWonValue = 0.0040;

function conversor() {
  const imgBackground = document.querySelector('.container');
  
  const wonInputValue = document.getElementById("wonInputValue");
  const convertInputValueToNumber = parseFloat(wonInputValue.value);
  
  const wonToReals = convertInputValueToNumber * currentWonValue;
  
  const getResult = document.getElementById('result');
  
  getResult.innerHTML = `O valor em reais é R$ ${wonToReals.toFixed(2)}`;
  
  
  imgBackground.style.background = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d96bb958-4e6c-4ce0-9447-fbe226fbbecf/djihrhv-b8e81ae0-bd11-4279-8406-7f7943897e7e.jpg') no-repeat center center/cover";
}
