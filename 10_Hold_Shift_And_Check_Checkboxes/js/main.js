const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastCheckedItem;

function handleCheck(e) {
    
    let isInBetween = false;
    
    if (e.shiftKey && this.checked) {
    
        checkboxes.forEach(checkbox => {
            
            if (checkbox === this || checkbox === lastCheckedItem) {
                isInBetween = !isInBetween;
            }

            if (isInBetween) {
                checkbox.checked = true;
            }

        });

    }

    lastCheckedItem = this;

}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));