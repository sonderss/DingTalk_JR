<template>
	<view>
		<view :style="{ background: background }" class="custom-header-container main">
		  <view :style="{height:getStausBarHeight + 'px'}" class="custom-header-status-bar"></view>
		  <view :class="{'ios-center': isIos }" class="custom-header-top-container">
			<view :style="{color: color}"  class="custom-header-title" style="width: 100%;text-align: center;">
				{{title}}
			</view>
		  </view>
		</view>
		<view :style="{ height: getStausBarHeight + (isIos ? 45 : 48) + 'px' }" class="custom-header-height"></view>
	</view>
	
</template>

<script>
	export default {
		name: 'HeadNav',
		props:{
			title:{
			  type:String,
			  default:'标题'
			},
			background: {
			  type: String,
			  default: '#0084FF'
			},
			color: {
			  type: String,
			  default: '#ffffff'
			},
			showBack: {
			  type: Boolean,
			  default: true
			}
		},
		computed: {
		  getStausBarHeight() {
		    try {
		      const res = uni.getSystemInfoSync();
		      return res.statusBarHeight;
		    } catch(e) {}
		  },
		  isIos() {
		    return uni.getSystemInfoSync().system.indexOf('iOS') > -1
		  }
		},
	}
</script>

<style>
</style>
