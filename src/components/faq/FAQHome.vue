<template>
  <div>
    <Header/>
    <b-container class="mt-5 body-container">

      <!-- FIRST ATTEMPT TO ADD h3 SUB TITLES
      <div class="mb-4">
        <h3>membership & database</h3>
      </div>
     answers 1: membership & database
     answers 2: mailing list
     answers 3: login & public artist profile
     answers 4: participation in female:pressure projects
     answers 5: female:pressure community
     answers 6: similar projects & third party involvement
      -->

      <div class="accordion" role="tablist">
        <b-card
            no-body
            class="mb-1 main-card"
            v-for="(question, idx) in faqData"
            :key="question.title"
        >
          <b-card-header
              class="accordion-container mb-3 accordion-button h5 py-1 px-2"
              role="tab"
              v-b-toggle="'accordion-' + idx"
          >
            <b class="question-title">{{ question.title }}</b>
          </b-card-header>

          <b-collapse
              :id="'accordion-' + idx"
              accordion="my-accordion"
              role="tabpanel"
              class="mb-3"
          >
            <p v-html="question.answer" class="m-1"></p>
          </b-collapse>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import {faq} from "@/assets/data/faq";
import {mapMutations} from "vuex";
import Header from "@/components/header/Header";

export default {
  components: {
    Header,
  },
  data() {
    return {
      faqData: faq,
    };
  },
  methods: {
    ...mapMutations(["SET_PAGE"]),
  },
  mounted() {
    this.SET_PAGE("faq");
  },
};
</script>

<style lang="sass" scoped>
.accordion-container
  border: 2px solid rgba(153, 252, 198, 0.5)
  background-color: white
  padding: 5px 15px
  display: flex
  align-items: center
  cursor: pointer

  &:hover
    background-color: #99fcc6

.accordion-button
  display: flex
  align-items: center

.main-card
  border: none
  background: none
  border-radius: 0px
</style>
