<template>
  <div>
    <!-- Import component -->
    <app-bar-top></app-bar-top>
    <app-header-inner></app-header-inner>
    <app-page-Title
      :heading="heading"
      :sousHeading="sousHeading"
    ></app-page-Title>

    <!-- ========== Start Blog sidebar ========== -->
    <section class="blog" id="blog">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="blog-sidebar">
              <app-sidebar-search></app-sidebar-search>
              <app-categories></app-categories>
              <app-sidebar-posts></app-sidebar-posts>
              <app-sidebar-archives></app-sidebar-archives>
              <app-sidebar-tags></app-sidebar-tags>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <!-- New Item -->
              <div class="col-lg-6 col-12">
                <div class="post">
                  <!-- Post Image -->
                  <div class="post-img">
                    <img
                      src="https://via.placeholder.com/800x560"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <!-- Post Content -->
                  <div class="post-content">
                    <div class="post-title">
                      <router-link to="/blog-single" target="_blank">
                        <h4>Relax Your Body</h4>
                      </router-link>
                    </div>
                    <div class="post-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut...
                      </p>
                    </div>
                    <ul class="post-info list-unstyled">
                      <li class="pull-left">
                       <router-link
                          to="/blog-single"
                          target="_blank"
                          class="post-more"
                          >Read more<i class="fa fa-angle-double-right"></i
                        ></router-link>
                      </li>
                    </ul>
                    <div class="post-date"><span>22</span>Jan</div>
                  </div>
                </div>
              </div>
              <!-- New Item -->
              <div class="col-lg-6 col-12">
                <div class="post">
                  <!-- Post Image -->
                  <div class="post-img">
                    <img
                      src="https://via.placeholder.com/800x560"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <!-- Post Content -->
                  <div class="post-content">
                    <div class="post-title">
                      <router-link to="/blog-single" target="_blank">
                        <h4>Yoga For Children</h4>
                      </router-link>
                    </div>
                    <div class="post-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut...
                      </p>
                    </div>
                    <ul class="post-info list-unstyled">
                      <li class="pull-left">
                       <router-link
                          to="/blog-single"
                          target="_blank"
                          class="post-more"
                          >Read more<i class="fa fa-angle-double-right"></i
                        ></router-link>
                      </li>
                    </ul>
                    <div class="post-date"><span>22</span>Jan</div>
                  </div>
                </div>
              </div>
              <!-- New Item -->
              <div class="col-lg-6 col-12">
                <div class="post">
                  <!-- Post Image -->
                  <div class="post-img">
                    <img
                      src="https://via.placeholder.com/800x560"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <!-- Post Content -->
                  <div class="post-content">
                    <div class="post-title">
                      <router-link to="/blog-single" target="_blank">
                        <h4>Become a Yoga trainer</h4>
                      </router-link>
                    </div>
                    <div class="post-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut...
                      </p>
                    </div>
                    <ul class="post-info list-unstyled">
                      <li class="pull-left">
                        <router-link
                          to="/blog-single"
                          target="_blank"
                          class="post-more"
                          >Read more<i class="fa fa-angle-double-right"></i
                        ></router-link>
                      </li>
                    </ul>
                    <div class="post-date"><span>22</span>Jan</div>
                  </div>
                </div>
              </div>
              <!-- New Item -->
              <div class="col-lg-6 col-12">
                <div class="post">
                  <!-- Post Image -->
                  <div class="post-img">
                    <img
                      src="https://via.placeholder.com/800x560"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <!-- Post Content -->
                  <div class="post-content">
                    <div class="post-title">
                      <router-link to="/blog-single" target="_blank">
                        <h4>How to Become a Morning Person</h4>
                      </router-link>
                    </div>
                    <div class="post-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut...
                      </p>
                    </div>
                    <ul class="post-info list-unstyled">
                      <li class="pull-left">
                        <router-link
                          to="/blog-single"
                          target="_blank"
                          class="post-more"
                          >Read more<i class="fa fa-angle-double-right"></i
                        ></router-link>
                      </li>
                    </ul>
                    <div class="post-date"><span>22</span>Jan</div>
                  </div>
                </div>
              </div>
              <!-- New Item -->
              <div class="col-lg-6 col-12">
                <div class="post">
                  <!-- Post Image -->
                  <div class="post-img">
                    <img
                      src="https://via.placeholder.com/800x560"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <!-- Post Content -->
                  <div class="post-content">
                    <div class="post-title">
                      <router-link to="/blog-single" target="_blank">
                        <h4>How to Change Your Daily Routine</h4>
                      </router-link>
                    </div>
                    <div class="post-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut...
                      </p>
                    </div>
                    <ul class="post-info list-unstyled">
                      <li class="pull-left">
                        <router-link
                          to="/blog-single"
                          target="_blank"
                          class="post-more"
                          >Read more<i class="fa fa-angle-double-right"></i
                        ></router-link>
                      </li>
                    </ul>
                    <div class="post-date"><span>22</span>Jan</div>
                  </div>
                </div>
              </div>
              <!-- New Item -->
              <div class="col-lg-6 col-12">
                <div class="post">
                  <!-- Post Image -->
                  <div class="post-img">
                    <img
                      src="https://via.placeholder.com/800x560"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <!-- Post Content -->
                  <div class="post-content">
                    <div class="post-title">
                      <router-link to="/blog-single" target="_blank">
                        <h4>Yoga poses for non-flexible people</h4>
                      </router-link>
                    </div>
                    <div class="post-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut...
                      </p>
                    </div>
                    <ul class="post-info list-unstyled">
                      <li class="pull-left">
                        <router-link
                          to="/blog-single"
                          target="_blank"
                          class="post-more"
                          >Read more<i class="fa fa-angle-double-right"></i
                        ></router-link>
                      </li>
                    </ul>
                    <div class="post-date"><span>22</span>Jan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Blog sidebar -->

    <!-- Import components NewsLetter -->
    <app-newsLetter :class="'area'"></app-newsLetter>
    <app-footer> </app-footer>
  </div>
</template>

<script>
import UpperBar from "../../components/upperBar.vue";
import headerInner from "../../components/headerInner";
import pageTitle from "../../components/widget/pageTitle.vue";
import sidebarSearch from "../../components/widget/sidebarSearch.vue";
import categories from "../../components/widget/categories.vue";
import sidebarPosts from "../../components/widget/sidebarPosts.vue";
import sidebarArchives from "../../components/widget/sidebarArchives.vue";
import sidebarTags from "../../components/widget/sidebarTags.vue";
import newsLetter from "../../components/newsletter.vue";
import footer from "../../components/footer.vue";
export default {
  data: function () {
    return {
      heading: "Blog Sidebar Left",
      sousHeading: "Blog",
    };
  },
  components: {
    "app-bar-top": UpperBar,
    "app-header-inner": headerInner,
    "app-page-Title": pageTitle,
    "app-sidebar-search": sidebarSearch,
    "app-categories": categories,
    "app-sidebar-posts": sidebarPosts,
    "app-sidebar-archives": sidebarArchives,
    "app-sidebar-tags": sidebarTags,
    "app-newsLetter": newsLetter,
    "app-footer": footer,
  },
};
</script>

<style lang="scss" scoped></style>