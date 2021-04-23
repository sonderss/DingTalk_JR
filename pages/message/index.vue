<template>
	<view class="content">
		<HeadNav title='通知提醒' />
		<view class="main  p-lr-10 p-tb-10">
			<view class="main_item p-tb-5 m-bottom-10">
				<view class="main_item_top flex j-between a-center   p-lr-10 ">
					<view class="left">
						<span class="dot m-right-10"></span>
						<span style="color: #2E3032;" class="f14">断货风险提醒</span>
					</view>
					<view class="right f12" style="color: #757575;">
						2020-12-1 12:12
					</view>
				</view>
				<view style="color: #999999;" class="f12 el-3    p-lr-10 ">
					订单1000006706 设计并不始于图订单1000006706 设计并不始于图
					订单1000006706 设计并不始于图订单1000006706 设计并不始于图
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss">
.main_item{
	width: 100%;
	height: 76px;
	background: #FFFFFF;
	box-shadow: 0px 0px 1px 0px rgba(120, 120, 128, 0.32);
	border-radius: 5px;
	.dot{
		width: 8px;
		height: 8px;
		background: #FF453A;
		border: 1px solid #FF453A;
		border-radius: 50%;
	}
}
</style>
