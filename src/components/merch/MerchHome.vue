<template>
  <div>
    <Header />
    <b-container class="mt-5 f-body-container">
      <!-- RELAUNCH TSHIRT -->
      <div class="relaunch-tshirt mb-5">
        <h2>female:pressure relaunch t-shirt</h2>

        <h5 class="mb-4">
          To celebrate our new website, here is a new t-shirt
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
        <h2 class="mb-4">female:pressure cant decide</h2>
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
        <h5>
          Fresh mint x white t-shirt for female:pressure members & supporters!
          female:pressire is a transnational network and dtabase of artists and
          culturual workers who operate in electronic music and visual arts
        </h5>

        <button class="f-button mt-4" @click="showModal = true">order</button>

        <div v-if="showModal" class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container d-flex flex-column">
              <button
                @click="showModal = false"
                class="close-button align-self-end"
              >
                X
              </button>
              <h5>Order proccess: </h5>
              <p>
                We are only abble to proccess orders with advance payment and we
                will need a proof of payment!
              </p>

              <table>
                <tr>
                  <th>size chart</th>
                  <th>chest [cm]</th>
                  <th>length [cm]</th>
                </tr>
                <tr>
                  <td>XS</td>
                  <td>98</td>
                  <td>68</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>102</td>
                  <td>70.5</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>108</td>
                  <td>73</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>114</td>
                  <td>75.5</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>120</td>
                  <td>78</td>
                </tr>
                <tr>
                  <td>XXL</td>
                  <td>126</td>
                  <td>80.5</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- ARCHIVE -->
      <div class="archive-tab p-0 m-0">
        <h3 class="archive-title m-0">archive</h3>
      </div>

      <!-- 21Years     -->
      <div class="21y mt-4">
        <h4>Here are a few of the T-shirts we did in the past</h4>
        <div class="d-flex mw-100 mt-4">
          <img
            class="flex-img mr-3"
            src="../../assets/merch/FP21_TShirt_3.jpg"
            alt=" woman wearing female pressure tshirt 210"
          />
          <img
            class="flex-img"
            src="../../assets/merch/FP21_TShirt_1.jpg"
            alt=" woman wearing female pressure tshirt 210"
          />
        </div>
        <figcaption class="figure-caption">
          Photos above show C-Refund(aka Sarah) taking it easy in her studio,
          enjoying our new female:pressure T-shirt in Caribbean blue
          <b-link href="http://co-re-studio.com/" target="_blank"
            >@ core studio</b-link
          >
        </figcaption>
      </div>
      <div class="20y mt-5">
        <div class="d-flex mw-100 mt-5">
          <div class="out-stock">
            <img
              class="flex-img"
              src="../../assets/merch/fp_t-anthrazite.png"
              alt=" woman wearing female pressure tshirt 210"
            />
            <figcaption class="figure-caption">
              female:pressure 21y t-shirt
            </figcaption>
          </div>
          <div class="out-stock">
            <img
              class="flex-img mr-3"
              src="../../assets/merch/t-shirt-20-1.png"
              alt=" woman wearing female pressure tshirt 210"
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
import Header from '@/components/header/Header';
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      showModal: false,
    };
  },

  components: {
    Header,
  },
  methods: {
    ...mapMutations(['SET_PAGE']),
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


// MODAL
.modal-mask
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

.modal-wrapper
  vertical-align: middle;

.modal-container
  width: 50%;
  margin: 20% auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #00FB9C;

.close-button
  color: #00FB9C;
  background: none;
  border: none;
  font-size: 20px

// TABLE
table
  border: 1px solid #00FB9C;
  text-align: center;

th
  border-bottom: 2px solid #00FB9C;
  background-color: #dcfaff

td, th
  border-right: 2px solid #00FB9C;
</style>
