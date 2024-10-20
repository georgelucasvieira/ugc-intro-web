<script lang="ts">
    import { onMount } from 'svelte';
    import Navbar from "../elements/Navbar.svelte";
    import Typewriter from 'svelte-typewriter'
    import Chat from '../elements/Chat.svelte';
    import UserMessage from '../elements/UserMessage.svelte';
    import AgentPreview from '../elements/AgentPreview.svelte';
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
        <h2>Check URL</h2>
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
          <h2>Preview</h2>
          <img src="https://ichef.bbci.co.uk/news/480/cpsprodpb/17BCA/production/_130262279_microsoftteams-image.png.webp" alt="Getty Images Riot police in Marseille" width="100%"/>

          <p>The article highlights how false and misleading content about the French riots is circulating on social media. Examples include an image from a French film shared as real, footage from a "Fast and Furious" movie mistaken for the riots, and a video of a "sniper" that predates the current unrest. Another viral TikTok video claimed to show a crowd in France, but it was actually from a concert in Mexico City. These false posts have gained millions of views, potentially escalating tensions.</p>

          <h2>The riot image from a French film</h2>
          <img src="https://ichef.bbci.co.uk/news/480/cpsprodpb/1D98/production/_130267570_c9b044b2-c4ce-4575-95c1-7305b9bd2989.png.webp" alt="Iconoclast, Lyly Films Image of a stolen French police van from the film, Athena" width="100%"/>
          <ul>
            <li>A striking image showing a group of young men driving a French police van</li>
            <li>The tweet posted early on 2 July had over 1.7m views</li>
            <li>BBC Verify examined the image and concluded that the tweet is false</li>
          </ul>

          <h2>Footage from another film</h2>
          <img src="https://ichef.bbci.co.uk/news/480/cpsprodpb/68FC/production/_130267862_falsecarfalling.jpg.webp" alt="cars falling from a multi-storey car park, taken from a tweet and labelled" width="100%"/>
          <ul>
            <li>Footage of cars falling from the windows of a multi-storey car park has been widely shared online, with the message: "WTF is going on in France…"</li>
            <li>This is false - it is old footage and it looks like it has come from another film.</li>
            <li>BBC Verify took images of the video and carried out an online search to see if it had appeared before. The search brought up a tweet from June 2016, which claimed the footage was from the set of the action movie, Fast and Furious 8 - which was filmed in Cleveland, Ohio.</li>
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Fast &amp; Furious 8 filming in Cleveland. Imagine if you weren&#39;t aware and suddenly saw this. (h/t Kasey Crabtree) <a href="https://t.co/0u08Lgo0DH">pic.twitter.com/0u08Lgo0DH</a></p>&mdash; Justin King (@JustinKing) <a href="https://twitter.com/JustinKing/status/738751021879558144?ref_src=twsrc%5Etfw">June 3, 2016</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </ul>

          <h2>Old footage of a "sniper"</h2>
          <img src="https://ichef.bbci.co.uk/news/480/cpsprodpb/C40A/production/_130268105_oldvideo.jpg.webp" alt="snipper on a roof from a video with a label &quot;old image&quot;" width="100%"/>
          <ul>
            <li>Over the past few days, a video has been shared repeatedly on Twitter and the messaging app, Telegram showing a hooded man, on a rooftop pointing what appears to be a rifle</li>
            <li>The video has been viewed hundreds of thousands of times across different platforms and accounts, and retweeted thousands of times.</li>
            <li>But the video was not filmed during the current disturbances, it is old footage. By searching for previous instances of the video on social media, BBC Verify can confirm it was posted on Twitter on 13 March, 2022.</li>
            <li>The video was likely filmed on the roof of a residential tower block in an eastern suburb of Paris, but it wasn't possible to confirm whether the rifle was real or a replica gun.</li>
          </ul>

          <h2>Video of large crowd is from Mexico</h2>
          <img src="https://ichef.bbci.co.uk/news/480/cpsprodpb/18607/production/_130274899_f0gvvztwiaytjgyz.jpg.webp" alt="TIKTOK Screenshot of TikTok video" width="100%"/>
          <ul>
            <li>A video on TikTok - showing a huge crowd of people with the caption, "Nanterre, France - Nahel," and a series of sad emojis - has had more than nine million views.</li>
            <li>Nanterre is the suburb of Paris where Nahel M, who was 17, was shot by police.</li>
            <li>BBC Verify ran a search for other versions of the video on TikTok, and found the exact same clip posted last month, claiming to show a concert by the Argentinian band Los Fabulosos Cadillacs in Mexico City on 3 June.</li>
            <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@miguel_angel_2021/video/7241064376579509547" data-video-id="7241064376579509547" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@miguel_angel_2021" href="https://www.tiktok.com/@miguel_angel_2021?refer=embed">@miguel_angel_2021</a> <a title="losfabulososcadillacs" target="_blank" href="https://www.tiktok.com/tag/losfabulososcadillacs?refer=embed">#losfabulososcadillacs</a> <a title="zocalocdmx" target="_blank" href="https://www.tiktok.com/tag/zocalocdmx?refer=embed">#zocalocdmx</a> <a title="losfabulososcadillacszocalo" target="_blank" href="https://www.tiktok.com/tag/losfabulososcadillacszocalo?refer=embed">#losfabulososcadillacszocalo</a> <a title="recordmundial" target="_blank" href="https://www.tiktok.com/tag/recordmundial?refer=embed">#recordmundial</a> <a title="grupofirme" target="_blank" href="https://www.tiktok.com/tag/grupofirme?refer=embed">#grupofirme</a> <a title="grupofirmeoficial" target="_blank" href="https://www.tiktok.com/tag/grupofirmeoficial?refer=embed">#grupofirmeoficial</a> <a title="eduincaz" target="_blank" href="https://www.tiktok.com/tag/eduincaz?refer=embed">#eduincaz</a> <a title="cdmx" target="_blank" href="https://www.tiktok.com/tag/cdmx?refer=embed">#cdmx</a> <a title="conciertozocalo" target="_blank" href="https://www.tiktok.com/tag/conciertozocalo?refer=embed">#conciertozocalo</a> <a title="fypシ" target="_blank" href="https://www.tiktok.com/tag/fyp%E3%82%B7?refer=embed">#fypシ</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a target="_blank" title="♬ sonido original - Miguel Ángel" href="https://www.tiktok.com/music/sonido-original-7241064423454935854?refer=embed">♬ sonido original - Miguel Ángel</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
            <li>BBC Verify has matched the buildings visible in the TikTok video with the Google street view of Zocalo and confirmed it was filmed there.</li>
          </ul>

          {/if}

        {/each}
      </section>

      <span class="footer-background"></span>

      <footer id="chat-position">
        <Chat on:message={handleChatMessages}/>
      </footer>
      
      {#if canSearch}
        <button id="search-button" transition:fly={{ y: 200, duration: 700 }} on:click|preventDefault={() => window.location.href = '/search-query/scanning'}>
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
    margin-top: 6rem;
  }

  .twitter-tweet{
    max-width: 600px;
  }

  .messages-chat-container{
    width: 50%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: start;
    margin-top: 6rem;
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
  
