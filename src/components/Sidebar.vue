<template>
  <!-- ===== Left-Sidebar ===== -->
  <aside class="sidebar">
    <div class="scroll-sidebar">
      <nav class="sidebar-nav">
        <!-- SGB Employee -->
        <ul id="side-menu" >
          <li>
           <!-- <router-link to="/dashboard/" active-class="active">
              <i class="glyphicon glyphicon-home fa-fw"></i>
              <span class="hide-menu">Home</span>
            </router-link>-->
            <router-link to="/dashboard_new/" active-class="active">
              <i class="glyphicon glyphicon-home fa-fw"></i>
              <span class="hide-menu">Home</span>
            </router-link>
          </li>
           <li>
           <!-- <router-link to="/dashboard/" active-class="active">
              <i class="glyphicon glyphicon-home fa-fw"></i>
              <span class="hide-menu">Home</span>
            </router-link>-->
            <router-link to="/test/" active-class="active">
              <i class="glyphicon glyphicon-home fa-fw"></i>
              <span class="hide-menu">Test</span>
            </router-link>
          </li>
         <!-- <li :class="{'active':checkPath('/establishment/')}" >
            <a class="waves-effect" href="javascript:void(0);" aria-expanded="false">
              <i class="fa fa-bank fa-fw"></i>
              <span class="hide-menu">Establishment</span>
            </a>
            <ul
              aria-expanded="false"
              class="guard-list-menu"
              :class="{'collapse':true, 'in':checkPath('/establishment/')}"
            >
              <li
                :class="{'active':checkPath('/establishment/employee/')}"
              >
                <a href="javascript:void(0);">Guards</a>
                <ul
                  aria-expanded="false"
                  class="guard-list-menu"
                  :class="{'collapse':true, 'in':checkPath('/establishment/employee/')}"
                >
                  <li>
                    <router-link
                      to="/establishment/employee/employee_list"
                      active-class="active"
                    >Guards List</router-link>
                  </li>
                  <li>
                    <router-link
                      to="/establishment/employee/employee_employer_mapping_details"
                      active-class="active"
                    >Mapping Details</router-link>
                  </li>
                </ul>
              </li>
              <li
                :class="{'active':checkPath('/establishment/board_employees/')}"
              
              >
                <a href="javascript:void(0);">Board Employee</a>
                <ul
                  aria-expanded="false"
                  :class="{'collapse':true, 'in':checkPath('/establishment/board_employees/')}"
                >
               
                  <li>
                    <router-link
                      to="/establishment/board_employees/board_employee_list"
                      active-class="active"
                    >Employee List</router-link>
                  </li>
                  <li>
                    <router-link
                      to="/establishment/board_employees/emp_approve_leave/"
                      active-class="active"
                    >Employee Leaves</router-link>
                  </li>
                </ul>
              </li>
              <li
                :class="{'active':checkPath('/establishment/employers/')}"
               
              >
                <a href="javascript:void(0);">Principal Employers</a>
                <ul
                  aria-expanded="false"
                  :class="{'collapse':true, 'in':checkPath('/establishment/employers/')}"
                >
                  <li>
                    <router-link
                      to="/establishment/employers/new_employer"
                      active-class="active"
                    >New Employer</router-link>
                  </li>
                  <li>
                    <router-link
                      to="/establishment/employers/employer_list"
                      active-class="active"
                    >Employer List</router-link>
                  </li>
                  <li>
                    <router-link
                      to="/establishment/employers/company_all_complaints"
                      active-class="active"
                    >Complaints</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>-->
<!-- This for me -->
        </ul>
      </nav>
    </div>
  </aside>
  <!-- ===== Left-Sidebar-End ===== -->
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      user_name: "",
      activeLink: null,
      role: "",
      user_type_id: "",
      module_map_arr: [],
      menu_map_arr: []
    };
  },
  methods: {
    goto(index, indexPath) {
      if (index.charAt(0) === "/") {
        this.$router.push(index);
        this.$emit("push-page", { page: index });
      }
    },
    setLink(path) {
      this.activeLink = path;
    },
    checkPath(path) {
      return this.activeLink.indexOf(path) !== -1;
    }
  },
  created() {
    this.setLink(this.$router.currentRoute.path);
  //  this.$router.afterEach((to, from) => {
   //   this.setLink(this.$router.currentRoute.path);
      //console.log('afterEach', to, from)
  //  });
    //console.log('this.$router.currentRoute.path', this.$router.currentRoute.path)
  },
  mounted() {
    this.user_type_id = 2;
    //this.role = this.$session.get("role");

    var user_type_id =2;

    var role = this.role;
    //this.module_map_arr = this.$session.get("user_role_module_accessmap");

  //  this.menu_map_arr = this.$session.get("user_role_menu_accessmap");

   // if (this.user_type_id == 5) {
   //   this.user_name = this.$session.get("user_name");
   // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
