<script lang="ts">
	import Icon from '@iconify/svelte';
	import { item, title } from './style.js';

	export let example;
	export let onClick;
</script>

<div class={item} on:click={() => onClick(example.id)}>
	<span class={title}>{example.name}</span>
	<Icon icon={example.icon} width="36" />
</div>
