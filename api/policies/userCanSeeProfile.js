/**
 * Allow a logged-in user to see, edit and update her own profile
 * Allow admins to see everyone
 */

module.exports = function(req, res, ok) {

	sails.log('\n',
		'User id in session :: ',req.session.User.id, '\n',
		'Value of `id` param :: ',req.param('id'),
		'Destination :: ', req.url,
		'\n');

	var sessionUserMatchesId = req.session.User.id == req.param('id');
	var isAdmin = req.session.User.admin;

	// The requested id does not match the user's id,
	// and this is not an admin
	if (!(sessionUserMatchesId || isAdmin)) {
		var noRightsError = [{
			name: 'noRights',
			message: 'You must be an admin.'
		}];
		req.session.flash = {
			err: noRightsError
		};
		res.redirect('/session/new');
		return;
	}

	ok();

};