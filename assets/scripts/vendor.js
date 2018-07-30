const $ = require('jquery');

window.jQuery = require('jquery');

require('materialize-css');

import SimpleBar from 'simplebar';

import { library, dom, config } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fas, far, fab);
config.searchPseudoElements = true;
console.log(config.searchPseudoElements);
// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();

//require( 'jszip' );

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
  $('.tabs').tabs();
  $('.collapsible').collapsible();
  $('.tooltipped').tooltip();
  $('.datagrid').DataTable({
    responsive: true,
    "language": {
      "url": "dist/scripts/datatables-es_ES.json"
    },
  });

  if (matchMedia) {
    const mq = window.matchMedia("(min-width: 992px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }
  // media query change
  function WidthChange(mq) {
      if (mq.matches) {
          $('body').addClass('sidebar-expand');
          $('body').removeClass('sidebar-collapse');
          $(document).on('click', '.has-fixed-sidenav .sidenav-trigger', function(){
            $(".sidenav-overlay").css("display", "none");
            $(".sidenav-overlay").css("opacity", "0");
          });

          console.log("window width is at least 992px");
      } else {
          $('body').removeClass('sidebar-expand');
          $('body').addClass('sidebar-collapse');
          // $('.sidenav').css("transform", "translateX(-105%)");
          console.log("window width is less than 992px");
      }
  }

  $('.sidenav-trigger').click(function() {
    $('body').toggleClass('sidebar-expand sidebar-collapse');
  });
});

window.getSpinner = function(message = 'Cargando...'){
  $("body").addClass("with-spinner");
  $("body").append('<aside class="spinner"><i class="fas fa-circle-notch fa-spin"></i><span>' + message + '<span></aside>').hide().fadeIn(300);
};

window.deleteSpinner = function(){
  $("aside.spinner").fadeOut(300, function() {
    $(this).remove();
  });
  $("body").removeClass("with-spinner");
};