<template>
  <!-- start section Form Content -->
  <div class="class-form">
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
  <!-- End section Form Content -->
</template>

<script>
export default {
  name: "formComment",
};
</script>

<style lang="scss" scoped></style>