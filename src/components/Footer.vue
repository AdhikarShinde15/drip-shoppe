<template>
  <div class="footer">
    <div class="contact-email">
      <div class="services">
        <div>CONTACT</div>
        <div>TERMS OF SERVICES</div>
        <div>SHIPPING AND RETURNS</div>
      </div>
      <div id="email">
        <input
          id="email-input"
          type="email"
          placeholder="Give an email, get the newsletter."
        />
      </div>
    </div>
    <div class="policy-accounts">
      <img id="policy" src="../assets/policy.svg" />
      <div id="accounts">
        <img src="../assets/in.svg" />
        <img src="../assets/facebook.svg" />
        <img src="../assets/insta.svg" />
        <img src="../assets/twitter.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style scoped>
.services {
  display: flex;
  column-gap: 50px;
  color: #707070;
}
.contact-email {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.policy-accounts {
  margin-top: 57px;
  display: flex;
  justify-content: space-between;
}
#accounts {
  display: flex;
  column-gap: 20px;
}
#email {
  display: flex;
  position: relative;
}
#email::after {
  content: "";
  background-image: url("../assets/arrow.svg");
  display: inline-block;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  right: 0;
  width: 25px;
  height: 9px;
  transform: translateY(-50%);
}
#email-input {
  padding: 13px 0px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid;
  width: 20rem;
}
.footer {
  margin-top: 2rem;
  border-top: 2px solid #d8d8d8;
  margin-bottom: 4rem;
}
</style>
