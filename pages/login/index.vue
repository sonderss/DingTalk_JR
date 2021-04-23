<template>
	<view class="login p-lr-30">
		<view class="f26 theme-color weight" style="padding-top: 50px;margin-bottom: 30px;">欢迎登录</view>
		<view class="item flex a-center j-between min-border-bottom m-bottom-30">
			<view class="iconfont f22">&#xe612;</view>
			<input style="border: none;" maxlength="20" class="f-1" placeholder-class="placeholderStyle" placeholder="用户名 | 手机号 | 邮箱"/>
		</view>
		<view class="item flex a-center j-between min-border-bottom m-bottom-30">
			<view class="iconfont f22">&#xe654;</view>
			<input style="border: none;" maxlength="20" class="f-1"   placeholder-class="placeholderStyle" placeholder="请输入登录密码"/>
		</view>
		<view class="item flex a-center j-between min-border-bottom m-bottom-30">
			<view class="iconfont f22">&#xe615;</view>
			<input style="border: none;" maxlength="4" class="f-1"  placeholder-class="placeholderStyle"  placeholder="请输入验证码"/>
			<image src="../../static/code.jpg" style="width: 50px; height: 20px;"></image>
		</view>
		<view class="btn" @click="toIndex">登  录</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				placeholderStyle: 'font-size:18px'
			}
		},
		methods:{
			toIndex() {
				uni.switchTab({
				    url: '/pages/index/index'
				});
			}
		}
	}
</script>

<style>
	.placeholderStyle{
		font-size: 16px;
	}
	.btn{
		width: 100%;
		height: 48px;
		background: #0091FF;
		border-radius: 11px;
		border: 1px solid #979797;
		color: #fff;
		text-align: center;
		line-height: 48px;
	}
</style>
