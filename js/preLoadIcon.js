/**
 * Created by Niboon on 2015-02-24.
 */
jQuery(document).ready(function() {
    //grab the loading icon screen
    var loading = jQuery(".loadicon");

//remove the loading icon screen when page is ready
    jQuery(window).ready(function () {
        loading.delay(250).fadeOut(600);
    });
});