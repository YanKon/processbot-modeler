const {
  is
} = require('bpmnlint-utils');

/**
 * Rule that reports missing general instructions on bpmn:IntermediateThrowEvent.
 */
module.exports = function() {

  function check(node, reporter) {
    if (is(node, 'bpmn:Task') && typeof node.get("chatbot:instruction") === 'undefined') {
      reporter.report(node.id, 'Task is missing general instruction for the chatbot');
    }
  }

  return {
    check: check
  };
};
