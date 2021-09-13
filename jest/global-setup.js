const path = require('path');
const cp = require('child_process');

async function startServer(dir) {
  return new Promise(accept => {
    let proc = cp.spawn('npm', ['start'], {
      cwd: dir,
      stdio: 'inherit'
    });

    // Give the server some time to be ready.
    setTimeout(() => {
      accept(proc);
    }, 200);
  });
}

module.exports = async () => {
  let rootDir = path.dirname(__dirname);
  global.testServerProc = await startServer(rootDir);
};
