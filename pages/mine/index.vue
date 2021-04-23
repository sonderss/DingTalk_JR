<template>
	<view class="mine flex column" style="overflow: hidden;">
		<HeadNav title='个人中心' />
		<view class="top_view flex j-between a-center">
		   <view class="left  p-left-20">
			    <view class="f20" style="color: #fff;">令狐冲</view>
				<view class="f16 p-top-10" style="color: #fff;">用户名：linghuchong</view>
		   </view>
		   <view class="right  m-right-20"></view>
	    </view>
		<view style="flex: 1;" class="main_view_content  p-lr-30 flex j-end a-end" >
				<view class="btn m-bottom-20" @click="quit">退出登录</view>
		</view>
	</view>
</template>

<script>
	import HeadNav  from '@/component/headNav.vue'
	export default {
		components:{
			HeadNav
		},
		methods:{
			quit() {
				uni.reLaunch({
				    url: '../login/index'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mine{
		height: 100vh;
	}
	.top_view{
		width: 100%;
		height: 100px;
		background-color: #0084FF;
		.right{
			width: 50px;
			height: 50px;
			border-radius: 50%;
			background-image: url(../../static/logo.png);
			background-size: cover;
		}
	}
	.main_view_content{
		border-radius: 5px 5px 0 0;
		background-color: #FFFFFF;
		.btn{
			width: 100%;
			height: 48px;
			background: rgba(0, 0, 0, 0.1);
			border-radius: 10px;
			text-align: center;
			line-height: 48px;
		}
	}
</style>
