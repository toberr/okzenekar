var eventBus = {
	install: function (Vue, options) {
		Vue.prototype.eb = new Vue()
	}
};



module.exports = eventBus;