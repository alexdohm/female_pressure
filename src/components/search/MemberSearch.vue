<template>
  <div>
    <vue-typeahead-bootstrap
        :data="users"
        v-model="memberSearch"
        showAllResults
        :serializer="item => (item.alias1 || item.alias2 || item.alias3)"
        placeholder="search name"
        @hit="selectMember($event)"
        class="member-search"
    >
      <template slot="append">
          <b-icon-search variant="dark" font-scale="1.3" class="my-auto mx-2"></b-icon-search>
      </template>
      <template slot="suggestion" slot-scope="{ data }">
        <b-row class="m-0 w-100">
          <b-col class="p-0 m-0">
            <div>{{ data.alias1 }}</div>
            <div class="text-muted f-text-smaller"> {{ data.alias2 }}<span v-if="data.alias3">, {{ data.alias3 }}</span></div>
          </b-col>
          <b-col class="my-auto f-text-small text-right p-0 mx-0">
            {{data.city_name}}, <br /> {{data.country_name}}
          </b-col>
        </b-row>
      </template>
    </vue-typeahead-bootstrap>
  </div>
</template>


<script>
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap'
import Vue from "vue"
import _ from "underscore"
import { mapMutations } from 'vuex'
export default {
  components: {
    VueTypeaheadBootstrap
  },
  data() {
    return {
      memberSearch: '',
      users: []
    }
  },
  watch: {
    memberSearch: _.debounce(function (addr) {
      this.getMembers(addr)
    }, 500)
  },
  methods: {
    ...mapMutations({
      setMember: 'search/SET_SELECTED_MEMBER'
    }),
    async getMembers(query) {
      if (query !== '') {
        await Vue.prototype.$http.get(`${Vue.prototype.$hostname}/search/member-search/${query}`)
            .then(response => {
              response.data ? this.users = response.data : this.users = []
              if (!response.data && this.memberSearch.length > 0) {
                this.users = [{
                  alias1: "No results found"
                }]
              }
            }, error => {
              console.log(error)
            })
      }
    },
    selectMember(member) {
      this.setMember(member.email)
      //Sample code for you ines to use in your component on mount
      // await Vue.prototype.$http.get(`${Vue.prototype.$hostname}/search/member/${member.member_id}`)
      //     .then(response => {
      //       console.log("getting member", response.data)
      //     }, error => {
      //       console.log(error)
      //     })
      this.$router.push('/user/' + member.alias1)
    }
  }
}
</script>

<style lang="sass" scoped>
.member-search
  border-radius: 0
  border: 3px solid $searchBorder
  &:hover
    border: 3px solid #00e3b9!important
  /deep/ .form-control
    border: none!important
    color: black
    &:focus
      outline: none !important
      box-shadow: none !important
    &::placeholder
      color: black


</style>