<script>
    import { getContext } from 'svelte';
    import { CONTEXT_DATA } from '../context/global.js';

    const { currentPage, pageMoveCnt } = getContext(CONTEXT_DATA);
</script>


<h2>CONTEXT API </h2>
<ul>
	<li>
		<h3>예시 1</h3>
        <p>Context API는 React와 동일한 효과를 가진다.</p>
        <p>Store와는 다르게 하위 컴포넌트에서만 공유되며, 반응형의 값을 가지진 않는다.(직접 함수로 호출해주면 가능하나.. 굳이.)</p>
        <p>하위 컴포넌트(ex) table->tr->td 의 경우 유용할 듯)에서 데이터 공유 시 에는 store 보다 강점이 있다고 생각된다.</p>
		<p>현재 페이지 코드(from. App.svelte) : {currentPage()}</p>
		<p>현재 페이지 이동 횟수(from. App.svelte) : {pageMoveCnt()}</p>
	</li>
</ul>
 