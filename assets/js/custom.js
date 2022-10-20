// side nav toggle
function sideNavToogle() {
    const sideNav = document.querySelector('.sideNav');
    const style = getComputedStyle(sideNav);
    if (style.width == '0px') {
        sideNav.style.width = '300px';
        sideNav.style.overflow = 'auto';
    } else {
        sideNav.style.width = '0px';
        sideNav.style.overflow = 'hidden';
    }
}

//  copy link 
const copyLink = () => {
    /* Get the text field */
    var copyText = document.getElementById("link-input");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    Swal.fire({
        icon: 'success',
        title: 'You copied the link',
        showConfirmButton: false,
        timer: 1500
    })
}


