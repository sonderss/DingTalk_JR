<template>
	<view class="billMaterials m-lr-10" style="overflow: hidden;">
		
		<cusTable  :thList="thList" :tdList="tdList" :tdData="tdData" :useCusTdList="false"/>
	</view>
</template>

<script>
	import cusTable from '@/component/cusTable.vue'
	export default {
		components:{
			cusTable
		},
		data(){
			return {
				thList: ['姓名','年龄','性别','A','B','C','D','E','F'],//表头
				tdList: ['name','age','sex','A','B','C','D','E','F'], //自定义属性名
				tdData: [{name:'张三',age:'18',sex:"男",A:'张三',B:'AS',C:'SD',D:"DAS",E:'EE',F:'EWQEWE'},{name:'张三',age:'18',sex:"男",A:'张三',B:'AS',C:'SD',D:"DAS",E:'EE',F:'EWQEWE'},{name:'张三',age:'18',sex:"男",A:'张三',B:'AS',C:'SD',D:"DAS",E:'EE',F:'EWQEWE'},{name:'张三',age:'18',sex:"男",A:'张三',B:'AS',C:'SD',D:"DAS",E:'EE',F:'EWQEWE'},{name:'张三',age:'18',sex:"男",A:'张三',B:'AS',C:'SD',D:"DAS",E:'EE',F:'EWQEWE'},{name:'张三',age:'18',sex:"男",A:'张三',B:'AS',C:'SD',D:"DAS",E:'EE',F:'EWQEWE'},{name:'张三',age:'18',sex:"男",A:'张三',B:'AS',C:'SD',D:"DAS",E:'EE',F:'EWQEWE'}]
			}
		}
	}
</script>

<style>
</style>
