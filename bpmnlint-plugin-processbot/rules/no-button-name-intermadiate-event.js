const {
    is
  } = require('bpmnlint-utils');
  
  
  /**
   * Rule that reports missing targetNamespace on bpmn:Definitions.
   */
  module.exports = function() {
  
    function check(node, reporter) {
  
      const name = (node.name || '').trim();
      
      if (is(node, 'bpmn:IntermediateThrowEvent') && typeof node.get("chatbot:button") === 'undefined') {
        reporter.report(node.id, 'IntermediateThrowEvent is missing button name for the chatbot.');
      }
    }
  
    return {
      check: check
    };
  };
  