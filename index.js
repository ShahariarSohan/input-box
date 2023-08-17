
// text style
document.getElementById('bold-btn').addEventListener('click',function(){
    const textArea = document.getElementById('text-area')
    if(textArea.style.fontWeight ==='bold'){
        textArea.style.fontWeight ='normal'
    }
    else{
        textArea.style.fontWeight='bold'
    }
})
document.getElementById('italic-btn').addEventListener('click',function(){
    const textArea = document.getElementById('text-area')
    if(textArea.style.fontStyle ==='italic'){
        textArea.style.fontStyle ='normal'
    }
    else{
        textArea.style.fontStyle='italic'
    }
})
document.getElementById('underline-btn').addEventListener('click',function(){
    const textArea = document.getElementById('text-area')
    if(textArea.style.textDecoration ==='underline'){
        textArea.style.textDecoration ='none'
    }
    else{
        textArea.style.textDecoration='underline'
    }
})
// text align
document.getElementById('left-btn').addEventListener('click',function(){
    const textArea =document.getElementById('text-area')
    textArea.style.textAlign ="left"
})
document.getElementById('center-btn').addEventListener('click',function(){
    const textArea =document.getElementById('text-area')
    textArea.style.textAlign ="center"
})
document.getElementById('right-btn').addEventListener('click',function(){
    const textArea =document.getElementById('text-area')
   textArea.style.textAlign ="right"
})
document.getElementById('justify-btn').addEventListener('click',function(){
    const textArea =document.getElementById('text-area')
   textArea.style.textAlign ="justify"
})
// font size 
    const fontSizeInput = document.getElementById("font-size-input");

fontSizeInput.addEventListener("input", function() {
    const textArea = document.getElementById("text-area");
    const newSize = fontSizeInput.value + "px";
    textArea.style.fontSize = newSize;
});
// color change
    const colorPicker = document.getElementById('color-picker');

        colorPicker.addEventListener('input', function() {
            const textArea = document.getElementById("text-area");
            const selectedColor = colorPicker.value;
            textArea.style.color = selectedColor;
        });

// letter case        
const lowercaseButton = document.getElementById('lower-case-btn');
const uppercaseButton = document.getElementById('upper-case-btn');

lowercaseButton.addEventListener('click', function() {
    const textArea = document.getElementById('text-area');
    textArea.value = textArea.value.toLowerCase();
});

uppercaseButton.addEventListener('click', function() {
    const textArea = document.getElementById('text-area');
    textArea.value = textArea.value.toUpperCase();
});
