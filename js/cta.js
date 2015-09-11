jQuery(document).ready(function(){
    jQuery('#toggle-register-section').on('click', function() {        
         jQuery('#guide-registration').toggle('show');
         jQuery('#guide-registration-cta').toggle('show');
    });
    jQuery('#toggle-vote-section').on('click', function() {        
        jQuery('#guide-vote').toggle('show');
        jQuery('#guide-vote-cta').toggle('show');
    });
});