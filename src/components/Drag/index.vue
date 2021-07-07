<template>
    <div class="drag">
        <div class="drag-list">
            <DragItem 
                :is-move="isMove"
            >
                测试11
            </DragItem>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import DragItem from "../DragItem/index"
const isMove = ref(false)

</script>

<style lang="scss">
.drag{
    border: 1px solid #333;
    padding:20px;
    &-list{
        position: relative;
    }

    &-item{
        width:300px;
        height: 30px;
        color:#fff;
        text-align: center;
        user-select: none;
        line-height: 30px;
        margin-bottom: 10px;
        background-color: #2323;

        &:hover{
            cursor: pointer;
        }
    }
}
</style>