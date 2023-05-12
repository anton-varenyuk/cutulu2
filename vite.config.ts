import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		/** If you set esmExternals to true, this plugins assumes that
		 all external dependencies are ES modules */

		commonjsOptions: {
			esmExternals: true
		}
	}
});
