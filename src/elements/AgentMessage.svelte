<script lang="ts">
    import Typewriter from 'svelte-typewriter'
    import { createEventDispatcher } from 'svelte';

    let writerInterval = [100,20,15,2,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,2,5,1,3,1,2,1,0,0,0,0,0,0,0,1,0,1] as unknown as number;
    export let message = "";
    export let index: number = 0;
    const dispatch = createEventDispatcher();

    function finished(): void{
        dispatch("finished", index)
    }

</script>

<div class="agent-message-container">
    <div class="agent-message-box">
            <Typewriter interval={writerInterval} on:done={finished}>
                <p>{message}</p>
            </Typewriter>

    </div>
</div>

<style>
    .agent-message-container{
        width: 100%;
        display: flex;
        justify-content: start;
    }

    .agent-message-box{
        border-radius: 10px;
        overflow-wrap: break-word;
        text-align: start;
    }

</style>