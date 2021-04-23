<template>
	<view>
		<scroll-view scroll-x="true" class="scroll-table">
			<view class="scroll-tr">
				<view class="cus-tr cus-th">
					<view class="cus-td" v-for="item in thList">{{item}}</view>
				</view>
				<!-- 这里会自动遍历出对象数组中的数据 -->
				<view class="cus-tr" v-for="item in tdData" v-if="!useCusTdList">
					<view class="cus-td" v-for="(val,key,i) in item">{{val ? val : "-"}}</view>
				</view>
				<!-- 这里会使用tdList中定义的字段的数据 -->
				<view class="cus-tr" v-for="item in tdData" v-if="useCusTdList">
					<view class="cus-td" v-for="tdName in tdList">{{item[tdName] ? item[tdName] : '-'}}</view>
				</view>
			</view>
			<!-- 撑开空间，防止最后一行的下边框无法显示 -->
			<view style="height: 2rpx;"></view>  
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "cusTable",
		props:{
			thList:{
				type:Array,
				default: function(){ return []}
			},
			tdList:{
				type:Array,
				default: function(){ return []}
			},
			tdData:{
				type:Array,
				default: function(){ return []}
			},
			useCusTdList:{
				useCusTdList: Boolean,
				default: false
			}
		},  
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	/*scroll-view样式*/
	.scroll-table{
		min-height: 100rpx;
		white-space:nowrap;
		padding: 10rpx 20rpx;
		margin-top: 30rpx;
		padding-bottom: 60rpx;
		
		.scroll-tr{
			min-width: 750rpx;
			display:inline-block;
			
			/*表头样式*/
			.cus-th{
				background-color: #F3F3F3;
			}
			
			/*行样式*/
			.cus-tr{
				box-sizing: border-box;
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: flex-start;
				align-items: stretch;
				align-content: center;
				height: 100%;
				
				/*设置边框*/
				border-color: #ccc;
				border-style: solid;
				border-width: 0;
				border-top-width: 1px;
				border-left-width: 1px;
				border-bottom-width: 1px;
				color: #333;
				
				+ .cus-tr{
					border-top-style: none;
				}
				
				
				/*表格样式*/
				.cus-td{
					width: 200rpx;
					box-sizing: border-box;
					padding: 3px;
					word-break:break-all;
					border-color: #ccc;
					border-style: solid;
					border-width: 0;
					border-right-width: 1px;
					min-height: 60rpx;
					white-space: pre-wrap; 
					word-wrap: break-word;
					
					/**/
					display: flex;
					justify-content: center; //左右居中
					align-items: center; //上下居中
					
					/* 跨列 */
					&-colspan{
						flex-grow: 1;
						width:0;
					}
					
					/* 内容顶部对齐 */
					&-top{
						align-items: flex-start;
						align-content:flex-start;
					}
					/* 内容底部对齐 */
					&-bottom{
						align-items: flex-end;
						align-content:flex-end;
					}
					/* 内容左边对齐 */
					&-left{
						justify-content: flex-start;
					}
					/* 内容右边对齐 */
					&-right{
						justify-content: flex-end;
					}
				}
				
			}
			
		}
		
	}
	
</style>
