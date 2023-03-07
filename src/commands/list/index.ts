import { Command } from '@oclif/core';
import { readdirSync } from 'fs';

export class List extends Command {
  static description = 'List files and directories in the current directory';

  async run() {
    const directoryContent = readdirSync(process.cwd(), { withFileTypes: true });

    directoryContent.forEach(content => {
      this.log(`${content.name}${content.isDirectory() ? '/' : ''}`)
    })
  }
}