module.exports = {
  apps : [{
    name: "webapp",
    script: "serve -s build",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
};
