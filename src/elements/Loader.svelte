<script lang="ts">
    import { onDestroy } from 'svelte';
    import {Circle} from 'svelte-loading-spinners';
  import { fade } from 'svelte/transition';
        
    export let targetSelector: string;
    export let height: string = "100px";
    export let width: string = "100px";
    
    let loader:HTMLElement;
    let observedChild:HTMLElement;

    const mutationCallback = (mutationsList: MutationRecord[]) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach((node) => {
                        if (node instanceof HTMLElement) {
                            let target = node.querySelector(targetSelector);
                            if (target){
                                if (target instanceof HTMLIFrameElement){
                                    target.onload = function(){
                                        observedChild.style.display = "block";
                                        removeLoader();
                                        observer.disconnect();
                                    }
                                }  
                            } else{
                                observedChild.style.display = "block";
                                removeLoader();
                                observer.disconnect();
                            }
                        }
                    });
                }
            }
        }
    };
    const observer:MutationObserver = new MutationObserver(mutationCallback);

    function removeLoader(){
        if (loader){
            loader.remove();
        }
    }

    function observeDiv(node: HTMLElement):void {
        loader = node;
        loader.style.width = width;
        loader.style.height = height;

        const parent = loader?.parentElement;
        if (parent && parent.children.length > 1){
            observedChild = loader?.parentElement?.children[1] as HTMLElement;

            if (observedChild) {
                // observedChild.style.display = "none";
                observer.observe(observedChild, {
                    childList: true,  
                    attributes: false,     
                    subtree: false,        
                });
            }
        }
       
    }

    onDestroy(() => {
        observer.disconnect();
    });


</script>

<div id="loader" bind:this={loader} use:observeDiv in:fade={{ duration: 500 }}>
    <Circle color="#c4c4c4" size="30" unit="px"/>
</div>
<slot></slot>

<style>
    #loader{
        background-color: var(--element-color);
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        opacity: 0;
        animation: fadeIn 0.5s ease forwards;
        padding-top: 2rem;
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
</style>
