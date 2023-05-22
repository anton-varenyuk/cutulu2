<script lang="ts">
	import { onMount } from 'svelte';
	import { canvasRender } from '../../utils/canvasRender';

	export let exampleId: string;

	let canvas: HTMLCanvasElement | null = null;
	let ctx: CanvasRenderingContext2D | null = null;

	onMount(() => {
		ctx = canvas.getContext('2d');
		canvasRender({ ctx, renderFunctionId: exampleId });
	});
</script>

<canvas width="400" height="400" bind:this={canvas}>Not working</canvas>

<style>
	canvas {
		background: #36373b;
	}
</style>
