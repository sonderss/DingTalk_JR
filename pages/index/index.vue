<template>
  <view>
    <view :style="{ background: background }" class="custom-header-container main">
      <view :style="{height:getStausBarHeight + 'px'}" class="custom-header-status-bar"></view>
      <view :class="{'ios-center': isIos }" class="custom-header-top-container">
		<view :style="{color: color}" :class="{'ios-center': isIos }" class="custom-header-title p-right-5">蓝梦</view>
		<input v-model="keyWords" style="border-radius: 50px;overflow: hidden;padding-left: 10px;width: calc(100% - 170px);" />
	  </view>
    </view>
    <view :style="{ height: getStausBarHeight + (isIos ? 45 : 48) + 'px' }" class="custom-header-height"></view>
	<view class="top_view">
		<view :class="num === 0 ? 'top_view_active' :''" class="item" @click="slect(0)">
			<view :class="num === 0 ? 'top_active' : ''" class="top f24">6</view>
			<view class="bottom f12">待办任务</view>
		</view>
		<view :class="num === 1 ? 'top_view_active' :''"  class="item"  @click="slect(1)">
			<view :class="num === 1 ? 'top_active' : ''"  class="top f24">1</view>
			<view class="bottom f12">超时效</view>
		</view>
		<view  :class="num === 2 ? 'top_view_active' :''"  class="item"  @click="slect(2)">
			<view  :class="num === 2 ? 'top_active' : ''"  class="top f24">1</view>
			<view class="bottom f12">新货风险</view>
		</view>
	</view>
	<view class="list_view">
		<view class="list_view_item m-bottom-10" v-for="(item, index) in list" :key="index" @click.stop="toDetail">
			<view class="item_top">
				<view class="left f16 flex a-center el-1 p-right-10">
					<span style="width: 80px;">订单编号:</span>
					<span class="el-1" style="flex: 1;display: block;">{{item.code}}</span>
					<span class="iconfont" @click.stop="test">&#xe729;</span>
				</view>
				<view class="right flex j-between" style="width:80px">
					<span style="color: #FF453A;" class="f16">{{item.status}}</span>
					<span class="iconfont">&#xe629;</span>
				</view>
			</view>
			<view class="item_mid flex j-between a-center f13 p-tb-5" style="color: #757575;">
				<view  class="el-1" style="flex: 1;">购买方：{{item.buy}}</view>
				<view  class="el-1" style="width: 100px;">创建人：{{item.user}}</view>
			</view>
			<view class="item_mid flex j-between a-center f13 p-tb-5" style="color: #757575;">
				<view  class="el-1" style="flex: 1;">期望到货：{{item.qi}}</view>
				<view  class="el-1" style="width: 180px;">创建时间：{{item.time}}</view>
			</view>
		</view>
	</view>
  </view>
</template>
<script>
export default {
    data(){
		return {
			keyWords: '',
			num: 0,
			list: [
				{code: 'a1232131',status:'待处理',buy:'上海润达医药公司',user:'测试人',qi:'王企鹅无群',time:'2020-12-12 14:12'},
				{code: 'b1232131',status:'待处理',buy:'上海润达医药公司',user:'测试人',qi:'王企鹅无群',time:'2020-12-12 14:12'},
				{code: 'c1232131',status:'待处理',buy:'上海润达医药公司',user:'测试人',qi:'王企鹅无群',time:'2020-12-12 14:12'},
			],
			title:{
			  type:String,
			  default:''
			},
			background: {
			  type: String,
			  default: 'linear-gradient(270deg, #05399C 0%, #0F7CEB 100%)'
			},
			color: {
			  type: String,
			  default: '#ffffff'
			},
			showBack: {
			  type: Boolean,
			  default: true
			}
		}
     
    },
	mounted() {
		let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
		console.log('dassa',menuButtonInfo )
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
    methods: {
		test() {
			console.log(21312311331)
				 dd.setClipboard({
				      text: '1212132122121',
					  complete: function (res) {
							console.log(res)
					  }
				    });
		},
		// 跳转详情
		toDetail() {
			uni.navigateTo({
				url:"../orderDetail/index"
			})
		},
		backTap() {
		},
		slect(type) {
			this.num = type
		}
    },
  }
</script>

<style lang="scss" scoped>

	.list_view {
		height: auto;
	}
	.list_view_item{
		height: 75px;
		background: #FAFAFA;
		box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);
		border-radius: 1px;
		padding: 10px;
		.item_top{
			width: 100%;
			height: 25px;
			// background: red;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
	.main{
		height:var(–status-bar-height);
		background-color: #0084FF;
	}
	.top_view{
		height: 70px;
		background: #fff;
		border-radius: 10px 10px 0 0;
		overflow: hidden;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0 20px;
	}
	.top_view_active{
		color: #0091FF;
	}
	.item{
		width: 50px;
		height: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 10px;
		font-size: 12px;
	}
	.top{
		width: 100%;
		text-align: center;
		border-bottom: 1px solid #6D7278;
		padding-bottom: 3px;
	}
	.top_active {
		border-bottom: 1px solid #0091FF;
	}
	.bottom{
		padding-top: 3px;
	}

</style>
