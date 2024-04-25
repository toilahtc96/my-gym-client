<template>
  <div>
    <!-- Import component -->
    <app-bar-top></app-bar-top>
    <app-header-inner></app-header-inner>
    <app-page-Title
      :heading="heading"
      :sousHeading="sousHeading"
    ></app-page-Title>

    <!-- Start Blog single -->
    <section class="blog" id="blog">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="blog-single">
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
                    <h4>Become a Yoga trainer</h4>
                  </div>
                  <div class="post-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt labore et dolore magna
                      aliqua. enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim.
                    </p>
                    <p>
                      Excepteur sint ocacat cupidatat non proi dent sunt in
                      culpa qui officia deserunt.mollit anim id est laborum. sed
                      ut pers piciatis unde omnis iste natus error.sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora.
                    </p>
                  </div>
                  <div class="more-details">
                    <div class="row">
                      <div class="col-md-6 col-12">
                        <div class="image">
                          <img
                            src="https://via.placeholder.com/400x400"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="col-md-6 col-12">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt labore et
                          dolore magna aliqua. enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                        <p>
                          Excepteur sint ocacat cupidatat non proi dent sunt in
                          culpa qui officia deserunt.mollit anim id est laborum.
                          sed ut pers piciatis unde omnis iste natus sit
                          voluptatem accusantiu.
                        </p>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt labore et dolore magna
                      aliqua. enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <blockquote>
                      <i class="fa fa-quote-right"></i>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt labore et dolore
                        magna aliqua. enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </blockquote>
                    <p>
                      Excepteur sint ocacat cupidatat non proi dent sunt in
                      culpa qui officia deserunt.mollit anim id est laborum. sed
                      ut pers piciatis unde omnis iste natus sit voluptatem
                      accusantiu doloremque laudantium, totam rem aperiam, eaque
                      ipsa quae.
                    </p>
                  </div>
                  <div class="post-date"><span>22</span>Jan</div>
                  <div class="post-footer">
                    <div class="post-share">
                      <h5>Share The Post</h5>
                      <ul class="list-unstyled social-media">
                        <li>
                          <a href="https://themeforest.net/" target="_blank"
                            ><i class="fab fa-facebook"></i
                          ></a>
                        </li>
                        <li>
                          <a href="https://themeforest.net/" target="_blank"
                            ><i class="fab fa-twitter"></i
                          ></a>
                        </li>
                        <li>
                          <a href="https://themeforest.net/" target="_blank"
                            ><i class="fab fa-linkedin"></i
                          ></a>
                        </li>
                        <li>
                          <a href="https://themeforest.net/"
                            ><i class="fab fa-dribbble"></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                    <div class="post-tags">
                      <h5>Tags</h5>
                      <ul class="tags-list list-unstyled">
                        <router-link to="/blog-sidebar" tag="li">
                          <a>yoga</a></router-link
                        >
                        <router-link to="/blog-sidebar" tag="li">
                          <a>meditation</a>
                        </router-link>
                        <router-link to="/blog-sidebar" tag="li">
                          <a>trainer</a>
                        </router-link>
                        <router-link to="/blog-sidebar" tag="li">
                          <a>yoga center</a>
                        </router-link>
                      </ul>
                    </div>
                  </div>
                  <div class="post-comments">
                    <h3>03 Comments</h3>
                    <div class="post-comment">
                      <div class="row">
                        <div class="col-sm-2">
                          <div class="comment-image">
                            <img
                              src="https://via.placeholder.com/800x560"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="col-sm-10">
                          <h4>Nihan Doe</h4>
                          <span>22 Jan, 2020</span>
                          <button class="reply-btn">
                            <i class="fa fa-reply"></i>Reply
                          </button>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt labore et
                            dolore magna aliqua. enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment reply">
                      <div class="row">
                        <div class="col-sm-2">
                          <div class="comment-image">
                            <img
                              src="https://via.placeholder.com/800x560"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="col-sm-10">
                          <h4>Enjy Taylor</h4>
                          <span>22 Jan, 2020</span>
                          <button class="reply-btn">
                            <i class="fa fa-reply"></i>Reply
                          </button>
                          <p>
                            Excepteur sint ocacat cupidatat non proi dent sunt
                            in culpa qui officia deserunt.mollit anim id est
                            laborum. sed ut.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment">
                      <div class="row">
                        <div class="col-sm-2">
                          <div class="comment-image">
                            <img
                              src="https://via.placeholder.com/800x560"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="col-sm-10">
                          <h4>Karim Doe</h4>
                          <span>22 Jan, 2020</span>
                          <button class="reply-btn">
                            <i class="fa fa-reply"></i>Reply
                          </button>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt labore et
                            dolore magna aliqua. enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="post-form">
                    <h3>Leave a Comment</h3>
                    <form action="#" method="post">
                      <div class="row">
                        <div class="col-sm-6 col-xs-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              placeholder="Name"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 col-xs-12">
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              placeholder="Email"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-sm-12 col-xs-12">
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              name="message"
                              placeholder="Your Comment"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-sm-12 col-xs-12">
                          <button class="main-btn" type="submit" name="comment">
                            <span>Submit Comment</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="blog-sidebar">
              <app-sidebar-search></app-sidebar-search>
              <app-categories></app-categories>
              <app-sidebar-posts></app-sidebar-posts>
              <app-sidebar-archives> </app-sidebar-archives>
              <app-sidebar-tags></app-sidebar-tags>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Blog single -->

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
      heading: "Blog Single",
      sousHeading: "Blog Single",
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