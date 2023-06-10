
    const header=document.getElementById("header")
    const open=document.getElementById("open")
    const close=document.getElementById("close")
    const nav_menu=document.getElementById("nav-menu")
    const body=document.getElementById("body")
    // let on_off= 0;
    // header.style.transform="translateX(-260px)"
    // document.getElementById("nav-menu").style.display="block"
    // open.addEventListener ('click', () => container.classList.add('show-nav'))

    // open.addEventListener('click', () => console.log('he'))
    open.addEventListener ('click', () =>{
        header.classList.add('transform');
        // header.classList.add('transform');
        nav_menu.classList.remove('hidden');
        open.classList.add('hidden');
        close.classList.remove('hidden')
        body.classList.add('fixed-position')
        nav_menu.focus();
        // on_off=1;
       

    })

    close.addEventListener ('click',()=>{
        header.classList.remove('transform');
        nav_menu.classList.add('hidden');
        open.classList.remove('hidden');
        close.classList.add('hidden')
        body.classList.remove('fixed-position')
        // on_off=0;
    })


    // header.addEventListener('click',()=>{
    //     if (on_off==1)
    //         console.log(on_off)
    //         // close.click();
    // })

    // nav_menu.addEventListener('focusout', () => {
    //     console.log("Hello")
    //     close.click();
    // });

    document.addEventListener('click', (event)=>{
        if(!nav_menu.classList.contains('hidden') &&!event.target.isEqualNode(open)&& !nav_menu.contains(event.target) ){
            console.log('Dang co menu')
            close.click();
        }      
    })
