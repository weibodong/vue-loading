<template>
  <div>
    <!-- <transition name="fade"> -->
    <div class="info">
      <img class="portrait" :src="'../'+$store.state.userInfo.portrait" width="200" height="200" />
      <div class="user-info">
        <h1 class="nick" v-text="'你好 ' + $store.state.userInfo.nick"></h1>
        <a href="javascript:;" class="logout" @click="logout"> [退出]</a>
      </div>
      <loading v-if="isLogouting" margin-top="-7%"></loading>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
import loading from "../common/loading.vue";
export default {
    components: { loading },
    data() {
        return {
            isLogouting: false
        };
    },
    methods: {
        //注销
        logout() {
            this.isLogouting = true;
            //删除cookie并跳到登录页
            this.delCookie("loging");
            //演示
            setTimeout(() => {
                this.isLogouting = false;
                this.$router.push("/login");
            }, 3000);
        }
    }
};
</script>

<style scoped>
.info {
    background: #fff;
    width: 100%;
    height: 600px;
    color: #2c3e50;
    text-align: center;
}
.portrait {
    width: 200px;
    height: 200px;
    overflow: hidden;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    background-color: #cccccc;
    margin: 0 auto 15px;
    border: 2px solid #2c3e50;
    display: block;
}
.user-info {
    margin: 38px 0 0 0;
    vertical-align: top;
}
.user-info,
.w-star,
.w-diamond,
.nick,
.level {
    display: inline-block;
}
.nick {
    margin-right: 10px;
}
.cut {
    padding: 0 10px;
    color: #e9e9e9;
    font-size: 15px;
}
.logout {
    color: #2c3e50;
    display: block;
    margin-top: 20px;
}
</style>

