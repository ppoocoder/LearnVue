<template>
    <div>
        <h1>{{this.$store.state.header}}</h1>
    </div>
</template>

<script>
export default {

}
</script>
<!--// scoped : siglePattern 의 글로벌 설정이 무시되고 component안에서만의 설정이 가능함   -->
<style scoped>
h1 { 
    color: #2f3b52;
    font-weight: 900;
    margin : 2.5rem 0 1.5rem;
    
}
</style>