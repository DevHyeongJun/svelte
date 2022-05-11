
<script>
	import HJButton from '../compontent/button/HJButton.svelte';

	//변경을 감지할 수 있따.
	

	let classSam = false;//isClass가 false일떄만
	const testClass = '';
	const strHTML =  `string html 랜더됨...<strong>strong 태그</strong>`;

	//state의 변경을 감지한다. 근데 이게 state가 맞을까요?
	$: if ( classSam  ) {
		alert(`스벨트는 변수의 재할당에 의해서만 렌더된다.`);
	};
	
</script>

<!-- 미쳤다.. scss도 지원된다고함... lang="scss" -->
<style>
	.classSam {
		color : red;
	}
</style>


<h2>문법 이해</h2>
<h3>클래스 선언 / 상태 값 변경</h3>
<ul>
	<li>
		<h3>클래스 선언 기본</h3>
		<span class:testClass>변수 명과 클래스명이 같다면 클래스 선언을 편히 할 수 있다.(조건이 없다면 기존 방식으로 해도 됨.)</span>
	</li>
	<li>
		<h3>변수 반응에 대한 클래스명 변경</h3>
		<span class:classSam>아래 버튼을 클릭하면 글자 색이 변함.</span>
		<button title="클릭" on:click="{() => { classSam = !classSam} }">클릭{classSam}</button>
	</li>
	<li>
		<h3>String HTML 표현식</h3>
		<span>{@html strHTML}</span>
	</li>
</ul>
