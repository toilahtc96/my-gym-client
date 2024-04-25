<template>
  <!--  Start Schedule -->
  <section class="class-schedule" id="class-schedule">
    <div class="container">
      <div class="main-title text-center">
        <span class="separator">
          <i class="flaticon-chakra"></i>
        </span>
        <h2>Class Schedule</h2>
      </div>
      <div class="container" id="people">
        <div class="timetable text-center d-none d-lg-block">
          <table>
            <tr class="table-head">
              <td></td>
              <td>Monday</td>
              <td>Tuesday</td>
              <td>Wednesday</td>
              <td>Thursday</td>
              <td>Friday</td>
              <td>Saturday</td>
              <td>Sunday</td>
            </tr>
            <tr>
              <td class="time">09.00</td>
              <td class="body-balance all animated fadeIn">
                <h4>Body Balance</h4>
                <span>9:00 - 10:00</span>
                <h5>Elina Ekman</h5>
              </td>
              <td></td>
              <td class="hatha-yoga all animated fadeIn">
                <h4>Hatha Yoga</h4>
                <span>9:00 - 10:00</span>
                <h5>Jack Hakman</h5>
              </td>
              <td class="children-yoga all animated fadeIn">
                <h4>Children Yoga</h4>
                <span>9:00 - 10:00</span>
                <h5>Razan Smith</h5>
              </td>
              <td class="pilates all animated fadeIn">
                <h4>Pilates Yoga</h4>
                <span>9:00 - 10:00</span>
                <h5>Peter Doe</h5>
              </td>
              <td></td>
              <td class="yoga-dance all animated fadeIn">
                <h4>Yoga Dance</h4>
                <span>9:00 - 10:00</span>
                <h5>Lily Garner</h5>
              </td>
            </tr>
            <tr>
              <td class="time">10.00</td>
              <td></td>
              <td class="body-balance all animated fadeIn">
                <h4>Body Balance</h4>
                <span>10:00 - 11:00</span>
                <h5>Elina Ekman</h5>
              </td>
              <td class="yoga-dance all animated fadeIn">
                <h4>Yoga Dance</h4>
                <span>10:00 - 11:00</span>
                <h5>Lily Garner</h5>
              </td>
              <td></td>
              <td class="hatha-yoga all animated fadeIn">
                <h4>Hatha Yoga</h4>
                <span>10:00 - 11:00</span>
                <h5>Jack Hakman</h5>
              </td>
              <td class="pilates all animated fadeIn">
                <h4>Pilates Yoga</h4>
                <span>10:00 - 11:00</span>
                <h5>Peter Doe</h5>
              </td>
              <td></td>
            </tr>
            <tr>
              <td class="time">11.00</td>
              <td class="yoga-dance all animated fadeIn">
                <h4>Yoga Dance</h4>
                <span>11:00 - 12:00</span>
                <h5>Lily Garner</h5>
              </td>
              <td class="hatha-yoga all animated fadeIn">
                <h4>Hatha Yoga</h4>
                <span>11:00 - 12:00</span>
                <h5>Jack Hakman</h5>
              </td>
              <td></td>
              <td class="body-balance all animated fadeIn">
                <h4>Body Balance</h4>
                <span>11:00 - 12:00</span>
                <h5>Elina Ekman</h5>
              </td>
              <td></td>
              <td class="hatha-yoga all animated fadeIn">
                <h4>Hatha Yoga</h4>
                <span>11:00 - 12:00</span>
                <h5>Jack Hakman</h5>
              </td>
              <td class="yoga-dance all animated fadeIn">
                <h4>Yoga Dance</h4>
                <span>11:00 - 12:00</span>
                <h5>Lily Garner</h5>
              </td>
            </tr>
            <tr>
              <td class="time">12.00</td>
              <td></td>
              <td class="body-balance all animated fadeIn">
                <h4>Body Balance</h4>
                <span>12:00 - 13:00</span>
                <h5>Elina Ekman</h5>
              </td>
              <td class="children-yoga all animated fadeIn">
                <h4>Children Yoga</h4>
                <span>12:00 - 13:00</span>
                <h5>Razan Smith</h5>
              </td>
              <td></td>
              <td class="pilates all animated fadeIn">
                <h4>Pilates Yoga</h4>
                <span>12:00 - 13:00</span>
                <h5>Peter Doe</h5>
              </td>
              <td></td>
              <td class="body-balance all animated fadeIn">
                <h4>Body Balance</h4>
                <span>12:00 - 13:00</span>
                <h5>Elina Ekman</h5>
              </td>
            </tr>
          </table>
        </div>
        <div class="timetable-small d-block d-lg-none">
          <div class="group-list">
            <h3>Monday</h3>
            <ul class="list-unstyled">
              <li class="body-balance all">
                <h4>Body Balance</h4>
                <span>09:00 - 10:00</span>
              </li>
              <li class="yoga-dance all">
                <h4>Yoga Dance</h4>
                <span>11:00 - 12:00</span>
              </li>
            </ul>
          </div>
          <div class="group-list">
            <h3>Tuesday</h3>
            <ul class="list-unstyled">
              <li class="body-balance all">
                <h4>Body Balance</h4>
                <span>10:00 - 11:00</span>
              </li>
              <li class="hatha-yoga all">
                <h4>Hatha Yoga</h4>
                <span>11:00 - 12:00</span>
              </li>
              <li class="body-balance all">
                <h4>Body Balance</h4>
                <span>12:00 - 13:00</span>
              </li>
            </ul>
          </div>
          <div class="group-list">
            <h3>Wednesday</h3>
            <ul class="list-unstyled">
              <li class="hatha-yoga all">
                <h4>Hatha Yoga</h4>
                <span>09:00 - 10:00</span>
              </li>
              <li class="yoga-dance all">
                <h4>Yoga Dance</h4>
                <span>10:00 - 11:00</span>
              </li>
              <li class="children-yoga all">
                <h4>Children Yoga</h4>
                <span>12:00 - 13:00</span>
              </li>
            </ul>
          </div>
          <div class="group-list">
            <h3>Thursday</h3>
            <ul class="list-unstyled">
              <li class="children-yoga all">
                <h4>Children Yoga</h4>
                <span>09:00 - 10:00</span>
              </li>
              <li class="body-balance all">
                <h4>Body Balance</h4>
                <span>11:00 - 12:00</span>
              </li>
            </ul>
          </div>
          <div class="group-list">
            <h3>Friday</h3>
            <ul class="list-unstyled">
              <li class="pilates all">
                <h4>Pilates Yoga</h4>
                <span>09:00 - 10:00</span>
              </li>
              <li class="hatha-yoga all">
                <h4>Hatha Yoga</h4>
                <span>10:00 - 11:00</span>
              </li>
              <li class="pilates all">
                <h4>Pilates Yoga</h4>
                <span>12:00 - 13:00</span>
              </li>
            </ul>
          </div>
          <div class="group-list">
            <h3>Saturday</h3>
            <ul class="list-unstyled">
              <li class="pilates all">
                <h4>Pilates Yoga</h4>
                <span>10:00 - 11:00</span>
              </li>
              <li class="hatha-yoga all">
                <h4>Hatha Yoga</h4>
                <span>11:00 - 12:00</span>
              </li>
            </ul>
          </div>
          <div class="group-list">
            <h3>Sunday</h3>
            <ul class="list-unstyled">
              <li class="yoga-dance all">
                <h4>Yoga Dance</h4>
                <span>09:00 - 10:00</span>
              </li>
              <li class="yoga-dance all">
                <h4>Yoga Dance</h4>
                <span>11:00 - 12:00</span>
              </li>
              <li class="body-balance all">
                <h4>Body Balance</h4>
                <span>12:00 - 13:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Schedule-->
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped></style>