<script lang="ts">
	import { btn } from './style';

	export let onClick = undefined;
	export let type: string;
	export let disabled: boolean;
</script>

<button {disabled} class={btn} {type} on:click={onClick}><slot /></button>
