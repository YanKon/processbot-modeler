const { 
  is 
} = require("bpmnlint-utils");

/**
 * Rule that reports parellel gateways being used.
 * Specializes only the rule of disallowTypes for parallel processes.
 */
module.exports = function () {
  function check(node, reporter) {

    if (is(node, "bpmn:ParallelGateway")) {
      reporter.report(node.id, "ParallelGateway is disallowed. Please make it sequenctial.");
    }
  }

  return {
    check: check
  };
};
