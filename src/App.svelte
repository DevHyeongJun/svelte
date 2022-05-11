<script>
	import Const from './global/const';
	import LangPage from './page/lang.svelte';
	import PropsPage from './page/props.svelte';
	import LogicBlockPage from './page/logicblock.svelte';

	const test = 'testDiv';
	let page = 'logic';
	
	const buttonHandler = (e) => {
		const {target} = e;
		page = e.target.getAttribute('data-key');
	}
</script>

<!-- 타입 스크립트도 제공됨...... 
<script lang="ts">
	let count: number = 0
</script> -->

<!-- <style lang="scss">  Scss 선언-->
<style>
	/* 모든 하위 컴포넌트에 적용된다. */
	#wrap :global(button) {
		color : royalblue;
	}

	#wrap :global(button.active) {
		color : red;
	}

</style>
<h1>{Const.system.name} </h1>
<div id="wrap">
	
	<button class:active={page === 'lang'} data-key="lang" on:click={buttonHandler}>문법</button>
	<button class:active={page === 'props'} data-key="props" on:click={buttonHandler}>Props</button>
	<button class:active={page === 'logic'} data-key="logic" on:click={buttonHandler}>블록 문법</button>

	{#if page === 'lang'}<LangPage/>{/if}
	{#if page === 'props'}<PropsPage/>{/if}
	{#if page === 'logic'}<LogicBlockPage/>{/if}

</div>