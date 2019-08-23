const {
  isAny
} = require('bpmnlint-utils');

disallowedElements = [
  "bpmn:IntermediateCatchEvent",
  "bpmn:parallelGateway",
  "bpmn:InclusiveGateway",
  "bpmn:EventBasedGateway",
  "bpmn:ComplexGateway",
  "bpmn:SendTask",
  "bpmn:ReceiveTask",
  "bpmn:UserTask",
  "bpmn:ManualTask",
  "bpmn:BusinessRuleTask",
  "bpmn:ServiceTask",
  "bpmn:ScriptTask",
  "bpmn:CallActivity",
  "bpmn:DataStoreReference",
  "bpmn:SubProcess",
  "bpmn:Transaction",
  "bpmn:DataObjectReference",
  "bpmn:DataObject",
  "bpmn:Collaboration"
]

/**
 * Rule that reports disallowed types.
 */
module.exports = function() {

  function check(node, reporter) {
    if (isAny(node, disallowedElements)) {
      reporter.report(node.id, 'Element has disallowed type ' + node.$type);
    }
  }

  return {
    check: check
  };
};
