<script lang="ts">
	import Icon from '@iconify/svelte';
	import { item, title } from './style.js';
	import { t } from '../../../i18n';

	export let example;
	export let onClick;
</script>

<div class={item} on:click={() => onClick(example.id)}>
	<span class={title}>{$t(`common.${example.id}`)}</span>
	<Icon icon={example.icon} width="36" />
</div>
