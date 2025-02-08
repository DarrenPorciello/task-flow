// For EC2 PM2 module


module.exports = {
    apps: [
        {
            name: "project-management",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: "development",
            },
        },
    ],
}