<script>
	import { navigateTo } from '../utils/navigation';
	import { isLoggedIn } from '../hooks/auth';

	$: if ($isLoggedIn) {
		navigateTo('dashboard');
	} else {
		navigateTo('login');
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>
	Visit
	<a href="https://kit.svelte.dev">kit.svelte.dev</a>
	to read the documentation!!!
</p>
