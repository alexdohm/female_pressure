<template>
  <div>
    <Header/>
    <b-container class="mt-5 f-body-container">

      <div v-for="(topic, index) in faqData"
           :key="'topic' + index"
           >
        <h3>{{ topic.header }}</h3>
        <div class="accordion" role="tablist">
          <b-card
              no-body
              class="mb-1 main-card"
              v-for="(question, index2) in topic.questions"
              :key="'question' + index + index2"
          >
            <b-card-header
                class="accordion-container mb-3 accordion-button h5 py-1 px-2"
                role="tab"
                v-b-toggle="'accordion-' + index + index2"
            >
              <b class="question-title">{{ question.title }}</b>
            </b-card-header>

            <b-collapse
                :id="'accordion-' + index + index2"
                accordion="my-accordion"
                role="tabpanel"
                class="mb-3"
            >
              <p v-html="question.answer" class="m-1"></p>
            </b-collapse>
          </b-card>
        </div>
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
  border-radius: 0
</style>
