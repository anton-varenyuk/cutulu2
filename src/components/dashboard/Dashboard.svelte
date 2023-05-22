<script>
	import { Examples } from '../../utils/fixtures';
	import { DashboardItem } from './dasboard-item';
	import { dashboard } from './style';
	import { navigateTo } from '../../utils/navigation';

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
