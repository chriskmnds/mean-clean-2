/**
 * Returns whether this application instance is running in production mode.
 */
exports.isProductionInstance = function() {
  return process.env.NODE_ENV === 'production';
};