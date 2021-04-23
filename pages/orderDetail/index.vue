<template>
	<view class="orderDetail" style="overflow: hidden;">
		
		<view class="f16 flex a-center j-between el-1 m-lr-10 p-tb-10" style="width: 100%;">
			<view class="flex a-center el-1 p-right-10">
				<span style="width: 80px;">订单编号:</span>
				<view class="el-1" style="flex: 1;display: block;">{{132131231231211223}}</view>
				<span class="iconfont">&#xe729;</span>
			</view>
			<view class="theme-color cursor"  style="width:80px;"  @click="toOrderInfo(0)">订单追踪</view>
		</view>
		<view class=" min-border-bottom   m-lr-10"></view>
		<view class="p-lr-10 m-bottom-10">
			<view class="desc f-color f14 flex">
				<span class="title">订单状态：</span><span class="t-color el-1 f-1">未生成采购订单</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">购买方：</span><span   class="el-1 f-1">1010 上海润达医疗科技股份有限公司</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">订单状态：</span><span  class="el-1 f-1">未生成采购订单</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">部门科室：</span><span  class="el-1 f-1">检验科</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">送达方：</span><span  class="el-1 f-1">1010 上海润达医疗科技股份有限公司</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">供应商：</span><span class="el-1 f-1">1610 上海润达医疗科技股份有限公司</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">创建人：</span><span class="el-1 f-1">于凯</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">创建时间：</span><span class="el-1 f-1">2021-03-24 14:3</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">期望到货：</span><span class="el-1 f-1">2021-03-24 14:3</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">移动电话：</span><span class="el-1 f-1">18737623456</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">办公电话：</span><span class="el-1 f-1">021-8763123</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">收货地址：</span><span class="el-1 f-1">上海市上海市金山区昌路1018</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">收货地址：</span><span class="el-1 f-1">上海市上海市金山区昌路1018</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">地址编号：</span><span class="el-1 f-1">5664</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">地址编号：</span><span class="el-1 f-1">5664</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">送货时间：</span><span class="el-1 f-1">2021-03-24 14:3</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">寄票地址：</span><span class="el-1 f-1">上海市上海市金山区昌路1018</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">地址编号：</span><span class="el-1 f-1">5664</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">发票信息：</span><span class="el-1 f-1 t-color">月结</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">订单备注：</span><span class="el-1 f-1">发货请提前告知驻场人员</span>
			</view>
			<view class="desc f-color f14 flex">
				<span class="title">采购备注：</span><span class="el-1 f-1">采购一定要采购雅培的生化检测试</span>
			</view>
		</view>
		<view class=" min-border-bottom  m-lr-10"></view>
		
		<view class="f16 flex a-center j-between el-1 m-lr-10" style="width: 100%;">
			<view class="flex a-center el-1 j-between  p-right-10">
				<span style="width: 80px;">快递单号:</span>
				<view class="el-1 f16 theme-color" style="flex: 1;display: block;">{{132131231231211223}}</view>
				<span class="iconfont" @click='test'>&#xe729;</span>
			</view>
			<view class="theme-color cursor"  style="width:80px;" @click="toOrderInfo(1)">查看物流</view>
		</view>
		<view class="f16 flex a-center j-between el-1 m-lr-10" style="width: 100%;">
			<view class="flex a-center el-1 j-between  p-right-10" style="flex: 1;">
				<span style="width: 80px;">物料合计:</span>
				<view class="el-1 f16 theme-color" style="flex: 1;display: block;">共{{3}}件品项</view>
			</view>
			<view class="theme-color cursor"  style="width:80px;" @click="viewWuliao">查看物料</view>
		</view>
		<view class="f16 flex a-center j-between el-1 m-lr-10" style="width: 100%;">
			<view class="flex a-center el-1 j-between  p-right-10" style="flex: 1;">
				<span style="width: 120px;">货品净价总计：</span>
				<view class="el-1 f16" style="flex: 1;display: block;">217669.38 元</view>
			</view>
		</view>
		<view class="f16 flex a-center j-between el-1 m-lr-10" style="width: 100%;">
			<view class="flex a-center el-1 j-between  p-right-10" style="flex: 1;">
				<span style="width: 120px;">货品含税总计： </span>
				<view class="el-1 f16" style="flex: 1;display: block;">245966.40 元</view>
			</view>
		</view>
		<view class="m-bottom-30" style="height: 100px;"></view>
	</view>
</template>

<script>
	export default {
		methods:{
			test() {
			
				// #ifdef MP-DINGTALK
				console.log(21312311331)
				// #endif
					 // dd.setClipboard({
					 //      text: '1212132122121',
						//   complete: function (res) {
						// 		console.log(res)
						//   }
					 //    });
			},
			toOrderInfo(type) {
				uni.navigateTo({
					url:`../orderTracking/index?type=${type}`,
					
				})
			},
			viewWuliao() {
				uni.navigateTo({
					url:`../billMaterials/index`,
					
				})
			}
		}
	}
</script>

<style>
.f-color{
	color: #757575;
}
.t-color {
	color:  #FF453A;
}
.title{
	width: 70px;
	text-align: right;
}

</style>
