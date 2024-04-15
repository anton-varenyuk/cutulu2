<script>
	import { DashboardItem } from './dasboard-item';
	import { dashboard } from './style';
	import { navigateTo } from '../../utils/navigation';
	import { Examples } from '../../examples/patterns';

	const ExampleValues = Object.values(Examples);

	const handleRedirect = (id) => {
		navigateTo(`examples/${id}`);
	};
</script>

<div class={dashboard}>
	{#each ExampleValues as example}
		<DashboardItem {example} onClick={handleRedirect} />
	{/each}
</div>
