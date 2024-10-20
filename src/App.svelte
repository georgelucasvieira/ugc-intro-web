<script lang="ts">

import Home from './routes/Home.svelte'
import Scanning from './routes/Scanning.svelte';
import SearchLink from './routes/SearchLink.svelte';
import SearchQuery from './routes/SearchQuery.svelte';
import { Router, Route } from "svelte-routing";


</script>

<Router >
	<Route path="/"><svelte:component this={Home} /></Route>
	<Route path="/home"><svelte:component this={Home} /></Route>
	<Route path="/search-query"><svelte:component this={SearchQuery} /></Route>
	<Route path="/search-link"><svelte:component this={SearchLink} /></Route>
	<Route path="/search-query/scanning"><svelte:component this={Scanning} /></Route>
</Router>




