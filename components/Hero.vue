<template>
    <div class="hero" :style="{ 'background-image': `url(${src})` }">
        <div class="hero__text">
            <div class="hero__headline">
                {{ headline }}
            </div>
            <div class="hero__slot">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        headline: {
            required: false,
            type: String,
            default: '',
        },
        src: {
            required: false,
            type: String,
            default: '',
        }
    },
}
</script>

<style lang="scss">
.hero {
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>