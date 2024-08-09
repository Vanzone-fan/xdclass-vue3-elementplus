<template>
	<div class="advertisement">
		<el-carousel class="h-16" type="" direction="vertical"
			:initial-index="0" :autoplay="true" :interval="5000" :loop="true"
			trigger="hover" indicator-position="none" arrow="never">
			<el-carousel-item>
				<img src="@/assets/vip1.gif" alt="">
			</el-carousel-item>
			<el-carousel-item>
				<img src="@/assets/sfTop.gif" alt="">
			</el-carousel-item>
		</el-carousel>
	</div>

	<div class="navigator w-full flex items-center justify-evenly gap-2 shadow-md">
		<img src="@/assets/logo.jpg" title="小滴(D)课堂" class="w-36 h-16" />

		<div class="left-list">
			<ul class="flex gap-6">
				<li>首页</li>
				<li>课程中心</li>
				<li class="flex">
					<img class="w-5 h-5" src="@/assets/vip_icon.jpg" alt="" />
					超级会员
				</li>
				<li>工具</li>
				<li>自学路线</li>
				<li>一对一辅导</li>

				<li class="">
					<el-input :suffix-icon="Search" placeholder="请输入搜索内容" />
				</li>

				<li>兑换码</li>
				<li>云服务器</li>
			</ul>
		</div>

		<div class="right-list flex gap-4">
			<el-button auto-insert-space size="large" class="login-button">登录</el-button>
			<el-button auto-insert-space type="info" size="large" class="register-button">注册</el-button>
		</div>
	</div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue';
</script>
