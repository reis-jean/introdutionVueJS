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

    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences" :disabled="isLoadingList">
          Load Submitted Experiences
        </base-button>
      </div>
      
      <p v-if="isLoadingList" class="loading">Loading experiences...</p>
      <p v-if="loadError" class="error">{{ loadError }}</p>
      <p v-if="surveys.length === 0 && !isLoadingList && !loadError" class="info">
        No experiences submitted yet.
      </p>

      <ul v-if="surveys.length > 0">
        <li v-for="survey in surveys" :key="survey.id" class="survey-item">
          <div class="survey-content">
            <h3>{{ survey.userName }}</h3>
            <p class="rating" :class="'rating-' + survey.rating">
              Rating: <strong>{{ survey.rating }}</strong>
            </p>
            <p class="timestamp" v-if="survey.timestamp">
              {{ formatDate(survey.timestamp) }}
            </p>
          </div>
        </li>
      </ul>
    </base-card>
  </section>
</template>

<script>
import { db } from '@/firebase/config';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
      isLoading: false,
      error: null,
      success: false,
      surveys: [],
      isLoadingList: false,
      loadError: null,
    };
  },
  emits: ['survey-submit'],
  mounted() {
    this.loadExperiences();
  },
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
        
        await this.loadExperiences();
        
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

    async loadExperiences() {
      this.isLoadingList = true;
      this.loadError = null;

      try {
        const q = query(collection(db, 'surveys'), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        
        this.surveys = [];
        querySnapshot.forEach((doc) => {
          this.surveys.push({
            id: doc.id,
            ...doc.data()
          });
        });
      } catch (err) {
        console.error('Error loading surveys:', err);
        this.loadError = 'Failed to load experiences. Please try again.';
      } finally {
        this.isLoadingList = false;
      }
    },

    formatDate(timestamp) {
      if (!timestamp) return '';
      const date = new Date(timestamp);
      return date.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
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

.info {
  color: #666;
  font-style: italic;
  margin: 1rem 0;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

ul {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0 0;
}

.survey-item {
  background-color: #f5f5f5;
  border-left: 4px solid #3d008d;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  transition: transform 0.2s;
}

.survey-item:hover {
  transform: translateX(5px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.survey-content h3 {
  margin: 0 0 0.5rem 0;
  color: #3d008d;
  font-size: 1.2rem;
}

.rating {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.rating strong {
  text-transform: capitalize;
}

.rating-poor {
  color: #d60000;
}

.rating-average {
  color: #ff8800;
}

.rating-great {
  color: #00d68f;
}

.timestamp {
  font-size: 0.85rem;
  color: #666;
  margin: 0.5rem 0 0 0;
}
</style>