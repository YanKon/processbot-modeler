import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';


export default function(group, element) {

  // Only return an entry, if the currently selected
  // element is a start event.
  if (is(element, 'bpmn:Task') || is(element, 'bpmn:Gateway')) {
    group.entries.push(entryFactory.textBox({
      id : 'instruction',
      description : 'Give instructions',
      label : 'Instructions',
      modelProperty : 'instruction'
    }));
  }
}