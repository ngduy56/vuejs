<template>
  <div>
    <ul class="pagination">
      <li @click="prePage(pageNum)" class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">{{ pageNum }}</a>
      </li>
      <li @click="nextPage(pageNum)" class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      pageNum: "todo/pageNum",
      totalPageNum: "todo/totalPageNum",
    }),
  },
  methods: {
    ...mapActions({
      changePageNum: "todo/changePage",
    }),
    prePage(page) {
      let currentPage = page - 1;
      if (currentPage >= 1) {
        this.changePageNum(currentPage);
      }
    },
    nextPage(page) {
      let currentPage = page + 1;
      if(currentPage <= this.totalPageNum){
        this.changePageNum(currentPage);
      }
    },
  },
};
</script>

<style></style>
