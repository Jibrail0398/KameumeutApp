import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.kameumeutapp.starter',
  appName: 'Kameumeut Farm',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
