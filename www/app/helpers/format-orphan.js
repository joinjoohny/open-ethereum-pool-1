import Ember from 'ember';

export function formatOrphan(value) {
	value = value*100;
	return value.toFixed(1)+'%';
}

export default Ember.Helper.helper(formatOrphan);
