<template>
  <!-- Start Blog -->
  <section class="blog" id="blog">
    <div class="container">
      <div class="main-title text-center">
        <span class="separator">
          <i class="flaticon-chakra"></i>
        </span>
        <h2>Our Latest Articles</h2>
      </div>
      <div class="row">
        <!-- New Item -->
        <div class="col-lg-6">
          <div class="post">
            <!-- Post Image -->
            <div class="post-img">
              <img src="https://via.placeholder.com/800x560" class="img-fluid" alt="" />
            </div>
            <!-- Post Content -->
            <div class="post-content">
              <div class="post-title">
                <router-link  to="/blog-single" target="_blank">
                  <h4>Relax Your Body</h4>
                </router-link>
              </div>
              <div class="post-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut...
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
        <div class="col-lg-6">
          <div class="post">
            <!-- Post Image -->
            <div class="post-img">
              <img src="https://via.placeholder.com/800x560" class="img-fluid" alt="" />
            </div>
            <!-- Post Content -->
            <div class="post-content">
              <div class="post-title">
                <router-link  to="/blog-single" target="_blank">
                  <h4>Yoga For Children</h4>
                </router-link>
              </div>
              <div class="post-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut...
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
      <div class="my-btn">
        <router-link to="/Blog-sidebar" target="_blank" class="main-btn"
          ><span>View All</span></router-link
        >
      </div>
    </div>
  </section>
  <!-- End Blog -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>