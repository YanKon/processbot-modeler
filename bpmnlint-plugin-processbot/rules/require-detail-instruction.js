const {
  is
} = require('bpmnlint-utils');

/**
 * Rule that reports missing detail instructions on bpmn:IntermediateThrowEvent.
 */
module.exports = function() {

  function check(node, reporter) {    
    if (is(node, 'bpmn:Task') && typeof node.get("chatbot:detailInstruction") === 'undefined') {
      reporter.report(node.id, 'Task is missing detail instruction for the chatbot');
    }
  }

  return {
    check: check
  };
};
