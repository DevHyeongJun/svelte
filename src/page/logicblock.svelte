
<script>
	let count = 0;

	let runCount = 0;
	let list = [
		{ id: '첫번쨰', name: '이름1' },
		{ id: '두번쨰', name: '이름2' },
		{ id: '세번쨰', name: '이름3' }
	];
	$: if ( runCount == 10 ) {
		runCount = 0;
	}
</script>

<h2>블록 문법.! **** </h2>

<ul>
	<li>
		<h3>조건문</h3>
		<button on:click="{() => --count }">감소</button>
		<button on:click="{() => ++count }">증가</button>
		<br>
		{#if count > 10}
			<p>{count}은 10 이상.</p>
		{:else if count > 5}
			<p>{count}은 5 보다 크다.</p>
		{:else}
			<p>{count} 버튼 클릭</p>
		{/if}
	</li>
	<li>
		<h3>반복문</h3>
		<span>* each문의 key 값은 유니크해야 한다. 그래야 상태 변화를 감지할 수 있기 떄문일듯?</span>
		{#each list as { id, name }, i (id)}
			<p>{i}번쨰 = {id} : {name}</p>
		{/each}
		<button on:click="{() => {list.push({id:'추가', name : '중복됨'}); list = list;} }">조건문 추가(1번만 렌더됨)</button>
		<button on:click="{() => {list.push({id:`추가${list.length}`, name : `중복안됨${list.length}`}); list = list;} }">조건문 추가(계속 됨.)</button>
	</li>
</ul>
