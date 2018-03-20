<template>
    <div>
        <div style="margin-top:150px;">
            <h3>我是登录页面</h3>
            <p class="tishi" v-show="tishi">{{tishitext}}</p>
            <input type="text" placeholder="请输入用户名" :class="'textIpn' + (userName==''?' textIpn-red':'')" v-model="userName">
            <input type="password" placeholder="请输入密码" :class="'textIpn' + (password==''?' textIpn-red':'')" v-model="password">
            <a class="login" href="javascript:;" @click="login">登&nbsp;录</a>
        </div>
        <Loading v-if="isLogouting" marginTop="-4%"></Loading>
    </div>
</template>

<script>
import Loading from "../common/loading.vue";
export default {
    components: { Loading },
    data() {
        return {
            isLogouting: false,
            tishi: false,
            userName: "",
            password: "",
            tishitext: ""
        };
    },
    mounted() {
        // this.login()
    },
    methods: {
        login() {
            let self = this;
            if (self.userName == "" || self.password == "") {
                self.tishi = true;
                self.tishitext = "请输入你的账号或密码";
            } else {
                self.tishi = false;
                let params = {
                    userName: self.userName,
                    password: self.password
                };
                console.log(params);
                let url = "example.com/login.php";
                self.isLogouting = true;
                //真实发送请求
                // this.$http.post(url,{params:params}).then(res=>{
                //     conseole.log(res)
                //     if(res.data.code==1){
                //         let expireDays = 1000*60*60*24*15
                //         this.setCookie('session',res.data.session,expireDays)
                //         this.$router.push({path:'/home'})
                //     }
                // },err=>{
                //     console.log(err)
                // })

                //演示代码
                setTimeout(() => {
                    //登录状态1天后过期
                    self.isLogouting = false
                    let expireDays = 1000 * 60 * 60 * 24 * 1
                    self.setCookie("loging", "lalalala", expireDays)
                    self.$router.push({ path: "/home" })
                    self.userName = ''
                    self.password = ''
                }, 3000);
            }
        }
    }
};
</script>
<style scoped>
.tishi {
    font-size: 14px;
    color: red;
}
.textIpn {
    display: block;
    width: 250px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    margin: 0 auto;
    outline: none;
    margin-bottom: 10px;
    padding: 0 10px;
}
.textIpn-red {
    border: 1px solid red;
}
.login {
    display: block;
    width: 272px;
    height: 40px;
    line-height: 40px;
    background: #41b883;
    color: #fff;
    margin: 0 auto;
}
</style>
