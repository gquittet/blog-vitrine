module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "https://blog-vitrine.herokuapp.com/",
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "0f188e7db9964535e6f244afcc1d690a"),
    },
  },
  proxy: {
    enabled: true,
    ssl: true,
    host: "https://blog-vitrine.herokuapp.com/",
    port: 443,
  },
});
