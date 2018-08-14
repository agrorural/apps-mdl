window.$ = window.jQuery = require('jquery');

require('materialize-css');

import SimpleBar from 'simplebar';

import { library, dom, config } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fas, far, fab);
config.searchPseudoElements = true;
//console.log(config.searchPseudoElements);
// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();

//require( 'jszip' );
const JSZip = require('jszip');
window.JSZip = JSZip;

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
const materializeStepper = require('materialize-stepper');
import "jquery-validation/dist/jquery.validate";

// require('inputmask');

// import Inputmask from "inputmask";


const Chart = require('chart.js');



//console.log('activateStepper');

$(function(){
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
    onOpenEnd: function() {
      $("#logo").attr("viewBox", "0 0 260 64");
    },
    onCloseEnd: function() {
    },
  });
  //$('.sidenav').sidenav();
  $('.profile-trigger').dropdown({
    inDuration: 300,
    outDuration: 225,
    hover: false, // Activate on hover
    coverTrigger: false, // Displays dropdown below the button
    alignment: 'top' // Displays dropdown with edge aligned to the left of button
  });
  //$('.profile-trigger').dropdown();
  $('.tabs').tabs();
  $('.collapsible').collapsible();
  $('.tooltipped').tooltip();
  $('.datagrid').DataTable({
    responsive: true,
    "language": {
      "url": "dist/scripts/datatables-es_ES.json"
    },
  });

  var mqls = [ // list of window.matchMedia() queries
    window.matchMedia("(max-width: 575.98px)"),
    window.matchMedia("(max-width: 767.98px)"),
    window.matchMedia("(max-width: 991.98px)"),
    window.matchMedia("(max-width: 1199.98px)"),
    window.matchMedia("(min-width: 1200px)")
  ]

  function mediaqueryresponse(mql){
    if (mqls[0].matches){
      // console.log(mql.media)
    }

    if (mqls[1].matches){
      // console.log(mql.media)
    }

    if (mqls[2].matches){
      $("#logo").attr("viewBox", "0 0 260 64");
      //console.log(instances[0].isOpen)
      // console.log(mql.media)

      // $(".sidenav")
      //   .mouseenter(function(){
      //     $("#logo").attr("viewBox", "0 0 260 64");
      //   })
      //   .mouseleave(function(){
      //     $("#logo").attr("viewBox", "0 0 260 64");
      //   });
    }

    if (mqls[3].matches){
      $("#logo").attr("viewBox", "160 0 60 64");
    }

    // if (mqls[3].matches && !mqls[2].matches){
    //   $(".sidenav")
    //     .mouseenter(function(){
    //       $("#logo").attr("viewBox", "0 0 260 64");
    //     })
    //     .mouseleave(function(){
    //       $("#logo").attr("viewBox", "160 0 60 64");
    //     });

    //   console.log("3 pero no 2");
    // }

    if (mqls[4].matches){
      // console.log(mql.media)
    }
  }

  for (var i=0; i<mqls.length; i++){
    mediaqueryresponse(mqls[i]) // call listener function explicitly at run time
    mqls[i].addListener(mediaqueryresponse) // attach listener function to listen in on state changes
  }

  // if (matchMedia) {
  //   const mq = window.matchMedia("(min-width: 992px)");
  //   mq.addListener(WidthChange);
  //   WidthChange(mq);
  // }
  // // media query change
  // function WidthChange(mq) {
  //     if (mq.matches) {
  //         // $("#logo").attr("viewBox", "0 0 260 64");
  //         $('body').addClass('sidebar-expand');
  //         $('body').removeClass('sidebar-collapse');
          

  //         console.log("window width is at least 992px");
  //     } else {
  //         // $("#logo").attr("viewBox", "160 0 60 64");
  //         $('body').removeClass('sidebar-expand');
  //         $('body').addClass('sidebar-collapse');
  //         // $('.sidenav').css("transform", "translateX(-105%)");
  //         console.log("window width is less than 992px");
          
  //         if(instances[0].isOpen === false){
  //         //   $(".sidenav")
  //         //   .mouseenter(function(){
  //         //     $("#logo").attr("viewBox", "0 0 260 64");
  //         //   })
  //         //   .mouseleave(function(){
  //         //     $("#logo").attr("viewBox", "160 0 60 64");
  //         //   });
  //         // }else{
  //         //   $(".sidenav")
  //         //   .mouseenter(function(){
  //         //     $("#logo").attr("viewBox", "0 0 260 64");
  //         //   })
  //         //   .mouseleave(function(){
  //         //     $("#logo").attr("viewBox", "0 0 260 64");
  //         //   });
  //         }
        
  //         console.log(instances[0].options);
  //     }
  // }

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