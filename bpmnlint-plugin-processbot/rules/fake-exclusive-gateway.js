const {
    is
  } = require('bpmnlint-utils');
  
  
  /**
   * Rule that reports a split with just one outgoing and one incoming edge.
   */
  module.exports = function() {

    function check(node, reporter) {
  
      if (is(node, 'bpmn:ExclusiveGateway')) {
  
        const incoming = node.incoming || [];
        const outgoing = node.outgoing || [];

    
        if (incoming.length == 1 && outgoing.length == 1) {
            reporter.report(node.id, 'Fake ExclusiveGateway');
        }
      }
    }
  
    return {
      check
    };
  
  };