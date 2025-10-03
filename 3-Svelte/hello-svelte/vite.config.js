import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// ! personally, I cannot exactly figure oout how to do server-side rendering 
	//  here, so for now, let's ignore this.
	// compilerOptions: {
	// 	generate: 'ssr',
	// }
});
