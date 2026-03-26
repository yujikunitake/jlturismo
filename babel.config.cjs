/**
 * Configuração do Babel: o transpilador que transforma JSX e recursos modernos
 * de JavaScript em algo que o Metro (bundler do React Native) entende.
 *
 * preset "babel-preset-expo" inclui o que o Expo precisa para rodar o projeto.
 */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
