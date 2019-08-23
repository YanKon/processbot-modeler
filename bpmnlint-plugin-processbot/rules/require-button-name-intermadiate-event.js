const {
    is
  } = require('bpmnlint-utils');
  
  
  /**
   * Rule that reports missing button name on bpmn:IntermediateThrowEvent.
   */
  module.exports = function() {
  
    function check(node, reporter) {
      
      if (is(node, 'bpmn:IntermediateThrowEvent') && typeof node.get("chatbot:button") === 'undefined') {
        reporter.report(node.id, 'IntermediateThrowEvent is missing button name for the chatbot.');
      }
    }
  
    return {
      check: check
    };
  };
  