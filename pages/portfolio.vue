<template>
    <div class="portfolio">
        <hero headline="Portfolio" size="small" :isPrimary="true"></hero>
        <container>

            <portfolio-item
                v-for="(item, index) in items"
                :key="index"
                :projectName="item.name"
                :githublink="item.githublink"
                :technologies="item.technologies"
                :image="item.image"
                :livelink="item.livelink">{{item.description}}</portfolio-item>

            <!-- <h2>Open source contributions</h2>
            <ul>
                <li><a href="https://github.com/mjmlio/mjml" target="_blank">MJML</a></li>
            </ul> -->
        </container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    name: 'Christmas game',
                    description: `A fun little game for PC in the browser. It was made as an assignment in high school and I had a lot of fun making it.`,
                    livelink: 'https://alexnortung.github.io/ChristmasGame/',
                    githublink: 'https://github.com/Alexnortung/ChristmasGame',
                    technologies: [
                        {
                            name: 'Vanilla JS',
                        },
                        {
                            name: 'HTML5',
                        },
                    ],
                    image: '/img/christmas-game.png',
                },
                {
                    name: 'Tower defense game',
                    description: `A fun little game for PC in the browser. It was made by some friends and I, two graphics designers who made awesome graphics and two developers including me.
                                  We basically made a game engine just for this game, but it has very poor performance when there are many entities.
                                  Also there is not much gameplay to it.`,
                    livelink: 'https://alexnortung.github.io/tower-defense-northwing/index.html',
                    githublink: 'https://github.com/Alexnortung/tower-defense-northwing',
                    technologies: [
                        {
                            name: 'P5.js',
                        },
                        {
                            name: 'Vanilla JS',
                        },
                        {
                            name: 'HTML5',
                        },
                    ],
                    image: '/img/tower-defense-game.png',
                },
                {
                    name: 'Rolling boi',
                    description: 'Me and some friends were participating in a game jam and came up with this fun little game, it is beatable and somewhat challenging.',
                    livelink: 'https://alexnortung.itch.io/rolling-boi',
                    githublink: 'https://github.com/Alexnortung/rolling-boi',
                    technologies: [
                        {
                            name: 'Unity'
                        },
                    ],
                    image: '/img/rolling-boi.png',
                },
                {
                    name: 'Moveboks.dk',
                    description: `A startup that me and another developer made a web app for.
                                  It was made with Laravel and Vue. It was meant as an app to rent soundbokses,
                                  but due to covid the production of the site stopped and it did not go much further as of writing this.`,
                    livelink: 'https://moveboks.dk',
                    technologies: [
                        {
                            name: 'Vue.js'
                        },
                        {
                            name: 'Laravel',
                        },
                    ],
                    image: '/img/moveboks.png',
                },
                {
                    name: 'Pi digits rust',
                    description: `Implementation of different popular algorithms for calculating digits of pi in rust.
                                  Made for pi day.`,
                    githublink: 'https://github.com/Alexnortung/pi-digits',
                    technologies: [
                        {
                            name: 'rust',
                        },
                    ]
                },
                {
                    name: 'MJML pardot',
                    description: `Pardot compatible MJML components. MJML is a framework for creating email templates.`,
                    githublink: 'https://github.com/Alexnortung/mjml-pardot',
                    technologies: [
                        {
                            name: 'Node.js',
                        },
                    ],
                },
            ],
        }
    },
}
</script>

<style lang="scss">
.portfolio {
    padding-bottom: 3rem;
}
</style>