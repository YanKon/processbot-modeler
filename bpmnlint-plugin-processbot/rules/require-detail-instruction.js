const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports missing targetNamespace on bpmn:Definitions.
 */
module.exports = function() {

  function check(node, reporter) {

    const name = (node.name || '').trim();
    
    if (is(node, 'bpmn:Task') && typeof node.get("chatbot:detailInstruction") === 'undefined') {
      reporter.report(node.id, 'Task is missing detail instruction');
    }
  }

  return {
    check: check
  };
};
