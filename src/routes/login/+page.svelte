<script>
	import { Login } from '../../components/login';
	import { isLoggedIn } from '../../hooks/auth';
	import { navigateTo } from '../../utils/navigation';

	$: if ($isLoggedIn) {
		navigateTo('dashboard');
	}
</script>

<Login />
