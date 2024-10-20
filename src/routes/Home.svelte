<script language="ts">
  import Navbar from '../elements/Navbar.svelte';

  let selectedOption = "search-query";
  
</script>

<Navbar />

<main>
  <section>
    <h2>Select query type:</h2>
    <form>
      <div class="form-container">
        <input type="radio" id="search-query" name="query-type" value="search-query" checked bind:group={selectedOption}>
        <label for="search-query">Search by keyword, task or media</label><br>
        <input type="radio" id="search-link" name="query-type" value="search-link" bind:group={selectedOption}>
        <label for="search-link">Check URL</label><br>
      </div>
    
  
      <button on:click|preventDefault={() => window.location.href = selectedOption === 'search-query' ? '/ugc-intro-web/search-query' : '/ugc-intro-web/search-link'}>
        Search
      </button>
  
    </form>
  </section>

</main>

<style>
  main{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section{
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: start;
  }

  .form-container{
    background-color: var(--element-color);
    width: 30vw;
    padding: 25px 50px;
    border-radius: 25px;
  }

  form {
    margin-left: 2px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    gap: 25px;
  }


  input {
    margin: 15px 0px;
  }
</style>
