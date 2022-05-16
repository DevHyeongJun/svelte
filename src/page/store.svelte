
<script>
	
	import { hjStore, finalHjStore, getFinalHjStore, customStore } from '../store/test.js';
	import { onDestroy } from 'svelte';
	import Store2 from './store2.svelte';
	import Store3 from './store3.svelte';

	let count = $hjStore.count;

	const unsubscribe = hjStore.subscribe(store => {
		count = store.count;
	});
</script>

<h2>스토어 ***</h2>
<ul>
	<li>
		<h3>writable store </h3>
		<p> - 쓰기 가능한 store 입니다.</p>
		<span>1: {count}</span><br>
		<span>스벨트 2 컴포넌트 :<Store2/></span><br>
		<span>스벨트 3 컴포넌트 :<Store3/></span><br>
		<button on:click={()=> hjStore.update(test => test = {count : test.count + 1})}>count 증가</button>
		<button on:click={()=> hjStore.update(test => test = {count : test.count - 1})}>count 감소</button>
	</li>
	<li>
		<h3>readable  store </h3>
		<p> - 읽기만 가능한 store 입니다.</p>
		<p> - 상수 선언이 가능함. 전역 config는 이걸로 선언하면 좋을 듯.?</p>
		<span>1: {$finalHjStore.test1}</span><br>
		<button on:click={()=> $finalHjStore.update(test => test = {test1 : '굳이'})}>업데이트 안된다~</button>
	</li>
	<li>
		<h3>derived  store </h3>
		<p> - get 함수이며, 기 등록된 store 값을 가공하여 값을 전달 함.( 계산식이나 조건문 복사해서 쓸 경우 유용할</p>
		<p> - 새로운 스토어 생성 개념</p>
		<span>1: {$getFinalHjStore.test1}</span><br>
		<span>1: {$getFinalHjStore.test2}</span><br>
	</li>
	<li>
		<h3>custon  store </h3>
		<p> - 아마도 해당 store를 사장 많이 사용 할 듯</p>
		<p> - React redux action 과 가장 유사..함?</p>
		<span>1: {$customStore.test1}</span><br>
		<button on:click={customStore.increment}>+</button>
		<button on:click={customStore.decrement}>-</button>
		<button on:click={customStore.reset}>초기화</button>
	</li>
</ul>
