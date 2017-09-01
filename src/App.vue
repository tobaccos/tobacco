<template>
	<div id="app">
		<div class="nav">

			<div class="logo"><img src="./assets/logo1.png" alt=""></div>
			<div class="bars">
				<ul>

			
					<li v-for="(bar,index) in bars">
						<Dropdown>
							<router-link v-if="bar.addressLocal" :to="bar.addressLocal">
								
								{{bar.title}}
							</router-link>
							<a v-else :href="bar.addressHttp">{{bar.title}}</a>
						
							<DropdownMenu v-if="bar.items" slot="list">
								<DropdownItem style="width: 100%;" v-for="item in bar.items">
									<!--{{item.name}}-->
									<div v-if="item.address">
										<a :href="item.address">{{item.name}}</a>
									</div>
									<div v-else>
										<router-link :to="item.address1">{{item.name}}</router-link>
									</div>
								</DropdownItem>
						
							</DropdownMenu>
						</Dropdown>
					</li>
	

				</ul>
			</div>
		</div>
		<div class="shows">
			<router-view></router-view>
		</div>

	</div>
</template>

<script>
	import Swiper from './../static/swiper.min.js'
	require('./../static/swiper.min.css')

	export default {
		components: {},
		data() {
			return {
				bars: [{
					title: "主页",
					addressLocal: "/",
					addressHttp:"https://tobaccos.github.io/myself/"

				}, {
					title: "项目",
					addressLocal: "/sample/",
					items: [{
						name: '橙越商城(移动端)',
						address: "http://www.youpinshanglian.com",
						address1: ""
					}, {
						name: '百信购(移动端)',
						address: "http://www.bxgogo.com",
						address1: ""
					}]
				}, {
					title: "资料",
					addressLocal: "/data/",
					items: [{
						name: '正则表达式',
						address: "",
						address1: "/regExp/grammer/"
					},{
						name: 'vue官方教程',
						address: "https://cn.vuejs.org/v2/guide/",
						address1: "/regExp/grammer/"
					}]
				}, {
					title: "关于我",
//					addressLocal: "/regExp/grammer/",
					addressHttp:"https://tobaccos.github.io/myself/"
					
				
				}, ],
				visible: false
			}
		},
		mounted() {
			console.log('挂载好了')

		},
		methods: {
			handleOpen() {
				this.visible = true;
			},
			handleClose() {
				this.visible = false;
			}
		}
	}
</script>

<style>
	html,
	body {
		/*position: relative;*/
		min-height: 100%;
		/*background: #27291e;*/
	}
	
	ul li {
		list-style: none;
	}
	
	#app {
		color: #2c3e50;
		/*margin-top: -100px;*/
		/*max-width: 600px;*/
		font-family: Source Sans Pro, Helvetica, sans-serif;
		height: 100%;
		position: relative;
	}
	
	#app a {
		color: #42b983;
		text-decoration: none;
	}
	
	.nav {
		position: fixed;
		/*height: 50px;*/
		width: 100%;
		padding: 5px 30px;
		/*line-height: 50px;*/
		font-size: 16px;
		top: 0;
		left: 0;
		z-index: 2;
		background: #ccc;
	}
	
	.logo {
		float: left;
		height: 50px;
	}
	
	.logo img {
		height: 100%;
	}
	
	.bars {
		float: right;
		line-height: 50px;
	}
	
	.bars ul li {
		width: 80px;
		text-align: center;
		float: left;
		color: #000000;
	}
	
	.bars ul li:hover {
		cursor: pointer;
	}
	
	.shows {
		margin-top: 60px;
	}
</style>