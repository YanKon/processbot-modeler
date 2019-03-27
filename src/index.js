// import _ from 'lodash';
import $ from 'jquery';
import newDiagram from '../resources/newDiagram.bpmn';
import PizzaDiagram from '../resources/pizza-collaboration.bpmn';


import BpmnModeler from 'bpmn-js/lib/Modeler';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/bpmn';
import lintModule from 'bpmn-js-bpmnlint';
import bpmnlintConfig from '../.bpmnlintrc';

// import BpmnSearchProvider from 'bpmn-js/lib/features/search';
// import BpmnKeyboardBindings from 'bpmn-js/lib/features/keyboard';

import '../node_modules/bpmn-js/dist/assets/diagram-js.css';
import '../node_modules/bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import '../node_modules/bpmn-js-bpmnlint/dist/assets/css/bpmn-js-bpmnlint.css';
import './css/style.less';

import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/@fortawesome/fontawesome-free/js/all.js'

var modeler = new BpmnModeler({
  container: '#js-canvas',
  keyboard: { bindTo: document },
  linting: {
    bpmnlint: bpmnlintConfig
  },
  propertiesPanel: {
    parent: '#js-properties-panel'
  },
  additionalModules: [
    lintModule,
    propertiesPanelModule,
    propertiesProviderModule
  ],
});

modeler.importXML(PizzaDiagram, function(err) {

  if (!err) {
    console.log('success!');
    modeler.get('canvas').zoom('fit-viewport');
    zoomlevel = 0.8;	
    modeler.get('canvas').zoom(zoomlevel);
    // modeler.get('linting').activateLinting();
    console.log(modeler.get('commandStack'));
    // console.log(BpmnKeyboardBindings)
  } else {
    console.log('something went wrong:', err);
  }
});

$("#hidePanel").click(function() {
  $('#js-properties-panel').addClass("hidden");
  $('.io-editing-tools, .io-zoom-controls').css("right","15px");
  $('.io-zoom-controls').css("bottom","90px");
  $('.bpmn-js-bpmnlint-button').css("right","15px");
  $('#editPanel').removeClass("hidden");
  // $('.io-alerts').css("left","50%");
  $('.io-dialog .content').css("left","55%");
  $('.djs-search-container').css("left","0");
  
});

$("#editPanel").click(function() {
  $('#js-properties-panel').removeClass("hidden");
  $('.io-editing-tools, .io-zoom-controls').css("right","280px");
  $('.io-zoom-controls').css("bottom","15px");
  $('.bpmn-js-bpmnlint-button').css("right","280px");
  $('#editPanel').addClass("hidden");
  // $('.io-alerts').css("left","40%");
  $('.io-dialog .content').css("left","48%");
  $('.djs-search-container').css("left","-180px");


});

$("#toggleFullscreen").click(function() {
  toggleFullscreen();
})

function toggleFullscreen(elem) {
  elem = document.documentElement;
  if (!document.fullscreenElement && !document.mozFullScreenElement &&
    !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

var zoomlevel = 1;

$("#zoomIn").on("click", function () {
  if (zoomlevel <= 3.0) {
    var canvas = modeler.get('canvas');	
    zoomlevel = zoomlevel + 0.3;	
    canvas.zoom(zoomlevel);
  }

})

$("#zoomOut").on("click", function () {
  if (zoomlevel >= 0.3) {
    var canvas = modeler.get('canvas');	
    zoomlevel = zoomlevel - 0.3;			

    canvas.zoom(zoomlevel);
  }
})

$("#zoomReset").on("click", function () {
  modeler.get('canvas').zoom('fit-viewport');
  var canvas = modeler.get('canvas');	
  zoomlevel = 0.8;
  canvas.zoom(0.8);
})

$(".close").on("click", function () {
  $(".io-alerts").hide();
})

$("#showKeyboard").on("click", function () {
  $(".io-dialog").toggle();
})

$("#createNew").on("click", function () {
  openDiagram(newDiagram);
})

$("#openLocal").on("click", function () {
  readSingleFile();
})


  


function openDiagram(xml) {
  modeler.importXML(xml, function(err) {

    if (err) {
      // container
      //   .removeClass('with-diagram')
      //   .addClass('with-error');

      // container.find('.error pre').text(err.message);

      console.error(err);
    } else {
      // container
      //   .removeClass('with-error')
      //   .addClass('with-diagram');
    }
  });
  
}


function readSingleFile(e, callback) {
  var file = e.target.files[0];

  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    openDiagram(text);
    $(".canvas").removeClass("hidden");
    $(".properties-panel-parent").removeClass("hidden");
    $(".buttons").removeClass("hidden");

    $(".content").addClass("hidden");
    e.stopPropagation();
    e.preventDefault();
  };
  reader.readAsText(file);

}