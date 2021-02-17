<template>
    <div class="portfolio-item">
        <div class="portfolio-item__project-name">{{ projectName }}</div>
    </div>
</template>

<script>
export default {
    props: {
        projectName: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: false,
            default: '',
        },
        githubLink: {
            type: String,
            required: false,
            default: '',
        },
        image: {
            type: String,
            required: false,
            default: '',
        },
    },
}
</script>

<style lang="scss">

</style>