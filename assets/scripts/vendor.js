const $ = require('jquery');

window.jQuery = require('jquery');

require('materialize-css');

FontAwesomeConfig = { searchPseudoElements: true };

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch()

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


const Chart = require('chart.js');


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