<template>

	<div class="">
		<div class="user-title">
			<p><span class="username"> {{ uname }} </span><span class="ulevel">Admin</span></p>
		</div>
		<div class="">
			<div class="nav-section">
				<ul>
					<li>Navigation:</li>
				</ul>
			</div>
			<div class="user-links">
				<ul>
					<li class="active">:: View my store</li>
					<li>:: Create new store</li>
					<li>:: Add new items</li>
				</ul>
			</div>
		</div>
	</div>

</template>

<script>

	export default
    	{
    	  data () {
              return {
                 token: localStorage.getItem('token'),
                 uname: localStorage.getItem('uname'),
                 email: localStorage.getItem('email')
              }
            },
           methods:
           {
                getUserDetails(){
                    var name = localStorage.getItem('name');
                    console.log(name);
                }
           }
    	}
</script>

<style>
	
	.user-title
	{
		border-bottom: 1px solid #eef;
		padding: 10px 10px 0px 10px;
	}
	.user-title p
	{
		color: #006633;
		font-size: 16px;
		font-weight: bolder;
	}
	.ulevel
	{
		float: right;
		color: #006699;
		background-color: #006633;
		color: #fff;
		padding: 3px 5px 3px 5px;
		border-radius: 3px;
		opacity: .7;
		font-weight: lighter;
		font-size: 12px;
	}

	.nav-section 
	{
		
	}
	.nav-section ul
	{
		margin: 0;
		list-style: none;
		border-bottom: 1px solid #eef;
	}
	.nav-section ul li
	{
		padding: 10px 3px 3px 10px;
		font-size: 18px;
		font-family: tahoma;
		color: #006655;
	}
	.user-links ul
	{
		list-style: none;
		margin: 0;
	}
	.user-links ul li
	{
		border-bottom: 1px solid #eef;
		padding: 15px 3px 3px 15px;
		color: #006677;
		font-size: 14px;
		cursor: pointer;

	}
	.user-links ul .active
	{
		background-color: #eef;
		color: #006699;
		border-left: 2px solid #006688;
	}
	.user-links ul li:hover
	{
		background-color: #eef;
		color: #006699;
		border-left: 2px solid #006688;
	}

</style>