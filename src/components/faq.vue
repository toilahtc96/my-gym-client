<template>
  <!-- Start FAQ  -->
  <div class="faq">
    <div class="container">
      <div class="main-title text-center">
        <span class="separator">
          <i class="flaticon-chakra"></i>
        </span>
        <h2>FAQ</h2>
      </div>
      <div class="row">
        <div class="col-12">
          <div id="accordion" class="accordion" role="tablist">
            <!------------ item ------------>
            <b-card no-body>
              <b-card-header header-tag="header" role="tab">
                <h5>
                  <b-button
                    block
                    v-b-toggle.accordion-1
                    variant="info"
                    class="btn-link"
                  >
                    Why We Are Best Yoga Studio?
                  </b-button>
                </h5>
              </b-card-header>
              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed eiusm tmpor incididunt ut labore et dolore magna aliqua.
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip.
                  </b-card-text>
                  <b-card-text
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed eiusm tmpor incididunt ut labore et dolore magna aliqua.
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <!------------ item ------------>
            <b-card no-body>
              <b-card-header header-tag="header" role="tab">
                <h5>
                  <b-button
                    block
                    v-b-toggle.accordion-2
                    variant="info"
                    class="btn-link"
                    >What’s kind of clothes I should wear while doing Yoga?
                  </b-button>
                </h5>
              </b-card-header>
              <b-collapse
                id="accordion-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed eiusm tmpor incididunt ut labore et dolore magna aliqua.
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <!------------ item ------------>
            <b-card no-body>
              <b-card-header header-tag="header" role="tab">
                <h5>
                  <b-button
                    block
                    v-b-toggle.accordion-3
                    variant="info"
                    class="btn-link"
                    >How do I sign up for my programs?</b-button
                  >
                </h5>
              </b-card-header>
              <b-collapse
                id="accordion-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed eiusm tmpor incididunt ut labore et dolore magna aliqua.
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <!------------ item ------------>
            <b-card no-body>
              <b-card-header header-tag="header" role="tab">
                <h5>
                  <b-button
                    block
                    v-b-toggle.accordion-4
                    variant="info"
                    class="btn-link"
                    >What will I learn in my Intension Classes?</b-button
                  >
                </h5>
              </b-card-header>
              <b-collapse
                id="accordion-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed eiusm tmpor incididunt ut labore et dolore magna aliqua.
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <!------------ item ------------>
            <b-card no-body>
              <b-card-header header-tag="header" role="tab">
                <h5>
                  <b-button
                    block
                    v-b-toggle.accordion-5
                    variant="info"
                    class="btn-link"
                    >What will I learn in my Extension Classes?
                  </b-button>
                </h5>
              </b-card-header>
              <b-collapse
                id="accordion-5"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed eiusm tmpor incididunt ut labore et dolore magna aliqua.
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End FAQ  -->
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped></style>