module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '12cea2e06fe4c11948258e344533f5af'),
  },
});
