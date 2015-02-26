/**
 * Created by Niboon on 2015-02-24.
 */
jQuery(document).ready(function() {
    var layer = skel.plugins.layers.get('navPanel');
    //grab the loading icon screen
    var loading = jQuery(".loadicon");
    layer.on('showend', function() {
        //remove the loading icon screen when layers are ready
        loading.delay(250).fadeOut(600);
    });
});
