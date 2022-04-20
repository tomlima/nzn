module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e9720c8f95691cfd31deee76554c1d74'),
  },
});
