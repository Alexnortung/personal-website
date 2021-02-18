<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
// container is meant to be used to align the content of differnt elements
// can be used inside other elements such as Hero or Navbar.
export default {
    
}
</script>

<style lang="scss">
.container {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;

    @media screen and (min-width: $tablet) {
        max-width: 600px;
    }
    @media screen and (min-width: $large) {
        max-width: 700px;
    }
    @media screen and (min-width: $desktop) {
        max-width: 1000px;
    }
}
</style>