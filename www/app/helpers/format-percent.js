import Ember from 'ember';

export function formatPercent(value) {
	value = value/10;
	return value.toFixed(0)+'%';
}

export default Ember.Helper.helper(formatPercent);
