let isNavOpen = false;

$(document).click(function() {
    $('.dropdown-holder').each(function(index){
        CloseDropdown($(this))
    })
});

const OpenNav = ()=>{
    isNavOpen = !isNavOpen
    if(isNavOpen) $('.navlist').addClass('nav-show')
    else {
        $('.navlist').removeClass('nav-show')
        $('.navlist').removeClass('nav-hide')
        $('.navlist').on('transitionend',()=>{
            $('.navlist').addClass('nav-hide')
        })
    }
}
$('.nav-open,.nav-close').on('click',()=>{
    OpenNav()
})

//dropdown

const TriggerDropdown = (dropdown,e)=>{
    

    const thisHolder = dropdown 
    if(thisHolder.hasClass('open')){
        let activeChild
        thisHolder.removeClass('open')
        thisHolder.children().eq(1).removeClass('dropdown-show')
        if(!e) return
        thisHolder.children().eq(1).children().each(function(index){
            child = $(this)
            child.hasClass('dropdown-active')?activeChild=$(this):''
            target = $(e.target)
        })
        
        if(target.hasClass('dropdown-item')){
            activeChild.removeClass('dropdown-active')
            target.addClass('dropdown-active')
            $(thisHolder.children().eq(0)).text(target.text())
        }
    }else{
        thisHolder.addClass('open')
        thisHolder.children().eq(1).addClass('dropdown-show')
    }
    console.log(e.target)
}
const CloseDropdown = (dropdown,e)=>{
    const thisHolder = dropdown 
    thisHolder.removeClass('open')
    thisHolder.children().eq(1).removeClass('dropdown-show')
}
$('.dropdown-holder').on('click',function(e){
    const target = $(this)
    TriggerDropdown($(this),e)
    e.stopPropagation();
})