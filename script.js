const progressContainerSection = document.querySelector('.overview')
const progressBar = document.querySelector('.progress-bar')

function getPosition(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition;
}

function isScrolledIntoView(el) {
    // height of section
    const sectionHeight = el.offsetHeight
    // console.log('height of section',sectionHeight)

    // distance from top 
    const distFromTop = getPosition(el)
    // console.log(distFromTop)


    let percent = sectionHeight - (distFromTop - window.scrollY) + '%'
    console.log('percent scroll', percent)

    progressBar.style.height = percent 

    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;




    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

function updateProgressBar(){
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`
    // console.log(scrollPercent)
}


document.addEventListener('scroll', function(){
    if(isScrolledIntoView(progressContainerSection)){
        // console.log('visible')
        updateProgressBar();
    } else console.log('not visible')
})