var app = app || {};

app.Todo = Backbone.Model.extend({
	// Defaults
	defaults: {
		title: '',
		completed: false
	},

	// Toggle the completed state of this Todo
	toggle: function () {
		this.save({
			completed: !this.get('completed')
		});
	}
});
