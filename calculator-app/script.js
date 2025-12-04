let calculation = "";
document.querySelectorAll('.js-button').forEach((button)=>{
    button.addEventListener('click',()=>{
       const value = button.dataset.numberId;
       if(value === '='){
        calculation = eval(calculation);
        showTotal(calculation);
       }else{
        calculation += value;
        showTotal(calculation);
       }
       
    })
})

function showTotal(value){
    document.querySelector('.js-total').innerHTML = `${value}`
}