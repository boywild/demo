<template>
	<li @click="deleteTodo">{{ content }}</li>
</template>
<script>
export default {
	name: "TodoItem",
	props: ["content", "index"],
	methods: {
		deleteTodo() {
			this.$emit("handleDelete", this.index);
		}
	}
};
</script>
<style scoped>
</style>


