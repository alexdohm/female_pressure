<template>
  <div v-if="showModal" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container d-flex flex-column">
        <button @click="showModal = false" class="close-button align-self-end">
          X
        </button>
        <h5>Order proccess:</h5>
        <p>
          We are only abble to proccess orders with advance payment and we will
          need a proof of payment!
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
</template>

<script>
export default {
  props: {
    showModal: Boolean,
  },
};
</script>
