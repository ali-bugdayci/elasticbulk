let _ = require('lodash');

module.exports.log = options => {
	return v => {
		if (options.debug && v.errors) {
			let first = v.items[0];
			let key = Object.keys(first)[0];

			let erroredDocs = _.filter(v.items, i => { return i[key].status !== 201 });

			console.log("Number of errored documents: " + erroredDocs.length);

			var reasons = _.map(erroredDocs, e => {
				let err = e[key].error;
				return err.reason;
			})
			

			console.log(JSON.stringify(_.uniq(reasons), null, 2));
		}
	}
}
