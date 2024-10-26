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
                                        setTimeout(()=>{
                                            observedChild.style.display = "block";
                                            removeLoader();
                                            observer.disconnect();
                                        },1000)
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
                observedChild.style.display = "none";
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
    <Circle color="var(--load-spinner-color)" size="15" unit="px"/>
</div>
<slot></slot>

<style>
    #loader{
        background-color: var(--element-color);
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: end;
        opacity: 0;
        animation: fadeIn 0.5s ease forwards;
        padding: 1rem;
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
</style>
