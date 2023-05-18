<script>
	import { header, textButton, logo, userControls } from '../style';
	import Logo from '$lib/assets/images/logo.svg';
	import { isLoggedIn, userDetails, signOut } from '../../hooks/auth';
	import Icon from '@iconify/svelte';
</script>

<header class={header}>
	<div>
		<button class={textButton} on:click={console.log}
			><Icon icon="ic:baseline-menu" width="26" /></button
		>
	</div>

	<div class={logo}><a href="/"><img src={Logo} alt="logo" width="150" /></a></div>
	{#if $isLoggedIn}
		<div class={userControls}>
			<span>{$userDetails.name}!</span>
			<button on:click={signOut} class={textButton}>logout</button>
		</div>
	{/if}
</header>
