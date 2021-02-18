<template>
    <div class="hero" :style="{
            'background-image': src ? `url(${src})`: ''
        }"
        :class="{
            'hero--primary': isPrimary,
            'hero--small': size === 'small',
        }">
        <container>
            <div class="hero__text">
                <div class="hero__headline">
                    <h1>{{ headline }}</h1>
                </div>
                <div class="hero__slot">
                    <slot></slot>
                </div>
            </div>
        </container>
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
        },
        isPrimary: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="scss">
.hero {
    min-height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &--primary {
        background-color: $primary;
        background-image: linear-gradient(135deg, $primary, lighten($primary, 25%));
        color: $bg-primary-font-color;
    }

    &--small {
        min-height: 6rem;
    }
}
</style>