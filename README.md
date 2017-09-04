# expo-type-definitions

TypeScript type definitions for Expo.

Based on [pierre-H's type definition file](https://gist.github.com/pierre-H/eef9a9225fb1c5a0f81180a8b0fbb2c2). The following chagnes have been made:

* The module was renamed from `Expo` to `expo`, so you have to type `import { Svg } from 'expo';` instead of ~`import { Svg } from 'Expo';`~.
* The type definitions for Svg have been updated. I think Pierre's definitions were based on the documentiation for [react-native-svg](https://github.com/react-native-community/react-native-svg), but I couldn't get that to work, so I rewrote them, by looking a the proptypes in their source code. I was quite surprised to see that I couldn't find any type defintions for react-native-svg - I guess the React community is still focused on ECMAScript and Flow instead of TypeScript.

The long term goal is to get these type definitions into Expo's package, or as a secondary option, into Definitely Typed. But that will require a higher quality in the definitions than the current state.
