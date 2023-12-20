<template>
	<div class="content">
		<button class="primary-btn" @click="sendMessage">Click Here</button>
	</div>
</template>
<script>
    definePageMeta({
        layout: ''
    })
	export default {
		data() {
			return {}
		},
		mounted() {},
		methods: {
			sendMessage() {
				let data = {
					name: "Floriana Rodolfo",
					age: 30
				}
				window.parent.postMessage({"data": data}, 'http://localhost:3000');
			}
		}
	}
</script>