const $ = require('jquery');

window.jQuery = require('jquery');

require('materialize-css');

FontAwesomeConfig = { searchPseudoElements: true };

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(brands, solid, regular);

require( 'jszip' );

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

require( 'datatables.net' )( window, $ );
require( 'datatables.net-autofill' )( window, $ );
require( 'datatables.net-buttons' )( window, $ );
require( 'datatables.net-buttons/js/buttons.colVis.js' )( window, $ );
require( 'datatables.net-buttons/js/buttons.flash.js' )( window, $ );
require( 'datatables.net-buttons/js/buttons.html5.js' )( window, $ );
require( 'datatables.net-buttons/js/buttons.print.js' )( window, $ );
require( 'datatables.net-colreorder' )( window, $ );
require( 'datatables.net-fixedcolumns' )( window, $ );
require( 'datatables.net-fixedheader' )( window, $ );
require( 'datatables.net-keytable' )( window, $ );
require( 'datatables.net-responsive' )( window, $ );
require( 'datatables.net-rowgroup' )( window, $ );
require( 'datatables.net-rowreorder' )( window, $ );
require( 'datatables.net-scroller' )( window, $ );
require( 'datatables.net-select' )( window, $ );

import "inputmask/dist/inputmask/jquery.inputmask";

// require('inputmask');

// import Inputmask from "inputmask";

$(function(){

  $('.sidenav').sidenav();
  $('.collapsible').collapsible();
  $('.datagrid').DataTable({
    responsive: true,
    "language": {
      "url": "dist/scripts/datatables-es_ES.json"
    },
  });
});