<template>
	<div class="layout-content-main" id="regExp">
		<h1>正则表达式 - 语法</h1>
		<p>正则表达式(regular expression)描述了一种字符串匹配的模式（pattern），可以用来检查一个串是否含有某种子串、将匹配的子串替换或者从某个串中取出符合某个条件的子串等。 例如：
		</p>
		<ul>
			<li>runoo+b，可以匹配 runoob、runooob、runoooooob 等，+ 号代表前面的字符必须至少出现一次（1次或多次）。</li>
			<li>runoo*b，可以匹配 runob、runoob、runoooooob 等，* 号代表字符可以不出现，也可以出现一次或者多次（0次、或1次、或多次）。</li>
			<li>colou?r 可以匹配 color 或者 colour，? 问号代表前面的字符最多只可以出现一次（0次、或1次）。</li>
		</ul>
		<p>
			构造正则表达式的方法和创建数学表达式的方法一样。也就是用多种元字符与运算符可以将小的表达式结合在一起来创建更大的表达式。正则表达式的组件可以是单个的字符、字符集合、字符范围、字符间的选择或者所有这些组件的任意组合。
		</p>
		<p>
			正则表达式是由普通字符（例如字符 a 到 z）以及特殊字符（称为"元字符"）组成的文字模式。模式描述在搜索文本时要匹配的一个或多个字符串。正则表达式作为一个模板，将某个字符模式与所搜索的字符串进行匹配。
		</p>
	<h1>普通字符</h1>
	<p>普通字符包括没有显式指定为元字符的所有可打印和不可打印字符。这包括所有大写和小写字母、所有数字、所有标点符号和一些其他符号。</p>
	<h1>非打印字符</h1>
    <Table stripe :columns="columns1" :data="data1"></Table>
    <!--特殊字符-->
    <h1>特殊字符</h1>
    <p>所谓特殊字符，就是一些有特殊含义的字符，如上面说的 runoo*b 中的 *，简单的说就是表示任何字符串的意思。如果要查找字符串中的 * 符号，则需要对 * 进行转义，即在其前加一个 \: runo\*ob 匹配 runo*ob。
许多元字符要求在试图匹配它们时特别对待。若要匹配这些特殊字符，必须首先使字符"转义"，即，将反斜杠字符\ 放在它们前面。下表列出了正则表达式中的特殊字符：</p>
    <Table stripe :columns="columns2" :data="data2"></Table>



	</div>

</template>
<script>
	export default {
		name: "grammer",
		data () {
            return {
            	
                columns1: [
                    {
                        title: '字符',
                        key: 'name',
                        width:'100px'
                    },
                    {
                        title: '描述',
                        key: 'address'
                    },
           
                ],
                data1: [
                    {
                        name: '\\cx',
                        address: '匹配由x指明的控制字符。例如，\\cM 匹配一个 Control-M 或回车符。x 的值必须为 A-Z 或 a-z 之一。否则，将 c 视为一个原义的" c" 字符。'
                    },
                    {
                        name: '\\f',
                        address: '匹配一个换页符。等价于\\x0c 和 \\cL。'
                    },
                    {
                        name: '\\n',
                        address: '匹配一个换行符。等价于 \\x0a 和 \\cJ。'
                    },
                    {
                        name: '\\r',
                        address: '匹配一个回车符。等价于 \\x0d 和 \\cM。'
                    },
                    {
                        name: '\\s',
                        address: '匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \\f\\n\\r\\t\\v]。'
                    },
                    {
                        name: '\\S',
                        address: '匹配任何非空白字符。等价于 [^ \\f\\n\\r\\t\\v]。'
                    }
                ],
                columns2: [
                    {
                        title: '特別字符',
                        key: 'name',
                        width:'100px'
                    },
                    {
                        title: '描述',
                        key: 'address'
                    },
           
                ],
                data2: [
                    {
                        name: '$',
                        address: '匹配输入字符串的结尾位置。如果设置了 RegExp 对象的 Multiline 属性，则 $ 也匹配 "\\n "或 "\\r"。要匹配 $ 字符本身，请使用 \\$。'
                    },
                    {
                        name: '( )',
                        address: '标记一个子表达式的开始和结束位置。子表达式可以获取供以后使用。要匹配这些字符，请使用 \\( 和 \\)。'
                    },
                    {
                        name: '\\n',
                        address: '匹配一个换行符。等价于 \\x0a 和 \\cJ。'
                    },
                    {
                        name: '\\r',
                        address: '匹配一个回车符。等价于 \\x0d 和 \\cM。'
                    },
                    {
                        name: '\\s',
                        address: '匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \\f\\n\\r\\t\\v]。'
                    },
                    {
                        name: '\\S',
                        address: '匹配任何非空白字符。等价于 [^ \\f\\n\\r\\t\\v]。'
                    }
                ]
            }
        }
		
	}
</script>
<style type="text/css">
	*{
		font-size: 14px;
	}
	
	p{
		text-indent: 20px;
		line-height: 25px;
	}
	/*.layout-content-main{
		overflow: hidden;
		height: 1000px;
	}*/
	ul{
		list-style:square inside ;
	}
</style>