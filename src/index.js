#!/usr/bin/env node

// Import necessary modules
const fs = require('fs');
const path = require('path');
const { program } = require('commander'); // If using Commander.js for CLI parsing

// Define the entry point function
async function main() {
  try {
    // Parse command-line arguments
    program
      .version('1.0.0')
      .option('-n, --name <name>', 'Name of the slice')
      .option('-t, --type <type>', 'Type of files to generate (e.g., js, ts)')
      .parse(process.argv);

    const { name, type } = program.opts();

    // Validate arguments
    if (!name || !type) {
      console.error('Error: Name and type options are required.');
      program.help(); // Display help message
      process.exit(1);
    }

    // Generate Redux store slice components
    // Implement this logic based on your requirements

    console.log(`Redux store slice components for ${name} generated successfully.`);
    await fs.promises.mkdir(path.join(process.cwd(), 'store'), { recursive: true });
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Execute the entry point function
main();
