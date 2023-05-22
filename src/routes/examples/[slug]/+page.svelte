<script>
	import { Canvas } from '../../../components/canvas';

	export let data;
</script>

<div>
	<h2>{data.name}</h2>
	<p>{data.description}</p>

	<Canvas exampleId={data.id} />
</div>
