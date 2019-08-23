const {
  is
} = require('bpmnlint-utils');

/**
 * Rule that reports missing detail instructions on bpmn:IntermediateThrowEvent.
 */
module.exports = function() {

  function check(node, reporter) {    
    if (is(node, 'bpmn:IntermediateThrowEvent')) {
      if (typeof node.get("chatbot:detailDescription") === 'undefined')  {
        reporter.report(node.id, 'IntermediateThrowEvent is missing detail description for the chatbot');
      }
    }
  }

  return {
    check: check
  };
};
