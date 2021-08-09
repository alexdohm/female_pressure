<template>
  <div>
    <Header/>
    <b-container class="mt-5 body-container">

      <div class="mb-4">
        <h3>membership & database</h3>
      </div>
      <div class="accordion" role="tablist">
        <b-card
            no-body
            class="mb-1 main-card"
            v-for="(question, idx) in faqData"
            :key="question.title1"
        >
          <b-card-header
              class="accordion-container mb-3 accordion-button h5 py-1 px-2"
              role="tab"
              v-b-toggle="'accordion-' + idx"
          >
            <b class="question-title">{{ question.title1 }}</b>
          </b-card-header>

          <!-- answers 1: membership & database -->
          <b-collapse
              :id="'accordion-' + idx"
              accordion="my-accordion"
              role="tabpanel"
              class="mb-3"
          >
            <p v-html="question.answer1" class="m-1"></p>
          </b-collapse>
        </b-card>
      </div>

      <div class="mb-4">
        <h3>mailing list</h3>
      </div>
      <div class="accordion" role="tablist">
        <b-card
            no-body
            class="mb-1 main-card"
            v-for="(question, idx) in faqData"
            :key="question.title2"
        >
          <b-card-header
              class="accordion-container mb-3 accordion-button h5 py-1 px-2"
              role="tab"
              v-b-toggle="'accordion-' + idx"
          >
            <b class="question-title">{{ question.title2 }}</b>
          </b-card-header>

          <!-- answers 2: mailing list -->
          <b-collapse
              :id="'accordion-' + idx"
              accordion="my-accordion"
              role="tabpanel"
              class="mb-3"
          >
            <p v-html="question.answer2" class="m-1"></p>
          </b-collapse>
        </b-card>
      </div>

      <div class="mb-4">
        <h3>login & public artist profile</h3>
      </div>
      <div class="accordion" role="tablist">
        <b-card
            no-body
            class="mb-1 main-card"
            v-for="(question, idx) in faqData"
            :key="question.title3"
        >
          <b-card-header
              class="accordion-container mb-3 accordion-button h5 py-1 px-2"
              role="tab"
              v-b-toggle="'accordion-' + idx"
          >
            <b class="question-title">{{ question.title3 }}</b>
          </b-card-header>

          <!-- answers 3: login & public artist profile -->
          <b-collapse
              :id="'accordion-' + idx"
              accordion="my-accordion"
              role="tabpanel"
              class="mb-3"
          >
            <p v-html="question.answer3" class="m-1"></p>
          </b-collapse>
        </b-card>
      </div>

      <div class="mb-4">
        <h3>participation in female:pressure projects</h3>
      </div>
      <div class="accordion" role="tablist">
        <b-card
            no-body
            class="mb-1 main-card"
            v-for="(question, idx) in faqData"
            :key="question.title4"
        >
          <b-card-header
              class="accordion-container mb-3 accordion-button h5 py-1 px-2"
              role="tab"
              v-b-toggle="'accordion-' + idx"
          >
            <b class="question-title">{{ question.title4 }}</b>
          </b-card-header>

          <!-- answers 4: participation in female:pressure projects -->
          <b-collapse
              :id="'accordion-' + idx"
              accordion="my-accordion"
              role="tabpanel"
              class="mb-3"
          >
            <p v-html="question.answer4" class="m-1"></p>
          </b-collapse>
        </b-card>
      </div>

      <div class="mb-4">
        <h3>female:pressure community</h3>
      </div>
      <div class="accordion" role="tablist">
        <b-card
            no-body
            class="mb-1 main-card"
            v-for="(question, idx) in faqData"
            :key="question.title5"
        >
          <b-card-header
              class="accordion-container mb-3 accordion-button h5 py-1 px-2"
              role="tab"
              v-b-toggle="'accordion-' + idx"
          >
            <b class="question-title">{{ question.title5 }}</b>
          </b-card-header>

          <!-- answers 5: female:pressure community -->
          <b-collapse
              :id="'accordion-' + idx"
              accordion="my-accordion"
              role="tabpanel"
              class="mb-3"
          >
            <p v-html="question.answer5" class="m-1"></p>
          </b-collapse>
        </b-card>
      </div>

      <div class="mb-4">
        <h3>similar projects & third party involvement</h3>
      </div>
      <div class="accordion" role="tablist">
        <b-card
            no-body
            class="mb-1 main-card"
            v-for="(question, idx) in faqData"
            :key="question.title6"
        >
          <b-card-header
              class="accordion-container mb-3 accordion-button h5 py-1 px-2"
              role="tab"
              v-b-toggle="'accordion-' + idx"
          >
            <b class="question-title">{{ question.title6 }}</b>
          </b-card-header>

          <!-- answers 6: similar projects & third party involvement -->
          <b-collapse
              :id="'accordion-' + idx"
              accordion="my-accordion"
              role="tabpanel"
              class="mb-3"
          >
            <p v-html="question.answer6" class="m-1"></p>
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
