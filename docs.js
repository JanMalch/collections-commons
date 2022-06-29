/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process');

const execCommand = (command) => {
  console.log(`> ${command}\n`);

  execSync(command, {
    cwd: __dirname,
  });
};

const docGroups = [
  'src/data-structures',
  'src/data-structures/maps',
  'src/extensions/iterable',
  'src/extensions/array',
  'src/extensions/map',
  'src/extensions/multi-value-map',
  'src/extensions/nested-map',
  'src/extensions/record',
  'src/caching',
  'src/strings',
  'src/types',
  'src/functions',
];

// TODO: add --validation.notDocumented
execCommand(`npx typedoc ${docGroups.join(' ')} --excludeInternal`);
// TODO: integrate lib in docs
