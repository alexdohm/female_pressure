<template>
  <div>
    <Header />
    <b-container class="mt-5 f-body-container">
      <!-- RELAUNCH TSHIRT -->
      <div class="relaunch-tshirt mb-5">
        <h2>female:pressure relaunch t-shirt</h2>

        <h5 class="mb-4">
          we have a new t-shirt made to celebrate our new website ! orders,
          manufacturing, shipping handled by everpress.
        </h5>
        <div class="d-flex mw-100">
          <img
            class="flex-img mr-3"
            src="../../assets/merch/fp_t-anthrazite.png"
            alt="relaunch tshirts grey"
          />
        </div>
        <button class="f-button mt-4">order</button>
      </div>

      <!-- CANT DECIDE -->
      <div class="cant-decide my-5">
        <h2 class="mb-4">female:pressure x can’t decide t-shirts</h2>
        <div class="d-flex mw-100">
          <img
            class="flex-img mr-3"
            src="../../assets/merch/fp_t-embroded-2.jpg"
            alt="female pressure tshirt 210"
          />
          <img
            class="flex-img mr-3"
            src="../../assets/merch/fp_t-embroded-3.jpg"
            alt="female pressure tshirt 210"
          />
        </div>
        <figcaption class="figure-caption mb-3">
          credit: Aiko Okamoto
        </figcaption>
        <p class="mb-4">
          all gender xs-xxl t-shirt in white or mint [russel athletic, oeko tex]
          with female:pressure logo embroidery made by can´t decide.
          <br />

          these t-shirts will be made on demand and only as many as ordered.<br />
          we need a minimum of five t-shirts ordered before we can do a new
          batch.
        </p>

        <p class="mb-2">30 € each + shipping</p>

        <p>
          <b>shipping costs:</b><br />
          germany: € 3.79 [not insured / not trackable]<br />
          european union: € 6.05 [tracked]<br />
          world wide: € 7.35 [tracked]<br />
        </p>
        <p>
          for insured package or more info about the t-shirt please ask
          merch@femalepressure.net
        </p>

        <button class="f-button mt-4" @click="showModal = true">order</button>

        <MerchModal :showModal="showModal" @onClose="handleClose"/>
      </div>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/header/Header';
import { mapMutations } from 'vuex';
import MerchModal from './MerchModal.vue';

export default {
  data() {
    return {
      showModal: false,
    };
  },

  components: {
    Header,
    MerchModal,
  },
  methods: {
    ...mapMutations(['SET_PAGE']),
    handleClose() {
      this.showModal = false;
    },
  },
  mounted() {
    this.SET_PAGE('merch');
  },
};
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

.archive-tab
  border-bottom: 2px solid #00FB9C

.archive-title
  background-color: #00FB9C
  width: 150px
  text-align: center
  padding: 1px 20px

.relaunch-tshirt
  padding-bottom: 40px
  border-bottom: #00ffc5 1px solid
</style>
