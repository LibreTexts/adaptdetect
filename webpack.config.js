import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));

const baseConfig = {
  entry: path.resolve(dirName, 'adaptdetect.js'),
  output: {
    path: path.resolve(dirName, 'dist'),
  },
};

export default function (_env, argv) {
  if (argv.mode === 'production') {
    baseConfig.output.filename = 'adaptdetect.min.js';
  }

  if (argv.mode === 'development') {
    baseConfig.output.filename = 'adaptdetect.dev.js';
  }

  return baseConfig;
}
