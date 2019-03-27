const {
    is
  } = require('bpmnlint-utils');
  
  
  /**
   * Rule that reports manual tasks being used.
   */
  module.exports = function() {
  
    function check(node, reporter) {
       
        if (is(node, 'bpmn:ParallelGateway')) {
            console.log(node);
        }

      if (is(node, 'bpmn:ParallelGateway')) {
        reporter.report(node.id, 'ParallelGateway is disallowed. Please make it sequenctial.');
      }
    }
  
    return {
      check: check
    };
  };
  