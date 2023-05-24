<script lang="ts">
	import { input, wrapper } from './style';
	export let value: string;
	export let label: string;
</script>

<div class={wrapper}>
	{#if label}
		<span>{label}</span>
	{/if}
	<input class={input} bind:value />
</div>

<style>
	.wide {
		width: 100%;
	}
</style>
