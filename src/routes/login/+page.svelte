<script lang="ts">
	import { Login } from '../../components/login';
	import { isLoggedIn } from '../../hooks/auth';
	import { navigateTo } from '../../utils/navigation';

	$: if ($isLoggedIn) {
		navigateTo('dashboard');
	}
</script>

<div class="wrapper">
	<Login />
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
