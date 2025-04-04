const button=document.querySelector('button');
button.addEventListener('click',()=>{
    // 1 Read the data
    const num1=document.getElementById('first');
    const input1=num1.value;  // data retrieval ke liye 

    const num2=document.getElementById('second');
    const input2=num2.value;

    // 2 Show the result

    const result=(input2/(input1*input1));

    console.log(result);

    const re=document.getElementById('result')
    re.textContent="Your BMI is :- "+ (result)+" kg/m^2";
})