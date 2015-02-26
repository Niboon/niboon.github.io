/**
 * Created by Niboon on 2015-02-24.
 */
jQuery(document).ready(function() {
    //grab the loading icon screen
    var loading = jQuery(".loadicon");
    var page = jQuery('#loadedPage');
    //remove the loading icon screen when page is ready
    jQuery(window).ready(function () {
        setTimeout(function(){
            loading.fadeOut(300);
        }, 550);
        setTimeout(function(){
            page.fadeIn(450);
        }, 400);
    });
});