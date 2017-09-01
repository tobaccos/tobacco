import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import data from '@/components/data'
import sample from '@/components/sample'
import regExpR from './regExpR'
import iView from 'iview';
import 'iview/dist/styles/iview.css'; // 使用 CSS
Vue.use(Router)
Vue.use(iView)

export default new Router({
	routes: [{
			path: '/',
			name: 'Hello',
			component: Hello
		},{
			path: '/data',
			name: 'data',
			component: data
		},{
			path: '/sample',
			name: 'sample',
			component: sample
		},
		regExpR
	]
})