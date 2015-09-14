jQuery(document).ready(function(){
    jQuery('#toggle-register-section').on('click', function() {        
         jQuery('#guide-registration').toggle('show');
         jQuery('#guide-registration-cta').toggle('show');
    });
    jQuery('#toggle-vote-section').on('click', function() {        
        jQuery('#guide-vote').toggle('show');
        jQuery('#guide-vote-cta').toggle('show');
    });
    jQuery('#facebook-cta').on('click', function() {
        if (jQuery.browser.mobile) {
            window.location = 'fb://profile/859872477420296'; 
        }
        else {
            window.open('https://www.facebook.com/right2votecanada');   
        }
    });
    jQuery('#facebook-cta-register').on('click', function() {
        if (jQuery.browser.mobile) {
            window.location = 'fb://profile/859872477420296'; 
        }
        else {
            window.open('https://www.facebook.com/right2votecanada');   
        }
    });
    jQuery('#elections-ca-register').on('click', function() {
        window.open('http://elections.ca/register');   
    });
});