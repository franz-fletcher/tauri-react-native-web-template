import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react({
        babel: {
            plugins: ['react-native-web']
        }
    })],
    resolve: {
        alias: {
            'react-native': 'react-native-web'
        }
    }
});
