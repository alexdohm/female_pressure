<template>
  <div class="modal-container d-flex flex-column" v-if="showModal">
    <button @click="handleClose" class="close-button align-self-end mb-0">
      X
    </button>
    <h5>Order proccess:</h5>
    <p class="mt-0">
      we are only able to process orders with advance payment and we will need
      proof of payment !
    </p>
    <p>
      please send the your <b>name</b>, <b>shipping address</b> ,
      <b>phone number</b> , <b>t-shirt</b>, <b>garment colour</b> and
      <b>size </b> to merch@femalepressure.net, we'll then email you our bank
      details.<br />
      once we get the proof of payment, we can confirm your order.<br />
      please make sure that 30 € + shipping is on our account without any
      deduction of transfer fee.
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
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClose() {
      this.$emit('onClose');
    },
  },
};
</script>

<style lang="sass" scoped>
// MODAL
.modal-container
  position: fixed;
  z-index: 9998;
  top: 10%;
  left: 15%;
  width: 70%;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #00FB9C;
  box-shadow: 0 2.3px 3.4px rgba(0, 0, 0, 0.106),0 18px 27px rgba(0, 0, 0, 0.50)
  @media screen and (max-width: 768px)
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;


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
