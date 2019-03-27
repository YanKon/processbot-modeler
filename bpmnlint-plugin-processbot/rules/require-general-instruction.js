const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports missing targetNamespace on bpmn:Definitions.
 */
module.exports = function() {

  function check(node, reporter) {
    // console.log(node)

    const name = (node.name || '').trim();
    // console.log(name)
    
    if (is(node, 'bpmn:Task') && typeof node.get("chatbot:instruction") === 'undefined') {
      reporter.report(node.id, 'Task is missing general instruction');
    }
  }

  return {
    check: check
  };
};
