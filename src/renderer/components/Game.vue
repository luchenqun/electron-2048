<template>
<div id="game">
    <el-row v-for="r in 4" :key="r">
        <el-col :span="6" v-for="l in 4" :key="l">
            <el-card class="box-card">
                <div class="text item">
                    {{'列表内容 ' + l }}
                </div>
            </el-card>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {}
</script>

<style>

</style>
