import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';


export default function(group, element) {

  // Only return an entry, if the currently selected
  // element is a Task
  if (is(element, 'bpmn:Task')) {
    group.entries.push(entryFactory.textBox({
      id : 'detailInstruction',
      description : 'Give detail instructions',
      label : 'Detail instructions',
      modelProperty : 'detailInstruction'
    }));
  }
  // Only return an entry, if the currently selected
  // element is a IntermediateThrowEvent
  if (is(element, 'bpmn:IntermediateThrowEvent')) {
    group.entries.push(entryFactory.textBox({
      id : 'detailDescription',
      description : 'Give detail description',
      label : 'Detail description',
      modelProperty : 'detailDescription'
    }));
  }
}