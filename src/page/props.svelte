
<script>
	import HJButton from '../compontent/button/HJButton.svelte';

</script>


<h2>상태 값 변경 이해</h2>

<ul>
	<li>
		<h3>props 변경</h3>
		<span>$$props로 받거나 $props로 받지만, 아키텍처의 이해를 위해 $props를 사용한다.</span><br>
		<span>$$props는 컴포넌트 쪽에서 export를 선언하지 않아도 호출한 컴포넌트의 값을 활용할 수 있다. (쓰지말자.)</span><br>
		<HJButton title="title을 props로 표현"/>
	</li>
</ul>

