export default () => ({
  name: process.env.APP_NAME ?? 'Habita',
  port: parseInt(process.env.PORT ?? '3000', 10),
  database: {
    host: process.env.DB_HOST ?? 'localhost',
    port: parseInt(process.env.DB_PORT ?? '5432', 10),
    username: process.env.DB_USERNAME ?? 'user',
    password: process.env.DB_PASSWORD ?? 'password',
    name: process.env.DB_NAME ?? 'habita_db',
    url:
      process.env.DATABASE_URL ??
      'postgres://user:password@localhost:5432/habita_db',
  },
});
