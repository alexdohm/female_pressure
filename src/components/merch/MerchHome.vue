<template>
  <div>
    <Header/>
    <b-container class="mt-5 body-container">
      <!-- RELAUNCH TSHIRT -->
      <div class="relaunch-tshirt mb-5">
        <h2>female:pressure relaunch t-shirt</h2>

        <p>let's celebrate our new website with a new t-shirt !</p>
        <div class="d-flex mw-100">
          <img
              class="flex-img mr-3"
              src="../../assets/merch/fp-relaunch-mockup.png"
              alt="relaunch t-shirt grey"
          />
        </div>
      </div>
      <!-- CANT DECIDE -->
      <div class="cant-decide my-5">
        <h2>female:pressure x can't decide</h2>
        <p>
          mint/white t-shirts with embroidered logo for female:pressure members & supporters
        </p>
        <div class="d-flex mw-100">
          <img
              class="flex-img mr-3"
              src="../../assets/merch/fp-embroidery1.jpg"
              alt="vani-t wearing female:pressure x can't decide t-shirt"
          />
          <img
              class="flex-img mr-3"
              src="../../assets/merch/fp-embroidery2.jpg"
              alt="female:pressure x can't decide t-shirt"
          />
          <img
              class="flex-img mr-3"
              src="../../assets/merch/fp-embroidery3.jpg"
              alt="female:pressure x can't decide embroidery"
          />
        </div>
        <figcaption class="figure-caption mb-3">
          photo on the left [by aiko okamoto] shows tori aka vani-t, a dj, producer and organizer of the queer party
          <b-link href="https://www.facebook.com/climaxbaby/" target="_blank">climax</b-link>
        </figcaption>
        <button class="button">more info</button>
      </div>
      <!-- ARCHIVE -->
      <div class="archive-tab p-0 m-0">
        <h3 class="archive-title m-0">archive</h3>
      </div>

      <!-- 21Years     -->
      <div class="21y mt-4">
        <h4>here are a few of the t-shirts we made in the past</h4>
        <div class="d-flex mw-100 mt-4">
          <img
              class="flex-img mr-3"
              src="../../assets/merch/fp21-t3.jpg"
              alt="c-refund wearing female:pressure t-shirt"
          />
          <img
              class="flex-img"
              src="../../assets/merch/fp21-t1.jpg"
              alt="c-refund wearing female:pressure t-shirt"
          />
        </div>
        <figcaption class="figure-caption">
          photos above show c-refund taking it easy in her studio, enjoying our female:pressure 21y t-shirt @
          <b-link href="co-re-studio.com" target="_blank">co-re-studio.com</b-link>
        </figcaption>
      </div>
      <div class="20y mt-5">
        <div class="d-flex mw-100 mt-5">
          <div class="out-stock">
            <img
                class="flex-img"
                src="../../assets/merch/fp-21-anthracite.png"
                alt="21 years anniversary t-shirt"
            />
            <figcaption class="figure-caption">
              female:pressure 21y t-shirt
            </figcaption>
          </div>
          <div class="out-stock">
            <img
                class="flex-img mr-3"
                src="../../assets/merch/fp20-black-unisex.png"
                alt="20 years anniversary t-shirt"
            />
            <figcaption class="figure-caption">
              female:pressure 20y t-shirt
            </figcaption>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/header/Header"
import {mapMutations} from "vuex";

export default {
  components: {
    Header
  },
  methods: {
    ...mapMutations(["SET_PAGE"]),
  },
  mounted() {
    this.SET_PAGE('merch')
  }
}
</script>

<style lang="sass" scoped>
.flex-img
  max-width: 800px
  max-height: 300px

.out-stock
  color: black
  position: relative

  &:after
    position: absolute
    content: "OUT OF STOCK"
    top: 70%
    left: 10%
    font-size: 20px
    width: 80%
    background-color: #00FB9C
    padding: 5px
    text-align: center

.figure-caption
  color: black
  text-align: center

.button
  @include button

.archive-tab
  border-bottom: 2px solid #00FB9C

.archive-title
  background-color: #00FB9C
  width: 150px
  text-align: center
  padding: 1px 20px
</style>
