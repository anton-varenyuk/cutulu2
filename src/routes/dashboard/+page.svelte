<script>
	import { isLoggedIn } from '../../hooks/auth';
	import { navigateTo } from '../../utils/navigation';

	$: if (!$isLoggedIn) {
		navigateTo('login');
	}
</script>

<span>this is dashboard page</span>
