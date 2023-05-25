<script lang="ts">
	import { onMount } from 'svelte';
	import { canvasRender } from '../../utils/canvasRender';
	import { exampleWrapper, canv, implementationPreview } from './style';

	export let exampleId: string;

	let canvas: HTMLCanvasElement | null = null;
	let ctx: CanvasRenderingContext2D | null = null;
	let implementation: string;

	onMount(() => {
		ctx = canvas.getContext('2d');
		implementation = canvasRender({ ctx, renderFunctionId: exampleId });
	});
</script>

<div class={exampleWrapper}>
	<div>
		<canvas class={canv} width="600" height="600" bind:this={canvas}>Not working</canvas>
	</div>

	<div>
		<pre class={implementationPreview}>
            <code>
                {implementation}
            </code>
        </pre>
	</div>
</div>
