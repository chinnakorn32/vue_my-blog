<template>
  <div class="reset-password">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <Loading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          กลับไปที่
          <router-link class="router-link" :to="{ name: 'Login' }"
            >เข้าสู่ระบบ</router-link
          >
        </p>
        <h2>รีเซ็ตรหัสผ่าน</h2>
        <p>ลืมรหัสผ่านหรือไม่? ป้อนอีเมลของคุณเพื่อรีเซ็ต</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <img :src="Email" class="icon" />
          </div>
        </div>
        <button @click.prevent="resetPassword">รีเซ็ตรหัสผ่าน</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Email from "../assets/Icons/email.svg";
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "ForgotPassword",
  components: {
    Modal,
    Loading,
  },
  data() {
    return {
      Email,
      email: "",
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  },
  methods: {
    resetPassword() {
      this.loading = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage =
            "หากมีบัญชีของคุณอยู่ คุณจะได้รับอีเมล";
          this.loading = false;
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
        });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
