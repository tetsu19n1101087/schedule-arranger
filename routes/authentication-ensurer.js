'use strict';

function ensure(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  console.log(req.headers);
  
  res.redirect('/login?from=' + req.originalUrl);
  console.log(res.headers);
}

module.exports = ensure;