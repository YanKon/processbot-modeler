import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';


export default function(group, element) {

  // Only return an entry, if the currently selected
  // element is a start event.
  if (is(element, 'bpmn:Task')) {
    group.entries.push(entryFactory.textBox({
      id : 'instruction',
      description : 'Give instructions',
      label : 'Instructions',
      modelProperty : 'instruction'
    }));
  }

  if (is(element, 'bpmn:IntermediateThrowEvent')) {
    group.entries.push(entryFactory.textBox({
      id : 'button',
      description : 'Give button name',
      label : 'Button name',
      modelProperty : 'button'
    }));
  }

  if (is(element, 'bpmn:ExclusiveGateway') && element.outgoing.length > 1) {
    group.entries.push(entryFactory.textBox({
      id : 'splitQuestion',
      description : 'Give a split question',
      label : 'Split question',
      modelProperty : 'splitQuestion'
    }));
  }
}