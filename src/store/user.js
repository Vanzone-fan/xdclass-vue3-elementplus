import { defineStore } from 'pinia';
import { ref } from 'vue';

export const userStore = defineStore('user', () => {
	const token = ref('asdad');
	return { token };
});
