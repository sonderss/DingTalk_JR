<template>
	<view class="orderTracking"  style="overflow: hidden;">
		<view class="f16 flex a-center j-between el-1 m-lr-10 p-tb-10" style="width: 100%;" v-if="!isWuliu">
			<view class="flex a-center el-1 j-between  p-right-10">
				<span style="width: 80px;">订单编号:</span>
				<view class="el-1" style="flex: 1;display: block;">{{1}}</view>
				<span class="iconfont" @click.native="copy">&#xe729;</span>
			</view>
			<view class="theme-color"  style="width:80px;">催单</view>
		</view>
		<view class="f16 flex a-center j-between el-1 m-lr-10" style="width: 100%;" v-if="isWuliu">
			<view class="flex a-center el-1">
				<span style="width: 80px;">快递单号:</span>
				<view class="el-1" style="flex: 1;display: block;">{{132131231231211223}}</view>
				<span class="iconfont">&#xe729;</span>
			</view>
		</view>
		<view class="f16 flex a-center j-between el-1 m-lr-10" style="width: 100%;" v-if="isWuliu">
			<view class="flex a-center el-1 j-between  p-right-10" style="flex: 1;">
				<span style="width: 80px;">交货单号:</span>
				<view class="el-1" style="flex: 1;display: block;">{{13121211223}}</view>
			</view>
		</view>
		<view class=" min-border-bottom   m-lr-10"></view>
		<UniSteps direction="column" :options="list"  />
		<view style="height:100px"></view>
	</view>
</template>

<script>
import UniSteps from '@/component/uniSteps.vue'
export default {
	components:{
		UniSteps
	},
	onLoad(option) {
		this.isWuliu = option.type
		console.log(option.type)
		// dd.setNavigationBar({
		//    title: option.type === '1' ?  '物流动态' : '订单追踪'
		// })
		uni.setNavigationBarTitle({
		　　title: option.type === '1' ?  '物流动态' : '订单追踪'
		})
	},
	created() {
		let arr =  [{title: '2021/3/17 15:34 非SPA删除交货单 吴志亮'}, {title: '2021/3/17 15:34 修改交货单数量 吴志亮'}, {title: '2021/3/17 15:34 修改订单明细数量 吴志亮'}, {title: '2021/3/17 15:34 确认价格 吴志亮'}]
		for(let i=0;i<15;i++){
				this.list = this.list.concat(...arr)
		}
	},
	data(){
		return {
			list:[],
			isWuliu: false
		}
	},
	methods:{
		copy() {
			console.log(2133123123132)
			dd.setClipboard({
			  text: 12312,
			  success: function() {
				  console.log(31212)
			  }
			});
		}
	}
}
</script>

<style>
</style>
