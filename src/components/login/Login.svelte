<script lang="ts">
	import { signIn } from '../../hooks/auth';
	import { TextInput } from '../text-input';
	import { Button } from '../button/';
	import { form } from './style';

	let userData = { name: '123', password: '123' };

	$: disabled = !userData.name || !userData.password;
</script>

<form class={form} on:submit|preventDefault={() => signIn(userData)}>
	<TextInput bind:value={userData.name} label="Username" />
	<TextInput bind:value={userData.password} label="Password" />
	<Button {disabled} type="submit">Submit</Button>
</form>
