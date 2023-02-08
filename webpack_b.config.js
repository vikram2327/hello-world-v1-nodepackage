{
    "target": 'web',
    "entry": {
      "index": './src/my-library.ts',
    },
    "output": {
      "path": path.resolve(__dirname, './dist'),
      "filename": 'my-library.js',
      "library": 'MyLibrary',
      "libraryTarget": 'umd',
      "globalObject": 'this',
      "umdNamedDefine": true,
    }
}