<template>
  <div>
    <Header>
      links
    </Header>
    <b-container class="mt-5 f-body-container">
      <div class="accordion" role="tablist">
        <b-card
          no-body
          class="mb-1 main-card"
          v-for="(category, idx) in linksData"
          :key="category.categoryTitle"
        >
          <b-card-header
            class="accordion-container mb-3 accordion-button h5 py-1 px-2"
            role="tab"
            v-b-toggle="'accordion-' + idx"
          >
            <b class="category-text">{{ category.categoryTitle }}</b>
          </b-card-header>

          <!-- LINKS -->
          <b-collapse
            :id="'accordion-' + idx"
            accordion="my-accordion"
            role="tabpanel"
            class="mb-3"
            :visible="categoryMenu === category.shortCategoryTitle && true"
          >
            <a
              v-for="link in category.links"
              :href="link.url"
              :key="link.title"
              class="
                link-container
                d-flex
                justify-content-between
                align-items-end
                link
              "
              target="_blank"
            >
              {{ link.title }}

              <p class="m-0">{{ link.language }}</p>
            </a>
          </b-collapse>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import { links } from "@/assets/data/links";
import Header from "@/components/header/Header";

export default {
  data() {
    return {
      linksData: links,
      categoryMenu: "",
    };
  },
  watch: {
    $route(newVal) {
      this.categoryMenu = newVal.params.category;
    },
  },
  created() {
    this.categoryMenu = this.$route.params.category;
  },
  components: {
    Header,
  }
};
</script>

<style lang="sass" scoped>
.accordion-container
  border: 2px solid #99fcc6
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
  border:
    background: none
    border-radius: 0px

.link-container
  border-bottom: 1px solid rgba(153, 252, 198, 0.5)
  padding: 3px
  &:hover
    background-color: #99fcc6
    .language-mobile
      color: white

.category-text
  cursor: pointer

.language-mobile
  color: #99fcc6
  display: inline

.link
  color: black

.link:hover
  color: black
  text-decoration: none
</style>
