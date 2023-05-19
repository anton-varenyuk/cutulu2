<script>
	import { EXAMPLES } from '../../utils/fixtures';
	import { DashboardItem } from './dasboard-item';
	import { dashboard } from './style';
	import { navigateTo } from '../../utils/navigation';

	const Examples = Object.values(EXAMPLES);

	const handleRedirect = (id) => {
		navigateTo(`examples/${id}`);
	};
</script>

<div class={dashboard}>
	{#each Examples as example}
		<DashboardItem {example} onClick={handleRedirect} />
	{/each}
</div>
