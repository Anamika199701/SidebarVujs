<template>
    <div id="my-app">
           <NavHaeder/><br/>
        <div class="row" style="margin-left:25px; padding-top:10px;">
            <div class="col-md-6" >
                <h5 style="text-align:left;">Two Way Binding</h5><hr/>
                <b-form inline @submit="OnSubmit">         
                    <label class="mr-sm-2" for="inline-form-custom-select-pref">Enter Your Name</label>
                        <b-form-input id="input1" name="myname" aria-placeholder="Enter Name" v-model="firstname" required></b-form-input>
                        <b-button type="submit" variant="primary">Submit</b-button>
                </b-form><br/>
                <b-card  header="Two Way Data Result">
                    {{firstname}}
                </b-card>
            </div>
    
            <div class="col-md-6" >
                <h5  style="text-align:left;">One Way Binding</h5><hr/>
                 <b-form inline @submit="OnSubmit1">         
                    <label class="mr-sm-2" for="inline-form-custom-select-pref">Enter Your Name</label>
                        <b-form-input id="input1" name="myname" aria-placeholder="Enter Name" v-bind:value="lastname" required></b-form-input>
                        <b-button type="submit" variant="primary">Submit</b-button>
                </b-form><br/>
                <b-card  header="One Way Data Result">
                    {{lastname}}
                </b-card>
            </div>
        </div><br/>
        <div class="row"  style="margin-left:25px;border-top:2px solid black; padding-top:10px;">
            <div class="col-md-6">
               <h5 style="text-align:left;">Computed Properties</h5><hr/>
               <b-form inline>
                    <label class="mr-sm-2" for="inline-form-custom-select-pref">Enter Your Color</label>
                        <b-form-input id="input1" name="myname" aria-placeholder="Enter Fav Color" v-model="color" required></b-form-input>
                       
                </b-form><br/>
                <b-card header="Computed Result">
                    {{computecolor}}
                </b-card>
            </div>
            <div class="col-md-6">
                <h5 style="text-align:left;">Filters</h5><hr/>
               <b-form inline>
                    <label class="mr-sm-2" for="inline-form-custom-select-pref">Enter Your Food</label>
                        <b-form-input id="input1" name="myname" aria-placeholder="Enter Fav Color" v-model="food" required></b-form-input>
                       
                </b-form><br/>
                <b-card header="Filtered Data">
                    {{food | capitalizeFood}}
                </b-card>
            </div>
        </div><br/>
        <div class="row" style="margin-left:25px;border-top:2px solid black; padding-top:10px;">
            <div class="col-md-6">
               <h5 style="text-align:left;">Event Handling</h5>
               <b-form inline @submit="eventhandle">
                    <label class="mr-sm-2" for="inline-form-custom-select-pref">Enter Your Choice</label>
                        <b-form-input id="input1" name="myname" aria-placeholder="Enter Anything" v-model="choice" required></b-form-input>
                        <b-button type="submit" variant="primary">Submit</b-button>
                </b-form><br/>
                
            </div>
            <div class="col-md-6">
               <h5 style="text-align:left;">Events Props</h5>
               <b-button class="btn btn-primary btn-md"
                            v-on:click="showmodal"
                            variant="primary"
                            size="sm"
                >Click Me</b-button>
                <b-modal ref="trialmodal" size="lg" hide-footer>
                    <mymodal  @finished="finished"></mymodal>
                </b-modal>
            </div>
        </div>
        
    </div>
</template>
<script>
import NavHaeder from '@/components/NavHaeder.vue'
import mymodal from '@/components/mymodal.vue'
export default {
    name:'binding',
    
    data(){
        return {
            firstname: 'Satya',
            lastname:'Singh',
            color:'',
            food:'',
            choice:''
        }
    },
    methods:{
      eventhandle(){
          alert("You Have entered "+this.choice);
      },
      OnSubmit(){
          alert("Your Name is" +this.firstname);
      },
      OnSubmit1(){
          alert("Your Last Name is " +this.lastname);
          return this.lastname;
      },
      showmodal(){
         this.$refs["trialmodal"].show();
      },
      finished(){
            this.$refs["trialmodal"].hide();
      }
    },
    computed:{
        computecolor(){
          console.log("color being call");
          return this.color.toUpperCase();
      }
    },
    components:{
          NavHaeder,
          mymodal
    },
    filters:{
        capitalizeFood(value){
            return value.toUpperCase();
        }
    }
}
</script>
<style scoped>

</style>