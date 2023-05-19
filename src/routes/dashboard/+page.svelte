<script>
	import { isLoggedIn } from '../../hooks/auth';
	import { navigateTo } from '../../utils/navigation';
	import { Dashboard } from '../../components/dashboard';

	$: if (!$isLoggedIn) {
		navigateTo('login');
	}
</script>

<Dashboard />
