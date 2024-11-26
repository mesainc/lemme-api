const env = {
  NODE_ENV: 'test',
  DATABASE_HOST: 'localhost',
  DATABASE_PORT: 5434,
  DATABASE_USERNAME: 'postgres',
  DATABASE_PASSWORD: 'postgres',
  DATABASE_NAME: 'lemme-api-test-db',
};

process.env = {
  ...process.env,
  ...env,
};
