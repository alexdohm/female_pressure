<template>
  <div v-if="filterData !== []" class="mx-3 mx-md-0 mt-4 mt-md-0">
    <MemberSearch/>
    <treeselect
        v-model="selectedFilters.location"
        :multiple="true"
        :options="Object.values(filterData['cities'])"
        placeholder="location"
        :showCount="true"
        class="my-3 filter"
    />
    <treeselect
        v-model="selectedFilters.profession"
        :multiple="true"
        :options="Object.values(filterData['professions'])"
        placeholder="work field"
        class="my-3 filter"
    />
    <treeselect
        v-model="selectedFilters.genre"
        :multiple="true"
        :options="Object.values(filterData['genres'])"
        placeholder="genre"
        class="my-3 filter"
    />
    <treeselect
        v-model="selectedFilters.other"
        :multiple="true"
        :options="otherValues"
        placeholder="other"
        class="my-3 filter"
    />
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import MemberSearch from "./MemberSearch";
// import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import '@/styles/custom/treeselect.css'
import {mapActions, mapState, mapMutations} from "vuex";

export default {
  components: {
    Treeselect,
    MemberSearch
  },
  data() {
    return {
      loggedIn: false,
      selectedFilters: {
        genre: [],
        profession: [],
        location: [],
        other: []
      },
    }
  },
  mounted() {
    this.loggedIn = this.authenticated
  },
  computed: {
    ...mapState('search', ['filterData']),
    ...mapState({
      authenticated: (state) => state.authentication.authenticated
    }),
    otherValues() {
      let other = Object.values(this.filterData['other'])
      return this.loggedIn ? other : other.filter(row => row.id !== 'liked');
    },
  },
  methods: {
    ...mapActions({
      loadMembers: 'search/filterData'
    }),
    ...mapMutations({
      SET_FILTERED_MEMBERS: 'search/SET_FILTERED_MEMBERS',
      SET_FILTER_APPLIED: 'search/SET_FILTER_APPLIED'
    })
  },
  watch: {
    selectedFilters: {
      deep: true,
      handler() {
        if (this.selectedFilters.location.length === 0 && this.selectedFilters.profession.length === 0 && this.selectedFilters.genre.length === 0 && this.selectedFilters.other.length === 0) {
          this.SET_FILTERED_MEMBERS([])
          this.SET_FILTER_APPLIED(false)
        } else {
          this.loadMembers(this.selectedFilters)
          this.SET_FILTER_APPLIED(true)
        }
      }
    }
  }
}
</script>