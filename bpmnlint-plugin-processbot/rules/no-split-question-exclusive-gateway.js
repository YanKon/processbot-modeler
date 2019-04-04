const {
    is
  } = require('bpmnlint-utils');
  
  
  /**
   * Rule that reports missing split question on bpmn:ExclusiveGateway.
   */
  module.exports = function() {
  
    function check(node, reporter) {
  
      const name = (node.name || '').trim();
      
      if (is(node, 'bpmn:ExclusiveGateway') && typeof node.get("chatbot:splitQuestion") === 'undefined') {
        reporter.report(node.id, 'ExclusiveGateway is missing split question for the chatbot.');
      }
    }
  
    return {
      check: check
    };
  };
  