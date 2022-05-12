<script>
	import { createEventDispatcher } from 'svelte';
  
	const dispatch = createEventDispatcher();
	let innerMsg = '상위 컴포넌트에서 메세지 변경이 필요함.';
	

	const changeMsg = (txt, is) =>{
		innerMsg = txt;
		return !is;
	}
	
	const handlerDispatch = () => {
	  //두개의 인자를 받아도 상관 없겠지만 자칫하면 나쁜 코드가 생성될 수도?	
	  dispatch('handler', {
		testUn:changeMsg,
		test: changeMsg
	  });
	}
</script>

<button on:click={handlerDispatch}>
	{innerMsg}
</button>
