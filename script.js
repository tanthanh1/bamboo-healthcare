
    const header=document.getElementById("header")
    const open=document.getElementById("open")
    const close=document.getElementById("close")
    const nav_menu=document.getElementById("nav-menu")
    // header.style.transform="translateX(-260px)"
    // document.getElementById("nav-menu").style.display="block"
    // open.addEventListener ('click', () => container.classList.add('show-nav'))

    // open.addEventListener('click', () => console.log('he'))
    open.addEventListener ('click', () =>{
        console.log('aaa');
        header.classList.add('transform');
        nav_menu.classList.remove('hidden');
        open.classList.add('hidden');
        close.classList.remove('hidden')

    })

    close.addEventListener ('click',()=>{
        header.classList.remove('transform');
        nav_menu.classList.add('hidden');
        open.classList.remove('hidden');
        close.classList.add('hidden')
    })
