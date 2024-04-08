<script>
	import { Canvas } from '../../../components/canvas';
	import { t } from '../../../i18n';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	export let data;

	dayjs.extend(relativeTime);
</script>

<div>
	<h2>{$t(`common.${data.id}`)}</h2>
	<h3>{`${$t('common.added')}: ${dayjs(data.added).fromNow()}`}</h3>
	<p>{$t(`common.${data.id}_disclaimer`)}</p>

	<Canvas exampleId={data.id} />
</div>
