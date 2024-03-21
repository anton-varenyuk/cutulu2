<script>
	import { header, textButton, logo, userControls } from '../style';
	import Logo from '$lib/assets/images/logo.svg';
	import { isLoggedIn, userDetails, signOut } from '../../hooks/auth';
	import Icon from '@iconify/svelte';
	import { locale } from '../../i18n';
</script>

<header class={header}>
	<div>
		<button class={textButton}><Icon icon="ic:baseline-menu" width="26" /></button>
	</div>

	<div class={logo}><a href="/"><img src={Logo} alt="logo" width="150" /></a></div>

	{#if $isLoggedIn}
		<div class={userControls}>
			<div>
				<span
					on:click={() => {
						locale.set('en');
					}}>EN</span
				>
				<span
					on:click={() => {
						locale.set('uk-UA');
					}}>UA</span
				>
			</div>

			<span>{$userDetails.name}!</span>
			<button on:click={signOut} class={textButton}>logout</button>
		</div>
	{/if}
</header>
