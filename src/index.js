// import _ from 'lodash';
// import $ from 'jquery';
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