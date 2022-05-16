
<script>

	import { onMount, beforeUpdate, afterUpdate, tick } from 'svelte';

	import HJOnDestory from './onDestory.svelte';

	let photos = [];

	let isDestory = true;

	//동기 처리.
	onMount(async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=2000`);
		photos = await res.json();
	});

	let div;
  	let autoscroll;

	let isUpdate = false;
	beforeUpdate((e) => {
		console.log(e);
	});

	afterUpdate((e) => {
		console.log(e);
	});
	

	let text = `Select some text and hit the tab key to toggle uppercase`;
	async function handleKeydown(event) {
		const h1 = document.querySelector('textarea');
		text = 'before' + h1.value;
		console.log('await 1 : ', text);
		
		await tick();
		text = 'after' + h1.value;
		console.log('await 2 : ', text);
	}
</script>

<style>
	.test {
		overflow-x: hidden;
		height:300px;
	}
</style>

<h2>라이프사이클</h2>
<ul>
	<li>
		<h3>onMout</h3>
		<span>* 컴포넌트 로드 시 딜레이가 생기는 경우 onMount를 구현한다.</span><br>
		<span>* onMount는 내부 콜백함수가 마운트 된 후 동작된다.</span><br>
		<span>* - beforeUpdate : 컴포넌트 업데이트 이전</span><br>
		<span>* - afterUpdate : 컴포넌트 업데이트 이후</span><br>
		<span>* - onDestroy : 컴포넌트 제거 시</span><br>
		<div class="test" >
			{#each photos as photo}
			<figure>
				<img src={photo.thumbnailUrl} alt={photo.title}>
				<figcaption>{photo.title}</figcaption>
				</figure>
			{:else}
				<!-- this block renders when photos.length === 0 -->
				<p>loading...</p>
			{/each}
		</div>

		<span>update 시점 : <span>{isUpdate}</span></span>
		<button on:click={()=>isUpdate = !isUpdate}>업데이트</button>
	</li>
	<li>
		<h3>onDestroy</h3>
		<br>
		{#if isDestory}
			<HJOnDestory/>
		{/if}
		<br>
		<button on:click={()=> isDestory = false}>삭제</button>
	</li>
	<li>
		<h3>tick</h3>
		<span>처음 들어본 라이프사이클??</span><br>
		<span>컴포넌트 갱신 시 동기처리에 사용되는 듯 함.</span>
		<span>컴포넌트 갱신 시 순차적인 처리에서 사용하면 좋을 듯?</span>
		<span>더 공부하면서 알아야 가야 할 듯 생소하다ㅣ./..</span>
		<br>
		<span>{text}</span>
		<textarea value='' on:keydown={handleKeydown}></textarea>
	</li>
</ul>
