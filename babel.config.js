module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'react-native-unistyles/plugin',
      {
        // root folder of your application
        root: 'src',
      },
    ],
  ],
};
