module.exports = {
    apps: [
      {
        name: 'products',
        script: 'npm',
        args: 'start',
        cwd: './', // Set the working directory of your app
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
      },
    ],
  };
  