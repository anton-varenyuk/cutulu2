<script>
	import { Header } from '../components/header';
	import { isLoggedIn } from '../hooks/auth';
	import { navigateTo } from '../utils/navigation';

	$: if ($isLoggedIn) {
		navigateTo('dashboard');
	} else {
		navigateTo('login');
	}
</script>

<Header />

<div class="wrapper">
	<slot />
</div>

<style>
	.wrapper {
		padding: 20px;
	}
</style>
