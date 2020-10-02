<template>
<div>
    <h5>Hello Learners</h5>
    <div class="form-group">
        <div class="row form-group">
            <div class="col-sm-4">Filter Name</div>
            <div class="col-sm-6">
            <input type ="text" class="form-control" id="name" v-model="formname"/>
            </div>
        </div>
    </div>
     <div class="row form-group">
            <button
              type="button"
              class="btn btn-primary save_esic_button float-right"
              v-on:click="save_filter_data"
              id="save_esic_button"
            >Submit</button>
        </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            formname:''
        }
    },
    methods:{
        save_filter_data(){
            alert("method called");
            this.ok();
        },
        ok(){
            this.$emit('finished');
        }
    }
}
</script>
<style scoped>

</style>