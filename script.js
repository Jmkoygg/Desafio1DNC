const Observer = new IntersectionObserver((entires)=>{
    entires.forEach((entry)=> { if(entry.isIntersecting){
        entry.target.classList.add('show')}
        else{
            entry.target.classList.remove('show')}
    })
} )
const info = document.querySelectorAll('.js')

info.forEach((element)=> Observer.observe(element))