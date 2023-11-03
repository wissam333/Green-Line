<template>
  <section class="sign gradient-form" style="background-color: #eee">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
                  <div class="text-center">
                    <div class="d-flex mb-4">
                      <img
                        src="../assets/logo.png"
                        style="width: 250px; height: 100px"
                        alt="logo"
                      />
                      <div class="d-flex flex-column">
                        <!-- <img style="width: 50px; height: 50px" src="../assets/bdgOne.png" alt="" />
                        <img style="width: 50px; height: 50px" src="../assets/bdgTwo.png" alt="" /> -->
                      </div>
                    </div>

                    <h4 class="title mt-1 mb-5 pb-1">We are The Green Line Team</h4>
                  </div>

                  <form>
                    <p>Please login to your account</p>

                    <!-- Name input -->
                    <MDBInput
                      type="text"
                      label="User Name"
                      id="form1Name"
                      v-model="form1Name"
                      wrapperClass="mb-4"
                    />

                    <!-- Password input -->
                    <MDBInput
                      type="password"
                      label="Password"
                      id="form1Password"
                      v-model="form1Password"
                      wrapperClass="mb-4"
                    />

                    <!-- Submit button -->
                    <div class="text-center pt-1 mb-5 pb-1">
                      <RouterLink to="/HomeView/ProductsView">
                        <MDBBtn class="basic" block>Log in</MDBBtn>
                      </RouterLink>
                    </div>
                  </form>
                </div>
              </div>
              <div class="text-box col-lg-6 d-flex align-items-center gradient-custom-2">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">We are more than just a company</h4>
                  <p class="small mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MDBInput, MDBBtn } from 'mdb-vue-ui-kit'
import { ref } from 'vue'

const form1Name = ref('')
const form1Password = ref('')
</script>

<style lang="scss" scoped>
@import '../assets/var.scss';
.sign {
  height: 100vh;
  .title {
    color: $second;
  }
  .text-box {
    display: block;
    background-color: $basic;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    @media (max-width: 991px) {
      display: none !important;
    }
  }
}
</style>
