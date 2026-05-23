module.exports = {

  apps: [

    // Backend API
    {
      name: 'backend-coop-api',
      script: './backend/server.js',

      watch: true,

      env: {
        NODE_ENV: 'development'
      }
    },

    {
      name: 'frontend-backend',

      script: './frontend/frontend-backend/server.js',

      watch: true,

      env: {
        NODE_ENV: 'development'
      }
    }

  ]
};