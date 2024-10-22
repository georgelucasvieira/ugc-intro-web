<script lang="ts">
    import { onMount } from 'svelte';
    import Navbar from "../../elements/Navbar.svelte";
    import Typewriter from 'svelte-typewriter'
    import Chat from '../../elements/Chat.svelte';
    import UserMessage from '../../elements/UserMessage.svelte';
    import { fly } from 'svelte/transition';

    let writerInterval = [20, 100, 50, 20, 25, 18, 14, 50] as unknown as number;
    let currentChatMessage = "";
    let startedChat = false;
    let startAnimation = false;
    let canSearch = false;
    let agentResponsesCounter = 0;
    let currentMessageIndex = 0;

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
              <h2 style="margin:0;">Preview</h2>
              <blockquote class="twitter-tweet"><p lang="hi" dir="ltr">प्रश्न:- <a href="https://twitter.com/hashtag/ModiKaun?src=hash&amp;ref_src=twsrc%5Etfw">#ModiKaun</a> है..? <br> संक्षेप में व्याख्या कीजिए <br><br>उत्तर :- वही मोदी जिसने - <br><br>• वही जिसके राज में कोविद में गंगा घाट पर लाशें का ढक गया था।<br>• वही जिसके राज में युवा 83 परसेंट बेरोजगार हुए।<br>• वही जिसने बलात्कारियों के लिए वोट मांगा। <br>• वही जिसने मणिपुर को नफ़रत… <a href="https://t.co/3XLEaUPjan">pic.twitter.com/3XLEaUPjan</a></p>&mdash; Shailendra Yadav (@ShailendraA2Y) <a href="https://twitter.com/ShailendraA2Y/status/1791087269732130924?ref_src=twsrc%5Etfw">May 16, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              
              {#if currentMessageIndex > -1}
              <Typewriter on:done={incrementIndex} interval={10}>
                <h3>Short analysis text:</h3>
              </Typewriter>
              {/if}

              {#if currentMessageIndex > 0}
              <Typewriter on:done={incrementIndex} interval={10}>
              <p>The tweet from Shailendra Yadav criticizes Indian Prime Minister Narendra Modi by listing a series of grievances, including:</p>
              </Typewriter>
              {/if}

              {#if currentMessageIndex > 1}
              <Typewriter on:done={incrementIndex} interval={10}>
              <ul>
                <li>Allegations of mismanagement during the COVID-19 pandemic, referring to bodies found on the banks of the Ganges.</li>
                <li>High unemployment rates, specifically mentioning 83% of youths being unemployed.</li>
                <li>Accusations of soliciting votes for individuals accused of rape.</li>
                <li>Ignoring the crisis in Manipur, where ethnic and political tensions have escalated.</li>
                <li>Using fake vaccines to endanger the public for political donations.</li>
              </ul>
              </Typewriter>
              {/if}

              {#if currentMessageIndex > 2}
              <Typewriter on:done={incrementIndex} interval={10}>
              <p>This tweet seems to reflect a broader dissatisfaction with Modi’s government from certain sections of the population. Other responses either support or criticize the original post, showcasing the polarized political discourse surrounding Modi’s leadership.</p>
              </Typewriter>
              {/if}

              {#if currentMessageIndex > 3}
              <Typewriter on:done={incrementIndex} interval={10}>
              <p>The sentiment in the comments section of Shailendra Yadav’s tweet is mixed, reflecting the polarized opinions about Prime Minister Narendra Modi.</p>
              </Typewriter>
              {/if}

              {#if currentMessageIndex > 4}
              <Typewriter on:done={incrementIndex} interval={10}>
              <ol type="1">
                <li>Supportive of Modi: Several users defend Modi, with one comment suggesting that Modi is strong and capable, referring to him as “इक अकेला सब पे भारी” (one man is enough for all). Another user dismisses the unemployment statistic mentioned in the tweet, providing a rebuttal with different unemployment data.</li>
                <li>Critical of Modi: Other comments align with the original tweet’s criticism, expressing frustration with issues like unemployment and mismanagement during Modi’s tenure. Some sarcastically support the claim that Modi’s governance has been harmful, with one user even describing the government as a “dog’s Raj.”</li>
                <li>Neutral or Religious Remarks: A few users steer the conversation toward religious sentiments, invoking blessings and religious greetings, without directly engaging in the political debate.</li>
              </ol>
              </Typewriter>
              {/if}

              {#if currentMessageIndex > 5}
              <Typewriter on:done={incrementIndex} interval={10}>
              <p>Overall, the comments display a combination of support, criticism, and disengagement, reflecting the diversity of political opinions in India.</p>
            </Typewriter>
            {/if}

            {#if currentMessageIndex > 6}
            <Typewriter on:done={incrementIndex} interval={10}>
              <p>Let’s fact-check each statement from Shailendra Yadav’s tweet about Prime Minister Narendra Modi:</p>
            </Typewriter>
            {/if}

            {#if currentMessageIndex > 7}
            <Typewriter on:done={incrementIndex} interval={10}>
              <ol type="1">
                <li>
                  <b>COVID-19 mismanagement and bodies on the Ganges</b>:
                  <ul>
                    <li>
                      <b>Claim</b>: Under Modi’s rule, bodies were
                      found floating on the Ganges during COVID-19.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Fact-check</b>: This is largely accurate.
                  During the second wave of COVID-19 in India (2021), many media outlets
                  reported bodies of suspected COVID-19 victims floating in the Ganges,
                  particularly in Uttar Pradesh and Bihar. The surge in cases overwhelmed the
                  healthcare system, leading to high numbers of deaths and inadequate
                  facilities for proper cremation. <a
                    target="_blank"
                    href="https://globalnews.ca/news/10812024/canada-india-row-nijjar-explained/"
                    rel="noopener noreferrer"
                    > Global News</a
                  >
                </li>
                <li>
                  ’<a
                    target="_blank"
                    href="https://thediplomat.com/2024/10/india-canada-relations-in-a-downward-spiral/"
                    rel="noopener noreferrer"
                    >he Diplomat</a
                  >
                  <ul>
                    <li>.</li>
                  </ul>
                </li>
                <li>
                  <b>83% youth unemployment</b>:
                  <ul>
                    <li>
                      <b>Claim</b>: 83% of youths are unemployed
                      under Modi's governmen’.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Fact-check</b>: This appears to be an
                  exaggerated figure. According to data from India's Periodic Labour Force
                  Survey (PLFS) for 2021-22, the overall unemployment rate was 4.1%, with
                  youth unemployment (ages 15-29) being notably higher at 12.9%. While youth
                  unemployment is a pressing issue in India, the 83% figure seems overstated. <a
                    target="_blank"
                    href="https://lethbridgeherald.com/news/national-news/2024/10/14/why-india-and-canada-are-in-an-escalating-rift-with-each-expelling-diplomats/"
                    rel="noopener noreferrer"
                    > Lethbridge Herald</a
                  >
                  <ul>
                    <li>.</li>
                  </ul>
                </li>
                <li>
                  <b>Soliciting votes for individuals accused of rape</b>:
                  <ul>
                    <li>
                      <b>Claim</b>: Modi asked for votes on behalf
                      of rapists.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Fact-check</b>: There are no direct public
                  statements where Modi solicited votes for rapists. However, there has been
                  controversy involving Modi’s Bharatiya Janata Party (BJP), particularly in
                  the case of Bilkis Bano, where 11 convicts in a gang rape and murder case
                  during the 2002 Gujarat riots were released early from prison. BJP members
                  were reported to have praised the’convicts. Modi did not personally solicit
                  votes for these individuals, but his party's involvement in such cases has
                  sparked outrage. <a
                    target="_blank"
                    href="https://thediplomat.com/2024/10/india-canada-relations-in-a-downward-spiral/"
                    rel="noopener noreferrer"
                    > The Diplomat</a
                  >
                </li>
                <li>
                  ’<a
                    target="_blank"
                    href="https://lethbridgeherald.com/news/national-news/2024/10/14/why-india-and-canada-are-in-an-escalating-rift-with-each-expelling-diplomats/"
                    rel="noopener noreferrer"
                    > Lethbridge Herald</a
                  >
                  <ul>
                    <li>.</li>
                  </ul>
                </li>
                <li>
                  <b>Manipur violence</b>:
                  <ul>
                    <li>
                      <b>Claim</b>: Modi allowed hatred to engulf
                      Manipur.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Fact-check</b>: This refers to ethnic and
                  political violence that erupted in Manipur in May 2023 between the Meitei
                  and Kuki communities. The Modi government was criticized for its slow
                  response in handling the conflict, which led to significant violence,
                  displacement, and destruction. While the government eventually deployed
                  military forces, critics argue that the central government should have acted
                  sooner to prevent the escalation. <a
                    target="_blank"
                    href="https://lethbridgeherald.com/news/national-news/2024/10/14/why-india-and-canada-are-in-an-escalating-rift-with-each-expelling-diplomats/"
                    rel="noopener noreferrer"
                    >Lethbridge Herald</a
                  >
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://thediplomat.com/2024/10/india-canada-relations-in-a-downward-spiral/"
                    rel="noopener noreferrer"
                    >The Diplomat</a
                  >
                  <ul>
                    <li>.</li>
                  </ul>
                </li>
                <li>
                  <b>Fake vaccines and endangering public for donations</b>:
                  <ul>
                    <li>
                      <b>Claim</b>: Modi endangered 140 crore
                      people by giving out fake vaccines for donations.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Fact-check</b>: There is no credible evidence
                  to support the claim that fake vaccines were distributed under Modi’s
                  government. India launched one of the world’s largest vaccination campaigns,
                  administering billions of doses of vaccines like Covaxin and Covishield,
                  both of which received regulatory approval. There were isolated reports of
                  fraudulent vaccine camps in India, but these were local issues not directly
                  tied to Modi's administration or large-scale distribution. <a
                    target="_blank"
                    href="https://globalnews.ca/news/10812024/canada-india-row-nijjar-explained/"
                    rel="noopener noreferrer"
                    >Global News</a
                  >
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://lethbridgeherald.com/news/national-news/2024/10/14/why-india-and-canada-are-in-an-escalating-rift-with-each-expelling-diplomats/"
                    rel="noopener noreferrer"
                    >Lethbridge Herald</a
                  >
                  <ul>
                    <li>.</li>
                  </ul>
                </li>
              </ol>
            </Typewriter>
            {/if}

            {#if currentMessageIndex > 8}
            <Typewriter on:done={incrementIndex} interval={10}>
              <h3>Summary</h3>
            </Typewriter>
            {/if}

            {#if currentMessageIndex > 9}
            <Typewriter on:done={incrementIndex} interval={10}>
              <ul>
                <li>True: COVID-19 mismanagement and bodies in the Ganges.</li>
                <li>Exaggerated: 83% youth unemployment (actual figures are lower).</li>
                <li>Misleading: Modi soliciting votes for rapists (no direct evidence, but related controversies exist).</li>
                <li>Partially True: Criticism of the handling of Manipur violence.</li>
                <li>False: Fake vaccines claim (no evidence of widespread fraud by the government).</li>
              </ul>
            </Typewriter>
            {/if}

            {#if currentMessageIndex > 10}
              <div>
                <p><b>Global News</b></p>
                <a href="https://globalnews.ca/news/10812024/canada-india-row-nijjar-explained/">Canada-India tensions: What’s happened and how did we get here?  | Globalnews.ca</a>
                <p>Canadian officials named India’s Home Minister Amit Shah as having “authorized the intelligence-gathering missions and attacks on Sikh separatists” in Canada, U.S. media reported.</p>
                <img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fglobalnews.ca%2Fwp-content%2Fuploads%2F2024%2F10%2Ftrudeau-modi-2.jpg%3Fquality%3D85%26strip%3Dall%26w%3D720%26h%3D379%26crop%3D1&quot" width="80%" alt="">
              </div>

              <div>
                <p><b>thediplomat.com</b></p>
                <a href="https://thediplomat.com/2024/10/india-canada-relations-in-a-downward-spiral/">Canada-India tensions: What’s happened and how did we get here?  | Globalnews.ca</a>
                <p>A diplomatic row between Canada and India is back in the spotlight amid mounting foreign interference concerns and the 2023 killing of a Sikh separatist leader in B.C.</p>
                <img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fthediplomat.com%2Fwp-content%2Fuploads%2F2024%2F10%2Fsizes%2Ftd-story-s-2%2Fthediplomat_2024-10-15-195505.jpg" width="80%" alt="">
              </div>

              <div>
                <p><b>The Lethbridge Herald - News and Sports from around Lethbridge</b></p>
                <a href="https://lethbridgeherald.com/news/national-news/2024/10/14/why-india-and-canada-are-in-an-escalating-rift-with-each-expelling-diplomats/">Why India and Canada are in an escalating rift, with each expelling diplomats</a>
                <p>Ottawa's decision Monday to expel India's top envoy and five other diplomats is just the latest development in tensions that have simmered for months</p>
                <img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Flethbridgeherald.com%2Fwp-content%2Fuploads%2Fcp%2F2024101422104-20241014201020-049cda0fcab07b661f5ca085dfba20a7cfc6059b3e813fe26c365c23f13f43ce.jpg" width="60%" alt="">
              </div>
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
  
