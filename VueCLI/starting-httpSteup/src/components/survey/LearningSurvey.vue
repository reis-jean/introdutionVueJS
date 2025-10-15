<template>
  <section>
    <base-card>
      <h2>How was your learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <p v-if="isLoading" class="loading">Saving data...</p>
        <p v-if="error" class="error">{{ error }}</p>
        <p v-if="success" class="success">Survey submitted successfully!</p>
        <div>
          <base-button :disabled="isLoading">Submit</base-button>
        </div>
      </form>
    </base-card>

    
  </section>
</template>

<script>
import { db } from '@/firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import UserExperiences from './UserExperiences.vue';

export default {
  components: {
    UserExperiences,
  },
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
      isLoading: false,
      error: null,
      success: false,
    };
  },
  emits: ['survey-submit'],
  methods: {
    async submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      this.error = null;
      this.success = false;
      this.isLoading = true;

      const surveyData = {
        userName: this.enteredName,
        rating: this.chosenRating,
        timestamp: new Date().toISOString(),
      };

      try {
        await addDoc(collection(db, 'surveys'), surveyData);
        
        this.success = true;
        this.$emit('survey-submit', surveyData);

        this.enteredName = '';
        this.chosenRating = null;
        
        await this.$refs.experiences.loadExperiences();
        
        setTimeout(() => {
          this.success = false;
        }, 3000);
      } catch (err) {
        console.error('Error saving survey:', err);
        this.error = 'Failed to save survey. Please try again.';
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}

.loading {
  color: #3d008d;
  font-weight: bold;
  margin: 1rem 0;
}

.error {
  color: #d60000;
  font-weight: bold;
  margin: 1rem 0;
}

.success {
  color: #00d68f;
  font-weight: bold;
  margin: 1rem 0;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>