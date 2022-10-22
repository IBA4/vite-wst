import { defineConfig } from 'vite';
import wasmPack from 'vite-plugin-wasm-pack';
import { svelte } from "@sveltejs/vite-plugin-svelte";
export default defineConfig({
   // base: '/vite-wst/', //'/REPO_NAME/'to deploy static site for github-pages (uncomment only when github-pages is needed)
    plugins: [
        svelte({
            configFile: 'svelte.config.js'
        }),
        wasmPack(['./wasm-crate'])// crate folder
    ]
});