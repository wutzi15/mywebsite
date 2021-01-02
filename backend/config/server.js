module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://api.benedikt-bergenthal.de',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
  proxy: {
    enabled: true,
    ssl: true,
    host: "https://api.benedikt-bergenthal.de",
    port 443,
  }
});
