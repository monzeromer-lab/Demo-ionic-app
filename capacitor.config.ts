import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.monzeromer.demo',
  appName: 'Demo Task',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
