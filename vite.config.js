import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/devops_dataops_board_game_tutorial/',
  plugins: [react()],
})