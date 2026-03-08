import readline from 'node:readline';
import process from 'node:process';

const interactive = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
  });

  console.log('Interactive CLI started. Type a command:');
  rl.prompt();

  rl.on('line', (input) => {
    const command = input.trim();

    switch (command) {
      case 'uptime':
        console.log(`Uptime: ${Math.floor(process.uptime())} seconds`);
        break;

      case 'cwd':
        console.log(`Current directory: ${process.cwd()}`);
        break;

      case 'date':
        console.log(new Date().toString());
        break;

      case 'exit':
        console.log('Goodbye!');
        rl.close();
        return;

      default:
        console.log('Unknown command');
    }

    rl.prompt();
  });

  // Ctrl + C
  rl.on('SIGINT', () => {
    console.log('\nGoodbye!');
    rl.close();
  });

  rl.on('close', () => {
    process.exit(0);
  });
};

interactive();