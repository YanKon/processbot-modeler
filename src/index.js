// import _ from 'lodash';
import $ from 'jquery';
import pizzaDiagram from '../resources/pizza-collaboration.bpmn';

import BpmnModeler from 'bpmn-js/lib/Modeler';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/bpmn';
import lintModule from 'bpmn-js-bpmnlint';
import bpmnlintConfig from '../.bpmnlintrc';

import '../node_modules/bpmn-js/dist/assets/diagram-js.css';
import '../node_modules/bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import '../node_modules/bpmn-js-bpmnlint/dist/assets/css/bpmn-js-bpmnlint.css';
import './css/style.less';

import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/@fortawesome/fontawesome-free/js/all.js'

var modeler = new BpmnModeler({
  container: '#js-canvas',
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

modeler.importXML(pizzaDiagram, function(err) {

  if (!err) {
    console.log('success!');
    modeler.get('canvas').zoom('fit-viewport');
    modeler.get('linting').activateLinting();
  } else {
    console.log('something went wrong:', err);
  }
});

$("#hidePanel").click(function() {
  $('#js-properties-panel').addClass("hidden");
  $('.io-editing-tools, .io-zoom-controls').css("right","15px");
  $('.io-zoom-controls').css("bottom","90px");
  $('.bpmn-js-bpmnlint-button').css("right","125px");
  $('#editPanel').removeClass("hidden");
});

$("#editPanel").click(function() {
  $('#js-properties-panel').removeClass("hidden");
  $('.io-editing-tools, .io-zoom-controls').css("right","280px");
  $('.io-zoom-controls').css("bottom","15px");
  $('.bpmn-js-bpmnlint-button').css("right","330px");
  $('#editPanel').addClass("hidden");
});

$("#toggleFullscreen").click(function() {
  toggleFullscreen();
})

function toggleFullscreen(elem) {
  elem = elem || document.documentElement;
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