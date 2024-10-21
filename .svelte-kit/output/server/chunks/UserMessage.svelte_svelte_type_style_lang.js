import { c as create_ssr_component, i as is_promise, n as noop, e as createEventDispatcher } from "./ssr.js";
import "@formatjs/intl-segmenter/polyfill.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const css$1 = {
  code: "@keyframes svelte-1gv2i7t-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.typewriter-container.svelte-1gv2i7t *:not(.typing):not(.finished-typing):not([data-static]){display:none}.typewriter-container.svelte-1gv2i7t .finished-typing::after{content:none}.cursor.svelte-1gv2i7t .typing::after{content:'';width:var(--cursor-width, 1ch);height:2ch;display:inline-block;vertical-align:text-top;background-color:var(--cursor-color, #000000);animation:svelte-1gv2i7t-cursorFade 1.25s infinite}",
  map: `{"version":3,"file":"Typewriter.svelte","sources":["Typewriter.svelte"],"sourcesContent":["<script>\\n    import '@formatjs/intl-segmenter/polyfill'\\n\\n    export let mode = \\"concurrent\\"\\n\\n    // general-purpose props\\n\\texport let interval = 30\\n\\texport let cursor = true\\n    export let keepCursorOnFinish = false\\n\\texport let delay = 0\\n    export let showCursorOnDelay = false\\n    export let disabled = false\\n    export let element = \\"div\\"\\n\\n    // mode-specific props\\n    export let scrambleDuration = 3000\\n    export let scrambleSlowdown = true\\n\\texport let unwriteInterval = 30\\n    export let wordInterval = 1500\\n\\n    $: isLoopMode = /^loop(Once|Random)?$/.test(mode)\\n\\n    // these modes stop once all given elements have finished their animations\\n    // and support the cursor\\n    $: isFiniteCursorMode = [\\"concurrent\\", \\"cascade\\", \\"loopOnce\\"].includes(mode)\\n\\n    $: invalidCursorOnFinish = !isFiniteCursorMode && keepCursorOnFinish\\n    $: invalidCursorOnDelay = delay < 1 && showCursorOnDelay\\n    $: invalidLoopProps = !isLoopMode && ($$props.unwriteInterval || $$props.wordInterval)\\n    $: invalidScrambleProps = mode !== \\"scramble\\" && ($$props.scrambleDuration || $$props.scrambleSlowdown)\\n    $: unnecessaryCursorOnFinish = typeof keepCursorOnFinish === 'number' && keepCursorOnFinish < 1\\n\\n    const modes = {\\n        concurrent: () => import(\\"./modes/concurrent\\"),\\n        cascade: () => import(\\"./modes/cascade\\"),\\n        loop: () => import(\\"./modes/loop\\"),\\n        loopOnce: () => import(\\"./modes/loopOnce\\"),\\n        loopRandom: () => import(\\"./modes/loopRandom\\"),\\n        scramble: () => import(\\"./modes/scramble\\")\\n    }\\n\\n    $: invalidCursorOnFinish && console.warn(\\"[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes\\")\\n    $: invalidCursorOnDelay && console.warn(\\"[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0\\")\\n    $: invalidLoopProps && console.warn(\\"[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes\\")\\n    $: invalidScrambleProps && console.warn(\\"[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode\\")\\n    $: unnecessaryCursorOnFinish && console.warn(\\"[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1\\")\\n\\n    $: delayPromise = () => new Promise(resolve => setTimeout(() => resolve(delay), delay))\\n\\n    $: props = {\\n        interval,\\n        cursor,\\n        keepCursorOnFinish,\\n        delay,\\n        showCursorOnDelay,\\n        disabled,\\n        element,\\n        scrambleDuration,\\n        scrambleSlowdown,\\n        unwriteInterval,\\n        wordInterval\\n    }\\n<\/script>\\n\\n<style>\\n\\t@keyframes cursorFade {\\n\\t\\t0%,\\n\\t\\t100% {\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\n\\t\\t50% {\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t}\\n\\n\\t.typewriter-container :global(*:not(.typing):not(.finished-typing):not([data-static])) {\\n\\t\\tdisplay: none;\\n\\t}\\n\\n\\t.typewriter-container :global(.finished-typing::after) {\\n\\t\\tcontent: none;\\n\\t}\\n\\n    .cursor :global(.typing::after) {\\n        content: '';\\n        width: var(--cursor-width, 1ch);\\n        height: 2ch;\\n        display: inline-block;\\n        vertical-align: text-top;\\n        background-color: var(--cursor-color, #000000);\\n        animation: cursorFade 1.25s infinite;\\n    }\\n</style>\\n\\n<noscript>\\n    <slot />\\n</noscript>\\n\\n{#key $$props}\\n    {#if disabled}\\n        <div class=\\"typewriter-container\\">\\n            <slot />\\n        </div>\\n    {:else}\\n        {#await delayPromise()}\\n            {#if showCursorOnDelay}\\n                <div class=\\"typewriter-container cursor\\">\\n                    <p class=\\"typing\\"></p>\\n                </div>\\n            {/if}\\n        {:then}\\n            {#await modes[mode]() then selectedMode}\\n                <svelte:element this={element} use:selectedMode.default={props} class:cursor class=\\"typewriter-container\\">\\n                    <slot />\\n                </svelte:element>\\n            {/await}\\n        {/await}\\n    {/if}\\n{/key}\\n"],"names":[],"mappings":"AAiEC,WAAW,yBAAW,CACrB,EAAE,CACF,IAAK,CACJ,OAAO,CAAE,CACV,CAEA,GAAI,CACH,OAAO,CAAE,CACV,CACD,CAEA,oCAAqB,CAAS,uDAAyD,CACtF,OAAO,CAAE,IACV,CAEA,oCAAqB,CAAS,uBAAyB,CACtD,OAAO,CAAE,IACV,CAEG,sBAAO,CAAS,cAAgB,CAC5B,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,IAAI,cAAc,CAAC,IAAI,CAAC,CAC/B,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,YAAY,CACrB,cAAc,CAAE,QAAQ,CACxB,gBAAgB,CAAE,IAAI,cAAc,CAAC,QAAQ,CAAC,CAC9C,SAAS,CAAE,yBAAU,CAAC,KAAK,CAAC,QAChC"}`
};
const Typewriter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isLoopMode;
  let isFiniteCursorMode;
  let invalidCursorOnFinish;
  let invalidCursorOnDelay;
  let invalidLoopProps;
  let invalidScrambleProps;
  let unnecessaryCursorOnFinish;
  let delayPromise;
  let { mode = "concurrent" } = $$props;
  let { interval = 30 } = $$props;
  let { cursor = true } = $$props;
  let { keepCursorOnFinish = false } = $$props;
  let { delay = 0 } = $$props;
  let { showCursorOnDelay = false } = $$props;
  let { disabled = false } = $$props;
  let { element = "div" } = $$props;
  let { scrambleDuration = 3e3 } = $$props;
  let { scrambleSlowdown = true } = $$props;
  let { unwriteInterval = 30 } = $$props;
  let { wordInterval = 1500 } = $$props;
  const modes = {
    concurrent: () => import("./concurrent.js"),
    cascade: () => import("./cascade.js"),
    loop: () => import("./loop.js"),
    loopOnce: () => import("./loopOnce.js"),
    loopRandom: () => import("./loopRandom.js"),
    scramble: () => import("./scramble.js")
  };
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0) $$bindings.mode(mode);
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0) $$bindings.interval(interval);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0) $$bindings.cursor(cursor);
  if ($$props.keepCursorOnFinish === void 0 && $$bindings.keepCursorOnFinish && keepCursorOnFinish !== void 0) $$bindings.keepCursorOnFinish(keepCursorOnFinish);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0) $$bindings.delay(delay);
  if ($$props.showCursorOnDelay === void 0 && $$bindings.showCursorOnDelay && showCursorOnDelay !== void 0) $$bindings.showCursorOnDelay(showCursorOnDelay);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0) $$bindings.element(element);
  if ($$props.scrambleDuration === void 0 && $$bindings.scrambleDuration && scrambleDuration !== void 0) $$bindings.scrambleDuration(scrambleDuration);
  if ($$props.scrambleSlowdown === void 0 && $$bindings.scrambleSlowdown && scrambleSlowdown !== void 0) $$bindings.scrambleSlowdown(scrambleSlowdown);
  if ($$props.unwriteInterval === void 0 && $$bindings.unwriteInterval && unwriteInterval !== void 0) $$bindings.unwriteInterval(unwriteInterval);
  if ($$props.wordInterval === void 0 && $$bindings.wordInterval && wordInterval !== void 0) $$bindings.wordInterval(wordInterval);
  $$result.css.add(css$1);
  isLoopMode = /^loop(Once|Random)?$/.test(mode);
  isFiniteCursorMode = ["concurrent", "cascade", "loopOnce"].includes(mode);
  invalidCursorOnFinish = !isFiniteCursorMode && keepCursorOnFinish;
  invalidCursorOnDelay = delay < 1 && showCursorOnDelay;
  invalidLoopProps = !isLoopMode && ($$props.unwriteInterval || $$props.wordInterval);
  invalidScrambleProps = mode !== "scramble" && ($$props.scrambleDuration || $$props.scrambleSlowdown);
  unnecessaryCursorOnFinish = typeof keepCursorOnFinish === "number" && keepCursorOnFinish < 1;
  invalidCursorOnFinish && console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes");
  invalidCursorOnDelay && console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0");
  invalidLoopProps && console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes");
  invalidScrambleProps && console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode");
  unnecessaryCursorOnFinish && console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1");
  delayPromise = () => new Promise((resolve) => setTimeout(() => resolve(delay), delay));
  return `<noscript>${slots.default ? slots.default({}) : ``}</noscript> ${disabled ? `<div class="typewriter-container svelte-1gv2i7t">${slots.default ? slots.default({}) : ``}</div>` : `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${showCursorOnDelay ? `<div class="typewriter-container cursor svelte-1gv2i7t" data-svelte-h="svelte-1ssf3hl"><p class="typing"></p></div>` : ``} `;
    }
    return function() {
      return ` ${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return ``;
        }
        return function(selectedMode) {
          return ` ${((tag) => {
            return tag ? `<${element} class="${["typewriter-container svelte-1gv2i7t", cursor ? "cursor" : ""].join(" ").trim()}">${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
          })(element)} `;
        }();
      }(modes[mode]())} `;
    }();
  }(delayPromise())}`}`;
});
const css = {
  code: '#upload-btn.svelte-5iwnjk{padding:0;background-color:transparent;color:white;border:none;cursor:pointer;border-radius:5px;height:100%;width:50px}input[type="file"].svelte-5iwnjk{display:none}#search-btn.svelte-5iwnjk{padding:0;color:white;border:none;cursor:pointer;border-radius:5px;height:100%;width:50px;margin-left:10px}#search-input.svelte-5iwnjk{padding:0 10px;border:1px solid #ccc;border-radius:5px;width:30vw;height:100%}.search-container.svelte-5iwnjk{display:flex;align-items:center;height:50px}',
  map: '{"version":3,"file":"Chat.svelte","sources":["Chat.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { fade } from \\"svelte/transition\\";\\nimport { createEventDispatcher } from \\"svelte\\";\\nlet searchQuery = \\"\\";\\nlet file = null;\\nconst dispatch = createEventDispatcher();\\nfunction handleKeyDown(event) {\\n  if (event.key === \\"Enter\\") {\\n    request();\\n  }\\n}\\nfunction handleSearchButton(event) {\\n  request();\\n}\\nfunction handleFileChange(event) {\\n  const input = event.target;\\n  if (input.files && input.files.length > 0) {\\n    file = input.files[0];\\n    console.log(\\"Arquivo anexado:\\", file);\\n  }\\n}\\nfunction triggerFileUpload() {\\n  const fileInput = document.getElementById(\\"fileInput\\");\\n  if (fileInput) {\\n    fileInput.click();\\n  }\\n}\\nfunction request() {\\n  let inputValue = document.getElementById(\\"search-input\\");\\n  dispatch(\\"message\\", inputValue.value);\\n}\\nlet mount = false;\\nonMount(() => {\\n  mount = true;\\n});\\n<\/script>\\n\\n{#if mount}\\n<div class=\\"search-container\\" transition:fade>\\n    <button id=\\"upload-btn\\" on:click={triggerFileUpload}>\\n      <svg width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M9 7C9 4.23858 11.2386 2 14 2C16.7614 2 19 4.23858 19 7V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V7Z\\" fill=\\"currentColor\\"></path></svg>\\n    </button>\\n\\n    <input\\n    type=\\"text\\"\\n    id=\\"search-input\\"\\n    placeholder=\\"Search...\\"\\n    bind:value={searchQuery}\\n    on:keydown={handleKeyDown}\\n    />\\n    \\n    <button id=\\"search-btn\\" on:click={handleSearchButton}>\\n        <svg width=\\"32\\" height=\\"32\\" viewBox=\\"0 0 32 32\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\" class=\\"icon-2xl\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z\\" fill=\\"currentColor\\"></path></svg>\\n    </button>\\n    \\n    <input type=\\"file\\" id=\\"fileInput\\" on:change={handleFileChange} />\\n</div>\\n{/if}\\n    \\n<style>\\n      #upload-btn {\\n        padding: 0;\\n        background-color: transparent;\\n        color: white;\\n        border: none;\\n        cursor: pointer;\\n        border-radius: 5px;\\n        height: 100%;\\n        width: 50px;\\n      }\\n    \\n      input[type=\\"file\\"] {\\n        display: none;\\n      }\\n    \\n      #search-btn {\\n        padding: 0;\\n        color: white;\\n        border: none;\\n        cursor: pointer;\\n        border-radius: 5px;\\n        height: 100%;\\n        width: 50px;\\n        margin-left: 10px;\\n      }\\n    \\n      #search-input {\\n        padding: 0 10px;\\n        border: 1px solid #ccc;\\n        border-radius: 5px;\\n        width: 30vw;\\n        height: 100%;\\n      }\\n    \\n      .search-container {\\n        display: flex;\\n        align-items: center;\\n        height: 50px;\\n      }\\n</style>\\n    "],"names":[],"mappings":"AA4DM,yBAAY,CACV,OAAO,CAAE,CAAC,CACV,gBAAgB,CAAE,WAAW,CAC7B,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IACT,CAEA,KAAK,CAAC,IAAI,CAAC,MAAM,eAAE,CACjB,OAAO,CAAE,IACX,CAEA,yBAAY,CACV,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,IACf,CAEA,2BAAc,CACZ,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV,CAEA,+BAAkB,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,IACV"}'
};
const Chat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  $$result.css.add(css);
  return `${``}`;
});
export {
  Chat as C,
  Typewriter as T
};
