/**
 * Allow any authenticated user.
 */
module.exports = function(req, res, ok) {

  sails.log.error('\n',
    'Trying to access admin-protected page....', '\n',
    'User id in session :: ', req.session.User && req.session.User.id, '\n',
    'Value of `id` param :: ', req.param('id'),
    'Destination :: ', req.url,
    '\n');

  // User is allowed, proceed to controller
  if (req.session.User && req.session.User.admin) {
    return ok();
  }

  // User is not allowed
  else {
    var requireAdminError = [{
      name: 'requireAdminError',
      message: 'You must be an admin.'
    }];
    req.session.flash = {
      err: requireAdminError
    };

    // If this is a JSON-wanting request
    // (either AJAX or sockets)
    // don't do the whole redirect/flashy thing
    if (req.wantsJSON) {
      res.json(403, {status: 403});
      return;
    }

    res.redirect('/session/new');
    return;
  }
};