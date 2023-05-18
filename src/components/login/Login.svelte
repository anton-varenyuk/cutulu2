<script lang="ts">
	import { signIn } from '../../hooks/auth';

	const handleLogin = (e: FormDataEvent) => {
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		let userData = {};

		for (const entry of formData.entries()) {
			Object.assign(userData, { [entry[0]]: entry[1] });
		}

		if (Object.keys(userData).length) {
			signIn(userData);
		}
	};
</script>

<form on:submit|preventDefault={handleLogin}>
	<input type="text" autocomplete="username" name="name" id="name" placeholder="username" />
	<input
		type="password"
		name="password"
		autocomplete="current-password"
		id="password"
		placeholder="password"
	/>

	<button type="submit">Submit</button>
</form>
