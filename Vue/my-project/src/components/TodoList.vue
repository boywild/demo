<template>
	<div id="todo">
		<input type="text" v-model="inputTxt" /><button @click="handleSubmit">
			提交
		</button>
		<ul>
			<todo-item
				:key="index"
				v-for="(item, index) of todo"
				:content="item"
				:index="index"
				@handleDelete="deleteCurrentTodo"
			></todo-item>
		</ul>
	</div>
</template>
<script>
import TodoItem from "./TodoItem";
export default {
	name: "TodoList",
	components: { "todo-item": TodoItem },
	data() {
		return {
			todo: [],
			inputTxt: ""
		};
	},
	methods: {
		handleSubmit() {
			this.todo.push(this.inputTxt);
			this.inputTxt = "";
		},
		deleteCurrentTodo(index) {
			this.todo.splice(index, 1);
		}
	}
};
</script>

<style scoped>
</style>


