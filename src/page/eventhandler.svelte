
<script>
	//컴포넌트 이벤트를 사용하기 위한 호출
	import Inner from './Inner.svelte';
	import HJButton from '../compontent/button/HJButton.svelte';

	let mouse = {x : 0, y : 0};
	let isInnerData = true;

	function handleMessage(event) {
		isInnerData = event.detail.test('티키 변경 했다. 상위에서 test() 함수 호출 함.', true);
	}

	function handleMessageInit(event) {

		isInnerData = event.detail.testUn('타카', false);
	}

	const handlerTestFunc = () => {
		alert('handler 함수 생성해서 alert!');
	}
</script>

<h2>이벤트 핸들러</h2>
<ul>
	<li>
		<h3>이벤트 수식어 사용</h3>
		<p>마우스 이벤트 동작 마우스 버튼 위치~ {mouse.x} {mouse.y}</p>
		<button on:click={(e) => { mouse = { x: e.clientX, y: e.clientY} } }>시작</button>
	</li>
	<li>
		<h3>인라인 핸들링</h3>
		<p>어차피 컴파일되는 코드라 인라인 핸들러("e=> alert(4);")를  무분별하게 사용해도 된다함.</p>
		<button on:click={handlerTestFunc}>시작</button>
	</li>
	<li>
		<h3>컴포넌트 간 이벤트 전달</h3>
		<p>자식 컴포넌트에서 dispatch(key, object)를 선언하여 자식 컴포넌트의 함수 호출 가능!- 정말 편할듯</p>
		<Inner on:handler={isInnerData ? handleMessage : handleMessageInit}/>
		<p>HJButton 컴포넌트로 응용!dispatch 없이 실행하는 법 - 아마도 동일한 명칭이면 사용 가능한 듯.</p>
		<HJButton on:click={()=> alert('편하다')} title="onClick dispatch하기"/>
	</li>
</ul>
