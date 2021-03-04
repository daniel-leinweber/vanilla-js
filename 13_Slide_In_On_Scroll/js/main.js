const images = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {

    var timeout;

    return function() {
        
        var context = this;
        var args = arguments;
        
        var later = function() {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        
        if (callNow) {
            func.apply(context, args);
        }

    };

};

function checkSlide(e) {

    images.forEach(image => {

        const slideInAt = (window.scrollY + window.innerHeight) - (image.height / 2);
        const imageBottom = image.offsetTop + image.height;
        const isImageHalfShown = slideInAt > image.offsetTop;
        const isImageNotScrolledPast = window.scrollY < imageBottom;

        if (isImageHalfShown && isImageNotScrolledPast) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }

    });

}

window.addEventListener('scroll', debounce(checkSlide));