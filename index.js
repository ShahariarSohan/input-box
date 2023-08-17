
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