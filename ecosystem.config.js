//แก้ครั้งที่ 1


module.exports = {

  apps: [

    // Backend API
    {
      name: 'backend-coop-api',
      script: 'server.js',
      cwd: './backend',
      env_file: './backend/.env',
      watch: true,
      env: {
        NODE_ENV: 'development'
      }
    },

    {
      name: 'frontend-backend',
      script: 'server.js',
      cwd: './frontend/frontend-backend',
      env_file: './frontend/frontend-backend/.env',
      watch: true,
      env: {
        NODE_ENV: 'development'
      }
    }

  ]
};