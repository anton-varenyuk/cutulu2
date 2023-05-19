<script lang="ts">
	export let onClick;
	export let type: 'submit';
</script>

<button {type} on:click={onClick}><slot /></button>
