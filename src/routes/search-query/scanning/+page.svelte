<script lang="ts">
    import Navbar from "../../../elements/Navbar.svelte";
    import { Circle3 } from "svelte-loading-spinners";
    import { onMount } from "svelte";
  import { fly } from "svelte/transition";

    let results: number = 4;
    let assetsFound: number = 0;
    let canCount = true;
    let showResults = false;

    const finalResults = 321;
    const finalAssetsFound = 19304408;

    const getRandomIncrement = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const incrementResults = () => {
        const intervalId = setInterval(() => {

            if (results < finalResults && canCount) {
                results += getRandomIncrement(30, 60);
                if (results >= finalResults) {
                    results = finalResults;
                    stopCounting();
                    clearInterval(intervalId);
                }
            }
            
            showResults = true;
        }, 2000);
    };

    const incrementAssetsFound = () => {
        const intervalId = setInterval(() => {
            if (assetsFound < finalAssetsFound && canCount) {
                assetsFound += getRandomIncrement(50000, 300000);
                if (assetsFound >= finalAssetsFound) {
                    assetsFound = finalAssetsFound;
                    stopCounting();
                    clearInterval(intervalId);
                }
            }
        }, 300);
    };

    function stopCounting():void{
        canCount = false;
        let loader = document.getElementById("loader");
        let scanningText = document.getElementById("scanning-text");

        loader?.setAttribute("style","display:none");
        scanningText?.setAttribute("style","display:none");
    }

    onMount(() => {
        incrementResults();
        incrementAssetsFound();
    });
</script>

<Navbar />
<main>
    <section>
        <h2><bold id="results">{results} results</bold> found ({assetsFound.toLocaleString()} assets analysed)</h2>
        <div id="loader">
            <Circle3 size="60" unit="px" duration="1.5s"/>
        </div>
        <h2 id="scanning-text">Scanning database & queueing queries...</h2>
        {#if showResults}
        <div id="buttons">
            <button transition:fly={{ y: 200, duration: 700 }} on:click|preventDefault={() => window.open('https://analyzer.leading.nl/app/crawl-settings/1/edit', '_blank')}>
                Review Query
            </button>
            <button transition:fly={{ y: 200, duration: 700 }} on:click|preventDefault={() => window.open('https://analyzer.leading.nl/app/posts?tableSortColumn=reach&tableSortDirection=desc', '_blank')}>
                View Results
            </button>
        </div>

        {/if}
    </section>
</main>

<style>
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-top: 13vh;
    }
    
    #results{
        color: var(--button-color);
    }
    
    #buttons{
        display: flex;
        gap: 15px;
    }


</style>
