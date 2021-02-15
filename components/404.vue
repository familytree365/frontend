<template>
  <section class="section is-medium">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column has-text-centered">
          <h1 class="title">404 Page Not Found</h1>
          <p class="subtitle">An unexpected error has occurred. Please contact the site owner.</p>
          <a class="button">Home</a>
          <a class="button">Contact</a>
        </div>
        <div class="column has-text-centered">
          <img src="https://www.eastfieldcollege.edu/PublishingImages/Pages/PageNotFoundError/404-robot.gif" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style type="text/css">
html, body {
    background: #EFF3F4;
    font-family: 'Open Sans', serif;
    height: 100%;
}

.nav-bar-burger-color {
    color: #ffffff;
}

.nav-bar-menu-bg-color {
    background-color: transparent !important;
}

.hero-body .container {
    max-width: 1000px;
}

.features {
    margin-top: 0px;
    padding: 2rem 0;
}

.card-content .content {
    font-size: 15px;
    margin: 1rem 1rem;
}

.card {
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.18);
}

.intro {
    padding: 5rem 0;
    text-align: center;
}

.is-shady {
    animation: flyintoright .4s backwards;
    background: #fff;
    box-shadow: rgba(0, 0, 0, .1) 0 1px 0;
    border-radius: 4px;
    display: inline-block;
    margin: 10px;
    position: relative;
    transition: all .2s ease-in-out;
}

    .is-shady:hover {
        box-shadow: 0 10px 16px rgba(0, 0, 0, .13), 0 6px 6px rgba(0, 0, 0, .19);
    }

.author-image {
    position: absolute;
    top: -105px;
    left: 50%;
    width: 210px;
    height: 210px;
    margin-left: -105px;
    border: 3px solid #fafafa;
    border-radius: 50%;
}

.picture-border-light {
    border: 10px solid #ffffff;
}

.picture-border-dark {
    border: 10px solid #fafafa;
}

.title-dark {
    color: #363636 !important;
}

.margin-top-one-hundred {
    margin-top: 100px !important;
}

.margin-top-neg-sixty {
    margin-top: -60px;
}

.text-area-min-height {
    min-height: 150px;
}

.heart-pink {
    color: deeppink;
}



.map-marker-red {
    color: #ea4335;
}

.map-size {
    height: 70%;
}
</style>
