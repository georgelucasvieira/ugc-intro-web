<script lang="ts">
    import { onMount } from 'svelte';
    import Navbar from "../../elements/Navbar.svelte";
    import Typewriter from 'svelte-typewriter'
    import Chat from '../../elements/Chat.svelte';
    import UserMessage from '../../elements/UserMessage.svelte';
    import AgentMessage from '../../elements/AgentMessage.svelte';
    import { fly } from 'svelte/transition';

    let writerInterval = [20, 100, 50, 20, 25, 18, 14, 50] as unknown as number;
    let currentChatMessage = "";
    let currentMessageIndex = 0;
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
      currentMessageIndex = event.detail as number;
      if (currentMessageIndex > 5){
        canSearch = true;
      }
    }

    function incrementIndex():void{
      currentMessageIndex += 1
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
            {#if currentMessageIndex > -1}
              <AgentMessage
                index={1}
                message={`Based on your input, I will search the internet for potential deepfake, fake news, and other content that is related to the following thematic. Please enter what you wish to search for.`} 
                on:finished={chatFinished} />
            {/if}    

            {#if currentMessageIndex > 0}
              <AgentMessage
              index={2}
              message={`The Bharatiya Janata Party (BJP) plays a central role in Indian politics and elections. Its campaigns, strategies, and leadership are often the subject of media attention, especially during major elections at the national and state levels. With elections being a high-stakes process, it is common to find disinformation, manipulated videos, and narratives being spread, sometimes aimed at discrediting the party or influencing voter sentiment. Monitoring for potential deepfake content, fake news, and media manipulation is critical for maintaining the integrity of the electoral process.`} 
              on:finished={chatFinished} />
            {/if}   

            {#if currentMessageIndex > 1}
              <AgentMessage
              index={3}
              message={`Here is a comprehensive list of related search queries, including translated terms in Hindi:`} 
              on:finished={chatFinished} />
            {/if}    

            {#if currentMessageIndex > 2}
              <Typewriter on:done={incrementIndex}><h3>Related Search Queries</h3></Typewriter>
            {/if}

            {#if currentMessageIndex > 3}
              <Typewriter on:done={incrementIndex}>
                <table>
                  <thead>
                    <tr>
                      <th><strong>English Keyword</strong></th>
                      <th><strong>Related Keywords</strong></th>
                      <th><strong>Hindi Translation</strong></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>BJP</td>
                      <td>BJP election fraud</td>
                      <td>भारतीय जनता पार्टी</td>
                    </tr>
                    <tr>
                      <td>Narendra Modi</td>
                      <td>Fake news Modi</td>
                      <td>नरेंद्र मोदी</td>
                    </tr>
                    <tr>
                      <td>BJP Hindutva</td>
                      <td>BJP fake news</td>
                      <td>बीजेपी हिंदुत्व</td>
                    </tr>
                    <tr>
                      <td>BJP election controversy</td>
                      <td>Deepfake BJP</td>
                      <td>बीजेपी चुनाव विवाद</td>
                    </tr>
                    <tr>
                      <td>BJP social media propaganda</td>
                      <td>Fake videos BJP</td>
                      <td>भाजपा सोशल मीडिया प्रचार</td>
                    </tr>
                    <tr>
                      <td>BJP fake campaign promises</td>
                      <td>Misleading BJP speeches</td>
                      <td>भाजपा झूठे चुनावी वादे</td>
                    </tr>
                    <tr>
                      <td>BJP disinformation</td>
                      <td>BJP election rigging</td>
                      <td>भाजपा दुष्प्रचार</td>
                    </tr>
                    <tr>
                      <td>BJP manipulated video</td>
                      <td>BJP hate speech</td>
                      <td>भाजपा छेड़छाड़ वाला वीडियो</td>
                    </tr>
                    <tr>
                      <td>BJP IT cell fake news</td>
                      <td>BJP WhatsApp misinformation</td>
                      <td>भाजपा आईटी सेल फेक न्यूज</td>
                    </tr>
                    <tr>
                      <td>BJP communal politics</td>
                      <td>Election rigging India</td>
                      <td>भाजपा सांप्रदायिक राजनीति</td>
                    </tr>
                    <tr>
                      <td>BJP paid media</td>
                      <td>BJP propaganda India</td>
                      <td>भाजपा पेड मीडिया</td>
                    </tr>
                    <tr>
                      <td>BJP fake news Twitter</td>
                      <td>BJP Instagram disinformation</td>
                      <td>भाजपा ट्विटर फेक न्यूज</td>
                    </tr>
                    <tr>
                      <td>BJP fake manifesto</td>
                      <td>BJP TikTok fake content</td>
                      <td>भाजपा नकली घोषणापत्र</td>
                    </tr>
                    <tr>
                      <td>BJP election scams</td>
                      <td>BJP deepfake elections</td>
                      <td>भाजपा चुनाव घोटाला</td>
                    </tr>
                    <tr>
                      <td>BJP electoral fraud</td>
                      <td>BJP misinformation WhatsApp</td>
                      <td>भाजपा चुनावी धोखाधड़ी</td>
                    </tr>
                  </tbody>
                </table>
              </Typewriter>
            {/if}
            
            {#if currentMessageIndex > 4}
              <AgentMessage
              index={6}
              message={`Would you like to add these queries to initiate a full database search? On what platform would you like to conduct the search: Facebook, Instagram, TikTok, Twitter (X), Pinterest, YouTube, Reddit, LinkedIn, or the Web?`} 
              on:finished={chatFinished} />
            {/if}        

          {/if}

        {/each}
      </section>
      
      <span class="footer-background"></span>

      <footer id="chat-position">
        <Chat on:message={handleChatMessages}/>
      </footer>
      
      {#if canSearch}
        <button id="search-button" transition:fly={{ y: 200, duration: 700 }} on:click|preventDefault={() => window.location.href = '/search-query/scanning'}>
          <p>Analyze</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 16 16" fill="none">
            <path d="M10 3V6H4L4 10H10L10 13L11 13L16 8L11 3L10 3Z" fill="#ffffff"/>
            <path d="M0 2L1.38281e-06 14H2L2 2L0 2Z" fill="#ffffff"/>
            </svg>
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
    margin-bottom: 5rem;;
  }

  .messages-chat-container{
    width: 60%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-height: 90vh;
    padding: 2rem 0;
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
    background-color: var(--button-color);
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
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

  table {
    --tw-border-spacing-x: 0px;
    --tw-border-spacing-y: 0px;
    border-collapse: separate;
    border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);
    border-color: inherit;
    text-indent: 0;
    margin-bottom: .25rem;
    margin-top: .25rem;
    width: 100%;
    font-size: .875em;
    line-height: 1.7142857;
    table-layout: auto;
  }

  table thead > tr{
    background-color: #383838;
    border-radius: 20px;
  }

  table thead tr > th{
    border: 1px solid #4a4a4ae6;
    padding: .25rem .75rem;
  }

  table thead tr > th:first-child{
    border-top-left-radius: 0.375rem;
  }

  table thead tr > th:last-child{
    border-top-right-radius: 0.375rem;
  }

  table tbody tr > td{
    border: 1px solid #4a4a4ae6;
    padding: .25rem .75rem;
  }

  table tbody tr:last-child > td:first-child{
    border-bottom-left-radius: 0.375rem;
  }

  table tbody tr:last-child > td:last-child{
    border-bottom-right-radius: 0.375rem;
  }


</style>
  
