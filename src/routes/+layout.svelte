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
<slot />
