<script>
	import { setContext } from 'svelte';
    import { CONTEXT_DATA } from './context/global.js';

	import Const from './global/const';
	import LangPage from './page/lang.svelte';
	import PropsPage from './page/props.svelte';
	import LogicBlockPage from './page/logicblock.svelte';
	import EventHandlerPage from './page/eventhandler.svelte';
	import LifeCyclePage from './page/lifecycle.svelte';
	import StorePage from './page/store.svelte';
	import ContextPage from './page/context.svelte';
	


	setContext(CONTEXT_DATA, {
        currentPage: () => page,
		pageMoveCnt: () => i
    });

	let page = 'context';
	let i = 1;
	const buttonHandler = (e) => {
		const {target} = e;

		page = e.target.getAttribute('data-key');
		if ( page != 'context' ) i++;
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
	
	<!-- 추후 LNB 메뉴로 뺴버리자~ 하드코딩~ -->
	<button class:active={page === 'lang'} data-key="lang" on:click={buttonHandler}>문법</button>
	<button class:active={page === 'props'} data-key="props" on:click={buttonHandler}>Props</button>
	<button class:active={page === 'logic'} data-key="logic" on:click={buttonHandler}>블록 문법</button>
	<button class:active={page === 'event'} data-key="event" on:click={buttonHandler}>이벤트 핸들러</button>
	<button class:active={page === 'life'} data-key="life" on:click={buttonHandler}>라이프사이클</button>
	<button class:active={page === 'store'} data-key="store" on:click={buttonHandler}>***스토어</button>
	<button class:active={page === 'context'} data-key="context" on:click={buttonHandler}>Context API</button>


	{#if page === 'lang'}<LangPage/>{/if}
	{#if page === 'props'}<PropsPage/>{/if}
	{#if page === 'logic'}<LogicBlockPage/>{/if}
	{#if page === 'event'}<EventHandlerPage/>{/if}
	{#if page === 'life'}<LifeCyclePage/>{/if}
	{#if page === 'store'}<StorePage/>{/if}
	{#if page === 'context'}<ContextPage/>{/if}

</div>