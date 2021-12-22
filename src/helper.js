let _ = require('lodash');

module.exports.log = options => {
	return v => {
		if (options.debug && v.errors) {
			let erroredDocs = _.filter(v.items, i => { return i.create.status !== 201 });
			console.log(JSON.stringify(v, null, 2));
		}
	}
}