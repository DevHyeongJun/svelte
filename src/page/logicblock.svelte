
<script>
	let count = 0;
	const awaitInitMsg = 'await 테스트';
	let list = [
		{ id: '첫번쨰', name: '이름1' },
		{ id: '두번쨰', name: '이름2' },
		{ id: '세번쨰', name: '이름3' }
	];

	let testPromise = awaitInitMsg;
	let awaitFunc = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(`1초가 지나고 동기 처리 <strong>완료 됨</strong>`);
			}, 1000);
		});
	};

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
		<span>* each문의 key 값은 유니크해야 한다. 그래야 상태 변화를 감지할 수 있기 떄문일듯? 좀 더 이해 필요함.</span><br>
		<button on:click="{() => {list.push({id:'추가', name : '중복됨'}); list = list;} }">조건문 추가(1번만 렌더되고 2번쨰 오류 발생)</button>
		<button on:click="{() => {list.push({id:`추가${list.length}`, name : `중복안됨${list.length}`}); list = list;} }">조건문 추가(계속 됨.)</button>
		<button on:click="{() => {list.pop(); list = list} }">삭제~</button><br>
		
		{#if list.length > 0}
			{#each list as { id, name }, i (id, name)}
				<p>{i}번쨰 = {id} : {name}</p>
			{/each}
		{:else}
			<p>리스트가 존재하지 않습니다. 추가해주세요~</p>
		{/if}
		
	
	</li>
	<li>
		<h3>await 동기 처리</h3>
		{#await testPromise}
				<p>...waiting</p>
		{:then resultText}
			<p>{resultText}</p>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
		
		<button on:click="{() => testPromise = awaitFunc() }">시작</button>
		<button on:click="{() => testPromise = awaitInitMsg }">초기화</button>
	</li>
</ul>
