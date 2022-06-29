import { readdirSync, writeFileSync } from 'fs';
import { resolve, basename } from 'path';
import { partition } from './src';

function writeBarrelAndTraverse(dir: string) {
  const [dirs, files] = partition(readdirSync(dir, { withFileTypes: true }), (dirent) => dirent.isDirectory());
  const barrelFile = resolve(dir, 'index.ts');
  const fileImports = files.map(f => f.name.slice(0, -3)).filter(name => name !== 'index');
  const dirImports = dirs.map(f => f.name);
  writeFileSync(
    barrelFile,
    [...fileImports, ...dirImports]
      .sort()
      .map(name => `export * from './${name}';`)
      .join('\n') + '\n',
    'utf-8'
  );
  console.log(`✓ ${basename(dir)}`);

  dirs.forEach(child => writeBarrelAndTraverse(resolve(dir, child.name)));
}

writeBarrelAndTraverse(resolve('./src'))
