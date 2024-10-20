<script lang="ts">
    import { onMount } from 'svelte';
    import Navbar from "../elements/Navbar.svelte";
    import Typewriter from 'svelte-typewriter'
    import Chat from '../elements/Chat.svelte';
    import UserMessage from '../elements/UserMessage.svelte';
    import AgentMessage from '../elements/AgentMessage.svelte';
    import { fly } from 'svelte/transition';

    let writerInterval = [20, 100, 50, 20, 25, 18, 14, 50] as unknown as number;
    let currentChatMessage = "";
    let startedChat = false;
    let startAnimation = false;
    let canSearch = false;
    let agentResponsesCounter = 0;

    type Message = {
      user: 'A' | 'B';
      content: string;
    };

    let messages: Message[] = [];

    function handleFirstChatMessage(event: CustomEvent){
      currentChatMessage = event.detail as string;
      startedChat = true;
      messages = [...messages, { user: 'A', content: currentChatMessage }];
      messages = [...messages, { user: 'B', content: "" }];
    }

    function handleChatMessages(event: CustomEvent){
      currentChatMessage = event.detail as string;
      messages = [...messages, { user: 'A', content: currentChatMessage }];
      messages = [...messages, { user: 'B', content: "" }];
      agentResponsesCounter += 1;
    }

    function chatFinished(event: CustomEvent):void{
      canSearch = event.detail as boolean;
      let divElem = document.querySelector('.content-table') as HTMLElement;
      divElem?.setAttribute("style", "display:flex");
    }

    onMount(() => {
      startAnimation = true;
    });

</script>


<Navbar />

<main>
  {#if !startedChat}
    <section class="first-chat-container">
      <Typewriter interval={writerInterval} delay={400}>
        <h2>Describe by keyword, task or media</h2>
      </Typewriter>

      <Chat on:message={handleFirstChatMessage}/>
    </section>

  {:else}
      <section class="messages-chat-container">
        {#each messages as messageComp (messageComp)}
          {#if messageComp.user === 'A'}
            <UserMessage message={messageComp.content} />
          {/if}

          {#if messageComp.user === 'B'}
              <AgentMessage
                message={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`} 
                on:finished={chatFinished} />
          {/if}

        {/each}
      </section>
      
      <span class="footer-background"></span>

      <footer id="chat-position">
        <Chat on:message={handleChatMessages}/>
      </footer>
      
      {#if canSearch}
        <button id="search-button" transition:fly={{ y: 200, duration: 700 }} on:click|preventDefault={() => window.location.href = '/ugc-web-intro/search-query/scanning'}>
          Analyze
        </button>
      {/if}
  {/if}
</main>

<style>
  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .first-chat-container{
    width: 80%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 18rem;
  }

  .messages-chat-container{
    width: 60%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  #chat-position{
    position:fixed;
    bottom:0;
    left: 50%;
    padding-bottom: 20px;
    transform: translateX(-50%);
  }
  
  h2{
    margin-bottom: 30px;
  }
  
  #search-button{
    position:fixed;
    bottom:15vh;
    right: 30%;
    background-color: white;
    color: #213547;
  }

  .footer-background{
    position:fixed;
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 90px;
    background-color: var(--background-color);
  }

</style>
  
