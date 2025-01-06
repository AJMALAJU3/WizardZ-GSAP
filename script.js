function pageOneAnimation () {
    const tl = gsap.timeline()
    
    tl.from('nav h1, nav div h4, nav div button',{
        y:-50,
        duration:1,
        opacity:0,
        stagger:0.1
    })
    
    tl.from('.center-part-1 h1',{
        x:-300,
        opacity:0,
        duration:1
    },'-=0.4')
    tl.from('.center-part-1 p',{
        x:-200,
        opacity:0,
        duration:1
    },'-=0.4')
    tl.from('.center-part-1 button',{
        x:-100,
        opacity:0,
        duration:1
    },'-=0.6')
    
    tl.from('.center-part-2', {
        opacity:0,
        scale:0.7,
        duration:1
    },'-=1')
    
    tl.from('.section1bottom img',{
        opacity:0,
        y:100,
        stagger:0.1
    },'-=0.5')
}

function pageTwoAnimation() {
    const tl = gsap.timeline({
        scrollTrigger : {
            trigger:'.section-2',
            scroller:'body',
            start: "top 80%",
            end: 'top -80%',
            scrub : true
        }
    })
    
    tl.from('.services h3',{
        x:-100,
        opacity:0,
    })
    tl.from('.services p',{
        opacity:0,
    })
    
    tl.from('.cards .card1',{
        x:-50,
        opacity:0,
    },'toone')
    
    tl.from('.cards .card2',{
        x:50,
        opacity:0,
    },'toone')
    
    tl.from('.cards .card3',{
        x:-50,
        opacity:0,
    },'totwo')
    
    tl.from('.cards .card4',{
        x:50,
        opacity:0,
    },'totwo')
    
    tl.from('.cards2 .card1',{
        x:-50,
        opacity:0,
    },'tothree')
    
    tl.from('.cards2 .card2',{
        x:50,
        opacity:0,
    },'tothree')
}

function pageThreeAnimation () {
    gsap.from('.container',{
        opacity: 0,
        y: 100,
        ease: "bounce",
        duration: 2,
        scrollTrigger: {
            trigger: '.container',
            scroller: 'body',
            start: 'top 50%',
            end: 'top -10%',
            toggleActions: 'play reverse play reverse',
        }
    });
    
}


pageOneAnimation()
pageTwoAnimation()
pageThreeAnimation()
 
    
    