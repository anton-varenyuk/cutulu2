<script>
	import { Canvas } from '../../../components/canvas';
	import { t } from '../../../i18n';
	export let data;
</script>

<div>
	<h2>{$t(`common.${data.id}`)}</h2>
	<p>{$t(`common.${data.id}_disclaimer`)}</p>

	<Canvas exampleId={data.id} />
</div>
