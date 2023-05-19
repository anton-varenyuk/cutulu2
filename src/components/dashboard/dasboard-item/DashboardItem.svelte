<script lang="ts">
	import Icon from '@iconify/svelte';
	import { item } from './style.js';

	export let example;
	export let onClick;
</script>

<div class={item} on:click={() => onClick(example.id)}>
	<span>{example.name}</span>
	<Icon icon={example.icon} width="36" />
</div>
