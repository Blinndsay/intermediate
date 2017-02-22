FlowRouter.route('/', {
	name: 'home',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout')
	}
});

FlowRouter.route('/recipe-Book', {
	name: 'recipe-Book',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'Recipes'});
	}
});