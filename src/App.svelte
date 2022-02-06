
<script>
  import init from "wasm-crate";
  import * as libcrate from "wasm-crate";

init().then(() => { // for now init is very important
  console.log('init wasm-pack');
  libcrate.greet('from vite!');
});

</script>
  <main class="text-center p-4 mx-0">
    <h1 class="text-6xl uppercase font-thin leading-tight my-8 mx-auto max-w-xs sm:max-w-xs">
      Hello Vite + tailwindCSS + wasm-pack!
    </h1>
  
    <p class="max-w-xs sm:max-w-none my-4 mx-auto leading-5">
      Visit <a class="text-blue-600 underline" href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
      apps.
    </p>
  
    <p class="max-w-xs sm:max-w-none my-4 mx-auto leading-5">
      Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
      the officially supported framework, also powered by Vite!
    </p>
  </main>
  
  <style>
    :root {
      --svelte-rgb: 255, 62, 0;
    }
    h1 {
      color: rgb(var(--svelte-rgb));
    }
  </style>