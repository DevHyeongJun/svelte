import { writable, readable, derived } from 'svelte/store';

export const hjStore = writable({
    finalStr : readable('final 문자열', function start(set) {
        set('첫번 째 호출이랜다.');
      
        return function stop() {
          alert('stop 이래');
        };
    })
});

//고정
export const finalHjStore = readable({test1: 'test1', test2: 'test2'});

export const getFinalHjStore = derived(
    finalHjStore,
    $finalHjStore => ({test1:'가공1', test2:'가공2'})
);

function createCount() {
    const { subscribe, set, update } = writable({
        test1 : 5,
    });
    
    return {
      subscribe,
      increment: () => update(n => n = {test1 : n.test1 + 1}),
      decrement: () => update(n => n = {test1 : n.test1 - 1}),
      reset: () => set({test1 : 0})
    };
}
  
export const customStore = createCount();