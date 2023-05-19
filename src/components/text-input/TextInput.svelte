<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Update } from '../../types';
	import { input } from './style';

	// const dispatch = createEventDispatcher();
	export let value: string;
	export let fullWidth = false;
	export let onChange: (e) => void;

	// on:change={onChange}
	// on:input={(e) => dispatch(Update.CHANGE, { value: e.target.value })}
</script>

<input class:wide={fullWidth} class={input} {value} on:input={onChange} />

<style>
	.wide {
		width: 100%;
	}
</style>
