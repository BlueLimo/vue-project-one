
<template>
	<div>
		<div class="search-section">
			<div class="the-title">
				Search section
			</div>
			<div class="the-section">
				
		          
			</div>

		</div>
		<form>
		   	<div class="">
		        <input type="text" placeholder="Enter item here to search" class="search-field">
		    </div>
		</form>
		<router-link to="/home/add_item" class="add-item">Add item</router-link>
	</div>
</template>
<script>
	export default 
	{
	  name: 'board'
	}
</script>

<style>
	.search-section
	{
		width: 100%;
		background-color: #fff;
		border: 1px solid #eef;
		color: #006688;
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
	}
	.add-item
	{
		border: 1px solid #eef;
		padding: 8px 20px 8px 20px;
		font-size: 12px;
		background-color: #006622;
		color: #fff;
		border-radius: 3px;
	}
	.add-item:hover
	{
		background-color: #006666;
		color: #eef;
	}
	
</style>