let exec = require('child_process').execSync;

let port = process.env.PORT || parseInt(process.argv.pop()) || 8000;

let cmd = "php -S 0.0.0.0:" + port;

exec(cmd, {stdio: 'inherit'});