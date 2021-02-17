<template>
    <div>
        <h1>Portfolio</h1>

        <portfolio-item
            v-for="(item, index) in items"
            :key="index"
            projectName="Christmas game"
            link="/christmasgame"></portfolio-item>

        <h2>Open source contributions</h2>
        <ul>
            <li><a href="https://github.com/mjmlio/mjml" target="_blank">MJML</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    name: 'Christmas game',
                    link: '/christmas-game'
                }
            ]
        }
    }
}
</script>