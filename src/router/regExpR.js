import grammer from '@/components/grammer'
import yuan from '@/components/yuan'

import regExp from '@/components/regExp'
//引入动画
//import "../assets/lib/animate.css"
export default {
	path: '/regExp',
	name: 'regExp',
	component: regExp,
	children: [
		{
			path: '',
			component: grammer
		},

		{
			path: 'grammer',
			component: grammer
		},
		
		{
			path: 'yuan',
			component: yuan
		}
	]

	
}