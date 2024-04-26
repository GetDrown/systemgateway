<template>

    <side />

    <div class="right-0 top-0 absolute mr-[170px] mt-[190px]">
        <img src="../../assets/image/dnsc.png" alt="" class="w-[500px] h-[500px]">
    </div>
    <!-- BACKGORUND  -->
    <div class="z-[-1] top-0 bottom-0 absolute right-0 h-screen w-screen overflow-hidden">
        <img src="../../assets/image/building.png" alt="" class="object-cover w-full" />
    </div>

    <div class="right-0 z-[-2] top-0 absolute mr-[50px] md:left-auto md:y-auto  md:mr-[80px]">
        <img src="../../assets/image/bg2.png" alt="Background image" class="w-[250px]" />
    </div>

    <div class="right-0 z-[-2]  bottom-0  absolute mr-[600px] md:mr-[500px] mt-[400px] overflow-hidden">
        <img src="../../assets/image/bg3.png" alt="" class="w-[250px]" />
    </div>

    <div class="z-[-5] bottom-0 absolute  left-[200px]">
        <img src="../../assets/image/bg1-1.png" alt="" />
    </div>
</template>

<script>
import side from '@/components/side-content/side.vue'

export default {
    name: 'LoginPage',
    components: {
        side,
    }
}
</script>

<style lang="css" scoped></style>