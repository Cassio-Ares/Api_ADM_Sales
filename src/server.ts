console.log('Starting server...');

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

/**
 * npm i prettier -D
 *
 * * {
 *   "semi": true,                 ponto e virgula no final das linhas
 *   "trailingComma": "all",       virgula no final dos objetos
 *   "singleQuote": true,          aspas simples
 *   "printWidth": 80,             a cada 80 caracteres quebre a linha
 *   "arrowParens": "avoid"        cascatir abertura e fechamento
 *   }
 *
 * ligando o prettier e eslint
 *
 * npm i eslint-config-prettier@6.15.0 eslint-plugin-prettier@3.2.0 -D
 *
 *
 * lincamos colocando:
 *
 * export default [
  eslint.configs.recommended,
  ...compat.extends('plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint','plugin:prettier/recommended', ),
 */
