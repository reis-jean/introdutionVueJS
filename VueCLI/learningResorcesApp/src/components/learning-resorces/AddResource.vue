<template>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
        <template #default>
            <p>ioas dkasmd asdpjas daosldk asdlmas kfanf a</p>
            <p>ioas dkasmd asdpjas daosldk asdlmas kfanf apksdf sdmfsdfsposdf  </p>
        </template>
        <template #actions>
            <base-button @click="inputIsInvalid">Okay</base-button>
        </template>
</base-dialog>

    <base-card>
        <form @submit.prevent="submitData"  >
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" ref="titleInput">
            </div>
            <div class="form-control">
                <label for="title">Description</label>
                <textarea id="description" name="description" rows="3" ref="descriptionInput">

                </textarea>
            </div>
             <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url" ref="linkInput">
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>

        </form>
    </base-card>
</template>

<script>
export default {
    inject: ['addResource'],
    data() {
        return {
        inputIsInvalid: false
        }
    },
    methods:{
        submitData(){
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDescription = this.$refs.descriptionInput.value;
            const enteredUrl = this.$refs.linkInput.value;

            if(enteredTitle.trim() === '' || enteredDescription.trim() || enteredUrl.trim() === '' ){
                this.inputIsInvalid = true;
                return
            }

            this.addResource(enteredTitle,  enteredDescription, enteredUrl)

        }, 
        confirmError() {
            this.inputIsInvalid = false;
        },
        emits: ['close'],
        methods: {
            close() {
                this.$el.close();
            }
        }
    }
}
</script>



<style scoped>

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>


