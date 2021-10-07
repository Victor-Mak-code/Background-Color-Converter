
function colorChangerCtrl(){
    var textInput = document.querySelector('.header__text--input');
    var body = document.querySelector('.body');
    var textValidator = textInput.value;

     if(textValidator === ''){
        alert('Field is Empty!!')
    }

    else{

            var textValidator = textInput.value;
            var isColor = new Option().style;
            isColor.color = textValidator.toLowerCase()
    
            if(isColor.color == textValidator.toLowerCase()){
    
                body.style.backgroundColor = textValidator;
                body.style.color = 'white';
    
                if(isColor.color === 'white'){
                    body.style.color = 'black';
                }
                body.style.transition = '1s ease-out';
                
                clearFields()
            }

            
    
    
            else{
                alert('You typed a wrong color');
                clearFields()
            }
    
     
    }

}



//clear text inputs controller
function clearFields(){
    var textInput, textArr;
    textInput = document.querySelectorAll('.header__text--input');
    textArr = Array.prototype.slice.call(textInput);

    textArr.forEach(function(current, index, value){
        current.value = '';
    })

    textArr[0].focus()
    
}

document.querySelector('.btn').addEventListener('click', colorChangerCtrl);

document.querySelector('.body').addEventListener('keypress', function(event){

    if(event.keyCode === 13){
        colorChangerCtrl()
    }
 

});