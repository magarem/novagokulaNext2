<template>
	<div class="content">
		<h1>John Doe</h1>
		<iframe src="/iframe" height="500"></iframe>	
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
		mounted() {
			//Event Listener for Iframe
			window.addEventListener("message", this.iframeEvent, false);
		},
		methods: {
			iframeEvent(event) {
				//Verify App Domain
				// if(event.origin !== 'http://localhost:3000') return;
				console.log('data received:  ' + event.data.data.name);
			}
		}
	}
</script>