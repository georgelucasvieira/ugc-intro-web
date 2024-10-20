<script lang="ts">
    import Typewriter from 'svelte-typewriter'
    import { createEventDispatcher } from 'svelte';

    let writerInterval = [20, 100, 50, 20, 25, 18, 14, 50, 100, 20, 15, 10, 5, 5, 5, 5, 5,5, 5,5, 5,5, 5,5, 5,5, 5,5, 5,5, 5,5, 5,5, 5,5, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,100, 100,50,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,50, 25,5,5] as unknown as number;
    export let message = "";
    const dispatch = createEventDispatcher();

    function finished(): void{
        dispatch("finished", true)
    }

</script>

<div class="agent-message-container">
    <div class="agent-message-box">
            <Typewriter interval={writerInterval} delay={400} on:done={finished}>
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
        padding: 0px 10px;
        border-radius: 10px;
        background-color: var(--element-color);
        overflow-wrap: break-word;
        text-align: start;
    }

    .content-table{
        height: 200px;
        width: 300px;
        background-color: black;
        display:none;
        margin-bottom: 20px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
</style>