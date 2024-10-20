<script lang="ts">
    import { onMount } from 'svelte';
    import { fade} from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';

    let searchQuery: string = '';
    const dispatch = createEventDispatcher();

  
    function handleKeyDown(event:KeyboardEvent): void {
      if (event.key === 'Enter'){
        request();
      }
    }

    function handleSearchButton(event:MouseEvent): void {
        request();
    }
  

    function request():void{
      let inputValue = document.getElementById('search-input') as HTMLInputElement;
      dispatch('message', inputValue.value)
    }

    let mount = false;
    onMount(() => {
        mount = true;
    });

</script>

{#if mount}
<div transition:fade>
    <input type="text" 
    id="link-search" 
    name="link-search" 
    placeholder="Search"
    bind:value={searchQuery}
    on:keydown={handleKeyDown}
    >

    <button id="search-btn" on:click={handleSearchButton}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-2xl"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z" fill="currentColor"></path></svg>
    </button>
</div>
{/if}

<style>
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
    }

    input{
        margin-left: 20px;
        padding: 0px 10px;
        min-width: 400px;
        height: 100%;
    }
    input::placeholder{
        padding-left: 5px;
    }
    
    button{
        padding: 0;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        height: 100%;
        width: 50px;
        margin-left: 10px;
    }
</style>