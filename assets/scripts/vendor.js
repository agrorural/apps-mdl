const $ = require('jquery');

window.jQuery = require('jquery');

require('materialize-css');

FontAwesomeConfig = { searchPseudoElements: true };

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(brands, solid, regular)


//M.toast({html: 'I am a toast!'})

$(function(){

  $('.sidenav').sidenav();

}); // end of document ready