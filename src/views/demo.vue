
<template>
  <div>
    <headerDemo />
    <framework />
    <mainDemo />
    <timeTable />
    <innerPages />
    <demoFeatures />
    <footerDemo />

  </div>
</template>




<script>
import headerDemo from "../demo/components/header";
import framework from "../demo/components/framework";
import mainDemo from "../demo/components/main-demos"
import timeTable from "../demo/components/timetable";
import innerPages from "../demo/components/inner-pages"
import demoFeatures from "../demo/components/demo-features";
import footerDemo from "../demo/components/footer";
export default {
  components: {
    headerDemo,
    framework,
    mainDemo,
    timeTable,
    innerPages,
    demoFeatures,
    footerDemo
  },
};
</script>


<style>
.header {
  position: relative;
  background: linear-gradient(-45deg, #cf11da 0%, #3482fd 100%);
  height: 100vh;
  overflow: hidden;
}

.header .flaticon-lotus:before {
  margin-left: 0;
  position: absolute;
  top: -11%;
  left: 32%;
  color: #fff;
  opacity: 0.03;
  font-size: 32em;
  height: 300px;
  z-index: 0;
}

.header .header-content {
  position: relative;
      /* display: inherit; */
  /* padding-top: 150px;
  padding-bottom: 150px; */
}

.header h1 {
  position: relative;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
}

.header h1 .flaticon-chakra:before {
  margin-left: 0;
  font-size: 50px;
  background: #fff;
  -webkit-background-clip: text;
  color: transparent;
  margin-right: 8px;
  position: relative;
  top: 8px;
}

.header h2 {
  color: #f7f5f5;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 25px;
}

.header p {
  color: #f7f5f5;
  font-size: 16px;
  margin-bottom: 30px;
  line-height: 1.7;
}

.header .image {
  margin-top: -59px;
  margin-left: -100px;
}

.main-demos {
  background-color: #fff;
  padding-top: 100px;
  padding-bottom: 70px;
}

.main-demos .inner {
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 45px;
}

.main-demos .inner:hover {
  transform: translateY(-6px);
}

.main-demos .inner img {
    width: 100%;
    padding: 10px;
}

.main-demos .inner h5 {
  border-top: 1px solid #f3f3f3;
  /* padding: 30px 0; */
  color: #888;
  text-transform: capitalize;
  letter-spacing: 0.3px;
  font-weight: 500;
  font-size: 16px;
  padding: 1.25rem;
}

.timetable {
  background: #f7f6f6;
  padding-top: 100px;
  padding-bottom: 200px;
}

.timetable .timetable-image {
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
  position: relative;
}

.timetable .timetable-image img.two {
  position: absolute;
  top: 113px;
  left: 210px;
  width: 300px;
  height: 350px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
}

.timetable .timetable-info {
  margin-left: 25px;
}

.timetable h4 {
  color: #323232;
  font-size: 32px;
  font-weight: 700;
  margin-top: 35px;
  margin-bottom: 25px;
}

.timetable p {
  color: #888;
  font-size: 16px;
  margin-bottom: 30px;
  line-height: 1.7;
}

.inner-pages {
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;
}

.inner-pages h2 {
  color: #323232;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0.3px;
  margin-bottom: 50px;
  text-align: center;
}

.inner-pages .inner-box {
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
}

.inner-pages .inner-box h5 {
  border: 1px solid #f7f6f6;
  padding: 20px 0;
  color: #888;
  text-transform: capitalize;
  letter-spacing: 0.3px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}

.views {
    padding: 10px 0;
    border-top: 1px solid #f3f3f3;
    padding: 1.25rem;
}


.demo-features {
  padding-top: 100px;
  padding-bottom: 70px;
  background: #f7f6f6;
}

.demo-features .item {
  background: #fff;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
}

.demo-features .item h3 {
  font-size: 16px;
  font-weight: 500;
  color: #888;
  margin-top: 12px;
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .timetable .timetable-image img.two {
    left: 165px;
  }
  .timetable h4 {
    margin-top: 0;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .timetable {
    padding-bottom: 100px;
  }
  .timetable .timetable-image img.two {
    top: 150px;
    left: 348px;
  }
  .timetable .timetable-info {
    margin-top: 100px;
    margin-left: 0;
  }
}

@media (max-width: 767.98px) {
  .timetable {
    padding-bottom: 100px;
  }
  .timetable .timetable-image img.two {
    top: 105px;
    left: 237px;
  }
  .timetable .timetable-info {
    margin-top: 200px;
    margin-left: 0;
  }
}

@media (max-width: 575.98px) {
  .header .header-content {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .header h1 {
    font-size: 27px;
  }
  .header h1 .flaticon-chakra:before {
    font-size: 42px;
    top: 6px;
  }
  .header h2 {
    font-size: 29px;
  }
  .header p {
    font-size: 15px;
  }
  .timetable .timetable-image img.two {
    top: 63px;
    left: 88px;
    height: 300px;
  }
  .timetable .timetable-info {
    margin-top: 240px;
    margin-left: 0;
  }
}
</style>
