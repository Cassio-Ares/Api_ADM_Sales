console.log("Starting server...")

/**
 * installs
 *
 * npm init
 *
 * npm i typescript ts-node-dev @types/node tsconfig-paths ts-node -D
 *
 *  npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
 *
 * Resultado do comando npx .....
 *    Created a new tsconfig.json with:
 *                                                                                                                    TS
 *     target: es2016
 *     module: commonjs
 *     lib: es6
 *     outDir: build
 *     rootDir: src
 *     strict: true
 *     esModuleInterop: true
 *     skipLibCheck: true
 *    forceConsistentCasingInFileNames: true
 *
 *
 * packge.json
 *
 *  scripts:{
 *     "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts"
 *   }
 *
 */


