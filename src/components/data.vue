<template>
  <div class="hello">
    <h1>一些前端学习资料的整理</h1>
    <ul>
      <li><router-link to="/regExp/grammer">正则表达式</router-link></li>
      <li><a href="https://cn.vuejs.org/" target="_blank">vue官网</a></li>
    </ul>
    	
  </div>
</template>

<script>
export default {
  name: 'hello',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
