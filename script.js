let startmenu=document.getElementsByClassName('startmenu')[0];
let taskbar=document.getElementsByClassName('taskbar')[0];
taskbar.addEventListener("click", ()=>{
    
     
    if(startmenu.style.bottom =='-655px')
    {

        console.log('hellow');
        startmenu.style.bottom='50px';
    }
    else{
        startmenu.style.bottom='-655px';
    }

    
    
})
