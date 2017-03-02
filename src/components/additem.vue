
<template>
	<div>
		<div class="search-section">
			<div class="the-title">
				Add new item:

			</div>

		</div>
		<router-link to="/home" class="add-item">Cancel</router-link>
	</div>
</template>
<script>
	export default 
	{
	  name: 'search'
	}
</script>

<style>
	.search-section
	{
		width: 100%;
		background-color: #fff;
		border: 1px solid #eef;
		color: #006688;
		margin-bottom: 10px;
	}
	.the-title
	{
		border-bottom: 1px solid #eef;
		padding: 10px 10px 5px 10px;
	}
	.the-section
	{
		margin: 0;
		padding: 0;
	}
	.search-field
	{
		border: none;
		background: none;
	}
	
</style>