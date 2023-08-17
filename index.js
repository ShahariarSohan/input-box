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
        textArea.style.fontStyle =''
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