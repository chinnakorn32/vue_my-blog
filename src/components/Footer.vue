<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }"
            >🍻 บันทึกไอเดียได้ทุกที่</router-link
          >
          <ul>
            <li>
              <a href="#"
                ><img src="../assets/Icons/youtube.png" class="svg-icon"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="../assets/Icons/instagram.png" class="svg-icon"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="../assets/Icons/linkedin.png" class="svg-icon"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="../assets/Icons/twitter.png" class="svg-icon"
              /></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'Home' }"
              >หน้าแรก</router-link
            >
            <router-link class="link" :to="{ name: 'Blogs' }"
              >บทความ</router-link
            >
            <router-link v-if="user" class="link" :to="{ name: 'CreatePost' }"
              >สร้างโพสต์</router-link
            >
            <router-link v-if="!user" class="link" :to="{ name: 'Login' }"
              >เข้าสู่ระบบ</router-link
            >
          </ul>
        </div>
      </div>
      <div class="right">
        <p>
          ผู้จัดทำหวังว่าจะเป็นประโยชน์กับผู้อ่าน หรือนักเรียน นักศึกษา
          ที่กำลังหาข้อมูลเรื่องนี้อยู่ หากมีข้อแนะนำหรือข้อผิดพลาดประการใด
          ผู้จัดทำขอน้อมรับไว้และขออภัยมา ณ ที่นี้ด้วย
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-vue",
  components: {},
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: #303030;
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }

    > div {
      display: flex;
      flex: 1;
    }

    .left {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }

      .header {
        text-align: center;
        font-size: 24px;
        color: #fff;
        margin-bottom: 16px;
        text-decoration: none;
        font-weight: 600;
        @media (min-width: 800px) {
          text-align: initial;
        }
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }

      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;
        @media (min-width: 800px) {
          gap: 0;
        }
      }

      .col-1 {
        flex-direction: column;

        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }
        ul {
          margin-top: auto;

          li {
            display: flex;
            align-items: center;
            .svg-icon {
              width: 24px;
              height: auto;
              color: #fff;
            }
          }
        }
      }

      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          @media (min-width: 800px) {
            flex-direction: column;
          }
          .link {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }

    .right {
      gap: 32px;
      color: #fff;
      align-items: center;
      flex-direction: column;
      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
      }
    }

    p {
      margin-top: auto;
    }
  }
}
</style>
