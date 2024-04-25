<template>
  <div>
    <!-- Import component -->
    <app-bar-top></app-bar-top>
    <app-header-inner></app-header-inner>
    <app-page-Title
      :heading="heading"
      :sousHeading="sousHeading"
    ></app-page-Title>

    <!-- Start Event Details -->
    <section class="events events-left">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="event-details">
              <div class="event">
                <div class="event-img">
                  <img
                    src="https://via.placeholder.com/800x560"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="event-content">
                  <div class="event-title">
                    <h4>Yoga For Healthy Living</h4>
                  </div>
                  <ul class="event-info list-unstyled">
                    <li class="time">
                      <i class="flaticon-clock-circular-outline"></i>8:00 am
                      3:00 pm
                    </li>
                    <li><i class="flaticon-placeholder"></i>New York City</li>
                  </ul>
                  <div class="event-text">
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
                      qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                  <div class="event-date"><span>18</span> Feb</div>
                  <div class="event-comments">
                    <h3>03 Comments</h3>
                    <div class="event-comment">
                      <div class="row">
                        <div class="col-sm-2">
                          <div class="comment-image">
                            <img
                              src="https://via.placeholder.com/100x100"
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
                    <div class="event-comment reply">
                      <div class="row">
                        <div class="col-sm-2">
                          <div class="comment-image">
                            <img
                              src="https://via.placeholder.com/100x100"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="col-sm-10">
                          <h4>Enjy Taylor</h4>
                          <span>22 Jan, 2020</span>
                          <button class="reply-btn"><i class="fa fa-reply"></i>Reply</button>
                          <p>
                            Excepteur sint ocacat cupidatat non proi dent sunt
                            in culpa qui officia deserunt.mollit anim id est
                            laborum. sed ut.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="event-comment">
                      <div class="row">
                        <div class="col-sm-2">
                          <div class="comment-image">
                            <img
                              src="https://via.placeholder.com/100x100"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="col-sm-10">
                          <h4>Karim Doe</h4>
                          <span>22 Jan, 2020</span>
                           <button class="reply-btn"><i class="fa fa-reply"></i>Reply</button>
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
                  <app-form-comment> </app-form-comment>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="event-sidebar">
              <app-sidebar-search></app-sidebar-search>
              <app-sidebar-info
                :titleWidget="titleWidget"
                :dataList1="dataList1"
                :dataList2="dataList2"
                :dataList3="dataList3"
                :dataList4="dataList4"
              >
              </app-sidebar-info>
              <app-sidebar-classes></app-sidebar-classes>
              <app-sidebar-tags></app-sidebar-tags>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Event Details -->

    <!-- Import components NewsLetter -->
    <app-newsLetter :class="'area'"></app-newsLetter>
    <app-footer> </app-footer>
  </div>
</template>

<script>
import UpperBar from "../../components/upperBar.vue";
import headerInner from "../../components/headerInner";
import pageTitle from "../../components/widget/pageTitle.vue";
import formComment from "../../components/widget/formComment.vue";
import sidebarSearch from "../../components/widget/sidebarSearch.vue";
import sidebarInfo from "../../components/widget/sidebarInfo.vue";
import sidebarClasses from "../../components/widget/sidebarClasses.vue";
import sidebarTags from "../../components/widget/sidebarTags.vue";
import newsLetter from "../../components/newsletter.vue";
import footer from "../../components/footer.vue";
export default {
  data: function () {
    return {
      titleWidget: "Event Information",
      dataList1: "8 Feb 2020",
      dataList2: "8:00 am 3:00 pm",
      dataList3: "New York City",
      dataList4: "New York City",
      heading: "Event Details",
      sousHeading: "Event Details",
    };
  },
  components: {
    "app-bar-top": UpperBar,
    "app-header-inner": headerInner,
    "app-page-Title": pageTitle,
    "app-form-comment": formComment,
    "app-sidebar-search": sidebarSearch,
    "app-sidebar-info": sidebarInfo,
    "app-sidebar-classes": sidebarClasses,
    "app-sidebar-tags": sidebarTags,
    "app-newsLetter": newsLetter,
    "app-footer": footer,
  },
};
</script>

<style lang="scss" scoped></style>