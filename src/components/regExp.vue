<template>
	<div class="layout">

		<div class="layout-content">
			<Row>
				<i-col :xs="24" :sm="0" :md="0" :lg="0">
					<div class="layout-header">
						<i-button type="text" @click="slides=!slides">
							<Icon type="navicon" size="32"></Icon>
						</i-button>
					</div>
				</i-col>
			</Row>
			<!--隐藏-->
			<transition  name="custom-classes-transition" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
				<div v-show="slides" class="layout-slide">
					<ul>
						<router-link to="/regExp/grammer">
							<li>语法</li>
						</router-link>
						<router-link to="/regExp/yuan">
							<li>元字符</li>
						</router-link>
					</ul>
				</div>
			</transition>
			<Row>

				<i-col :xs="leftxs" :sm="4" :md="4" :lg="4">
					<Menu active-name="1-2" width="auto" :open-names="['1']">
						<Submenu name="1">
							<template slot="title">
								<Icon type="ios-navigate"></Icon>
								正则表达式
							</template>

							<router-link to="/regExp/grammer">
								<Menu-item name="1-1">语法</Menu-item>
							</router-link>

							<router-link to="/regExp/yuan">
								<Menu-item name="1-2">元字符</Menu-item>
							</router-link>

						</Submenu>

					</Menu>
				</i-col>
				<i-col :xs="rightxs" :sm="20" :md="20" :lg="20">
					<div class="layout-content-main" id="regExp">
						<transition :during="500" name="fade">
							<router-view></router-view>
						</transition>
					</div>
				</i-col>
			</Row>
		</div>
		<div class="layout-copy">

		</div>
	</div>
</template>
<script>
	export default {
		name: "regExp",
		data() {
			return {

				leftxs: 0,
				rightxs: 24,
				slides: false

			}
		},
		methods: {
			
		}
	}
</script>
<style scoped>
	.layout-slide ul {
		list-style: none;
		background: #FFFFFF;
		text-align: center;
		opacity: 1;
		min-height: 100px;
		font-size: 14px;
	}
	
	.layout-slide li {
		width: 120px;
		height: 30px;
		line-height: 30px;
	}
	
	a {
		color: #000000;
	}
	
	.layout {
		border: 1px solid #d7dde4;
		background: #f5f7f9;
	}
	
	.layout-logo {
		width: 100px;
		height: 30px;
		background: #5b6270;
		border-radius: 3px;
		float: left;
		position: relative;
		top: 15px;
		left: 20px;
	}
	
	.layout-nav {
		width: 420px;
		margin: 0 auto;
	}
	
	.layout-assistant {
		width: 300px;
		margin: 0 auto;
		height: inherit;
	}
	
	.layout-breadcrumb {
		padding: 10px 15px 0;
	}
	
	.layout-content {
		min-height: 200px;
		margin: 15px;
		overflow: hidden;
		background: #fff;
		border-radius: 4px;
		position: relative;
	}
	
	.layout-content-main {
		padding: 10px;
	}
	
	.layout-copy {
		text-align: center;
		padding: 10px 0 20px;
		color: #9ea7b4;
	}
	
	.layout-slide {
		position: absolute;
		z-index: 2;
	}

</style>