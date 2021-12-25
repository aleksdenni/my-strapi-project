module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '65f3a74f434ede4869ecd1c06ff12112'),
  },
});
