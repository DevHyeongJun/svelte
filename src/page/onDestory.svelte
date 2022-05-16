
<script>
	import { onDestroy  } from 'svelte';
	onDestroy(() => {
    	alert('3');
  	});
</script>

<span>컴포넌트 삭제 라이프 사이클</span>