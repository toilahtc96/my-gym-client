<template>
  <!--  Start Contact -->
  <section class="contact" id="contact">
    <div class="container">
      <i class="flaticon-lotus"></i>
      <div class="row">
        <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
          <form class="contact-form" action="mail.php" method="post">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                required
                value=""
                onkeyup="this.setAttribute('value', this.value);"
              />
              <label for="name">Name</label>
              <span class="input-border"></span>
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                required
                value=""
                onkeyup="this.setAttribute('value', this.value);"
              />
              <label for="email">Email</label>
              <span class="input-border"></span>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="subject"
                name="subject"
                required
                value=""
                onkeyup="this.setAttribute('value', this.value);"
              />
              <label for="subject">Subject</label>
              <span class="input-border"></span>
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                id="message"
                name="message"
                required
                data-value=""
                onkeyup="this.setAttribute('data-value', this.value);"
              ></textarea>
              <label for="message">Your Message</label>
              <span class="input-border"></span>
            </div>
            <!-- Button Send Message  -->
            <button class="contact-btn main-btn" type="submit" name="send">
              <span>Send Message</span>
            </button>
            <!-- Form Message  -->
            <div class="form-message text-center"><span></span></div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact -->
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped></style>