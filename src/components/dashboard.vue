<template>
  <!--the dashboard -->
  <div>
	  <mainheader-section></mainheader-section>
	  <div class="main-section">
	  	<div class="left-bar">
	  		<left-section></left-section>
	  	</div>
	  	<div class="right-bar">
	  		<router-view></router-view>
	  		<div class="data-region">
		  		<div class="">

		  		</div>
	  		</div>
	  	</div>
	  	<!-- <p>User Name: {{ $route.params.uname }}</p> -->
	  </div>
	  <footer-section></footer-section>
  </div>
</template>

<script>
	import Vue from 'vue'
	import VueResource from 'vue-resource'
	import Router from 'vue-router'
	import mainheader from'components/main-header'
	import footer from'components/footer'
	import leftbar from 'components/left-bar'
	import thestore from 'components/board'
	import search from 'components/additem'

	//creating other the components

	Vue.component('mainheader-section', mainheader);
	Vue.component('footer-section', footer);
	Vue.component('left-section', leftbar);


	Vue.use(VueResource)
	Vue.use(Router)

	export default new Router(
		{
			
		});

</script>
<style>
	.main-section
	{
		width: 72%;
		margin: 50px auto 20px auto;
		display: flex;
	}
	.left-bar
	{
		border: 1px solid #eef;
		width: 28%;
		background-color: #fff;
		border: 1px solid #eef;
	}
	.right-bar
	{
		margin-left: 10px;
		width: 100%;
	}
</style>