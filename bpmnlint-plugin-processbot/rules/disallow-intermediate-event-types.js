const {
  isAny
} = require('bpmnlint-utils');

disallowedEvents = [
  "bpmn:MessageEventDefinition",
  "bpmn:TimerEventDefinition",
  "bpmn:EscalationEventDefinition",
  "bpmn:ConditionalEventDefinition",
  "bpmn:LinkEventDefinition",
  "bpmn:CompensateEventDefinition",
  "bpmn:SignalEventDefinition"
]

/**
 * Rule that reports disallowed intermediate event types.
 */
module.exports = function() {

  function check(node, reporter) {
    if (isAny(node, ["bpmn:IntermediateThrowEvent","bpmn:IntermediateCatchEvent"])) {
      // um spezielle IntermediateThrowEvent oder IntermediateCatchEvent abzufangen, 
      // muss man sich das Elemente innerhalb des Events anschauen, da diese von BPMN.io verschachtelt werden
      if ('eventDefinitions' in node) {
        if (disallowedEvents.includes(node.eventDefinitions[0].$type)) {
          console.log("teeeeeest");
          reporter.report(node.id, 'Element has disallowed type ' + node.eventDefinitions[0].$type);
        }
      }
    }
  }

  return {
    check: check
  };
};
