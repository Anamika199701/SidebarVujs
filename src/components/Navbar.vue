<template>
  <!-- ===== Top-Navigation ===== -->
  <nav class="navbar navbar-default navbar-static-top m-b-0">
    <div class="navbar-header">
      <a
        class="navbar-toggle font-20 hidden-sm hidden-md hidden-lg"
        style="color:#252424;"
        href="javascript:void(0)"
        data-toggle="collapse"
        data-target=".navbar-collapse"
      >
        <i class="fa fa-bars"></i>
      </a>
      <div class="top-left-part">
        <router-link to="/dashboard" class="logo">
          <b>
           <!-- <img src="../plugins/images/vb-logo-dark.png" style="width:50px;" alt="home">-->
          </b>
          <span>
          <!--  <img
              src="../plugins/images/vb-logo-text-dark.png"
              style="width:150px;"
              alt="homepage"
              class="dark-logo"
            >-->
          </span>
        </router-link>
      </div>
      <ul class="nav navbar-top-links navbar-left hidden-xs">
        <li>
          <a href="javascript:void(0)" class="sidebartoggler font-20 waves-effect waves-light">
            <i class="icon-arrow-left-circle"></i>
          </a>
        </li>
        <li style="font-weight:bold;">
          <a>
           <!-- <img src="../plugins/images/favicon.png" style="width:30px;" alt="home">-->
            {{sgb_board_name}}
          </a>
        </li>
        <li>
          <a>
           <!-- <img src="../plugins/images/govt-of-mah-dark.png" style="width:215px;" alt="home">-->
          </a>
        </li>
      </ul>
      <ul class="nav navbar-top-links navbar-right pull-right">
        <li class="dropdown">
        
        </li>
    
        <li>
          <a
            href="javascript:void(0);"
            class="dropdown-toggle u-dropdown text-blue"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <tr>
              <td style="line-height: 0;">
                <span
                  style="line-height: -5px;line-height: 0px;vertical-align: text-top;font-size: smaller;"
                >
                  {{company_code}}
                  <p style="line-height: 15px;text-align:center;" v-show="this.user_type_id ==2 || this.user_type_id==3 || this.user_type_id==4 || this.user_type_id==5">({{user_role_name}})</p>
                  <p style="line-height: 15px;text-align:center;" v-show="this.user_type_id ==1">({{category}})</p>
                </span>
              </td>
              <td>
                <!--<img
                  src="../plugins/images/users/user.png"
                  alt="user-img"
                  class="img-circle"
                  style="height:25px;"
                >-->
              </td>
              <td>
                <span class="badge badge-danger">
                  <i class="fa fa-angle-down"></i>
                </span>
              </td>
            </tr>

            <!-- <i class="fa fa-user"></i> -->
          </a>

          <ul class="dropdown-menu animated flipInY">
       
            <li>
              <a href="#" v-on:click="my_profile()">
                <i class="feather icon-user"></i> My Profile
              </a>
            </li> 
             <li>
              <a href="#" v-on:click="change_password()">
                <i class="feather icon-refresh"></i> Change Password
              </a>
            </li>
            <li>
              <a href="#" v-on:click="logout()">
                <i class="fa fa-power-off"></i> Logout
              </a>
            </li>
              
          
          </ul>
        </li>
       
      </ul>
    </div>
  </nav>
  <!-- ===== Top-Navigation-End ===== -->
</template>

<script>
import Vue from "vue";
//import axios from "axios";
//import VueAxios from "vue-axios";
import VueRouter from "vue-router";

//const base_url = process.env.VUE_APP_BASE_URL;

export default {
  name: "Navbar",
  data() {
    return {
      sgb_board_name: "",
      user_name: "",
      user_role_name: "",
      company_code: "",
      user_type_id: null,
      category:"",
    };
  },
  methods: {
    my_profile()
    {
       this.$router.push("/profile/my_profile");

    },
    change_password()
    {
      this.$router.push("/profile/change_password");
    },
    logout() {
      this.$session.destroy();
      localStorage.clear();
      this.$router.push("/");
    }
  },
  created() {
  
var sgb_board_id = 1;
    var user_type_id = 2;
  
    if (user_type_id == 3) {
      if (sgb_board_id < 10) {
        sgb_board_id = "0" + sgb_board_id;
      }
      this.company_code = this.user_name;
      // = "C"+sgb_board_id+user_company_id;
    } else if (user_type_id == 4) {
      if (sgb_board_id < 10) {
        sgb_board_id = "0" + sgb_board_id;
      }
      this.company_code = "A" + sgb_board_id + user_company_id;
    } else {
      this.company_code = this.user_name;
    }
    if (user_type_id == 5) {
      if (this.user_name == "sgb_admin") {
        this.sgb_board_name = "SGB ADMIN";
        this.user_role_name = "ADMIN";
      } else {
        this.sgb_board_name = "SGB DEPLOYMENT";
        this.user_role_name = "DEPLOYMENT";
      }
    } else if (user_type_id != 5) {
     // var sgb_board_id = this.$session.get("sgb_board_id");

  
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
