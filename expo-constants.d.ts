declare module 'expo' {
    export namespace Constants {
      export const appOwnership: 'expo' | 'standalone' | 'guest';
      export const expoVersion: string;
      export const deviceId: string;
      export const deviceName: string;
      export const deviceYearClass: string;   // TODO : I'm not sure if it's a string
      export const isDevice: boolean;

      // TODO: check if it's correct or not because in the v16.0.0 doc there is only os
      export type Platform = {
        ios: {
          platform: string;
          model: string;
          userInterfaceIdiom: string;
        }
      };
      export const platform: Platform;
      export const sessionId: string;
      export const statusBarHeight: any;  // TODO: check what's the correct export type
      export const systemFonts: any;      // TODO: check what's the correct export type

      // Note: I find this from https://docs.expo.io/versions/v16.0.0/guides/how-expo-works.html#expo-manifest
      // and config page so it may be not complete or exact
      export interface Manifest {
        name: string;
        description?: string;
        slug?: string;
        sdkVersion?: string;
        version?: string;
        orientation?: 'portrait' | 'landscape';
        primaryColor?: string;
        icon?: string;
        notification?: {
          icon?: string,
          color?: string,
          androidMode?: 'default' | 'collapse',
          androidCollapsedTitle?: string
        };
        loading?: {
          icon?: string,
          exponentIconColor?: 'white' | 'blue',
          exponentIconGrayscale?: 1 | 0,
          backgroundImage?: string,
          backgroundColor?: string,
          hideExponentText?: boolean
        };
        appKey?: string;
        androidStatusBarColor?: string;
        androidStatusBar?: {
          barStyle?: 'lignt-content' | 'dark-content',
          backgroundColor?: string
        };
        androidHideExponentNotificationInShellApp?: boolean;
        scheme?: string;
        extra?: {
          [propName: string]: any
        };
        rnCliPath?: any;
        entryPoint?: string;
        packagerOpts?: {
          hostType?: string,
          dev?: boolean,
          strict?: boolean,
          minify?: boolean,
          urlType?: string,
          urlRandomness?: string,
          lanType?: string,
          [propName: string]: any
        };
        ignoreNodeModulesValidation?: any;  // TODO: better def
        nodeModulesPath?: string;
        ios?: {
          bundleIdentifier?: string,
          buildNumber?: string,
          config?: {
            usesNonExemptEncryption?: boolean,
            googleSignIn?: {
              reservedClientId: string
            }
          },
          supportsTablet?: boolean,
          infoPlist?: any
        };
        android?: {
          package?: string,
          versionCode?: string,
          config?: {
            fabric?: {
              apiKey: string,
              buildSecret: string
            },
            googleMaps?: {
              apiKey: string
            },
            googleSignIn?: {
              apiKey: string,
              certificateHash: string
            }
          }
        },
        facebookScheme: any;
        xde: boolean;
        developper?: {
          tool?: string,
          [propName: string]: any
        };
        bundleUrl?: string;
        debuggerHost?: string;
        mainModuleName?: string;
        logUrl?: string;
        [propName: string]: any;
      }
      export const manifest: Manifest;
      export const linkingUri: string;
    }
  }