<template>
    <div class="portfolio-item">
        <div class="portfolio-item__project-name">{{ projectName }}</div>
        <div class="portfolio-item__description">
            <slot></slot>
        </div>
        <div class="spacer-1"></div>
        <div class="portfolio-item__demolink" v-if="livelink != ''">
            See it live <a :href="livelink" target="_blank">here</a>
        </div>
        <div class="portfolio-item__githublink" v-if="githublink != ''">
            <a :href="githublink" target="_blank">Github</a>
        </div>
        <div class="portfolio-item__layer">
        </div>
        <div class="portfolio-item__technologies" v-if="technologies.length > 0">
            <div class="portfolio-item__subheading">Technologies</div>
            <div class="portfolio-item__layer">
                <div class="portfolio-item__technology" v-for="(tech, index) in technologies" :key="index">
                    {{ tech.name }}
                </div>
            </div>
        </div>
        <!-- <div class="spacer-2"></div> -->
        <div class="portfolio-item__subheading" v-if="image">
            Image
        </div>
        <div class="portfolio-item__image" v-if="image">
            <img :src="image" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        projectName: {
            type: String,
            required: true,
        },
        livelink: {
            type: String,
            required: false,
            default: '',
        },
        githublink: {
            type: String,
            required: false,
            default: '',
        },
        image: {
            type: String,
            required: false,
            default: '',
        },
        technologies: {
            type: Array,
            default() {
                return []
            },
        },
    },
}
</script>

<style lang="scss">
.portfolio-item {
    padding-bottom: 3rem;

    &__project-name {
        font-size: 1.7rem;
        font-weight: bold;
    }

    &__layer {
        padding-left: 1rem;
    }

    &__technologies {
        // padding-left: 1rem;
    }

    &__technology {
        // padding-left: 1rem;
    }

    &__subheading {
        padding-top: 1rem;
        padding-bottom: 0.2rem;
        font-size: 1.5rem;
        font-weight: bold;
    }

    &__image {
        max-width: 100%;
        display: inline-block;
        background-color: $grey;
        border-radius: 10px;
        padding: 1rem;
        // box-shadow: 10px 0px 12px #999;

        & > img {
            border-radius: 4px;
            width: 400px;
            max-width: 100%;
            max-height: 100%;
        }
    }
}
</style>