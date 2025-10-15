<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences" :disabled="isLoadingList">
          Load Submitted Experiences
        </base-button>
      </div>
      
      <p v-if="isLoadingList" class="loading">Loading experiences...</p>
      <p v-if="loadError" class="error">{{ loadError }}</p>
      <p v-if="results.length === 0 && !isLoadingList && !loadError" class="info">
        No experiences submitted yet.
      </p>

      <ul v-if="results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
          :timestamp="result.timestamp"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import { db } from '@/firebase/config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoadingList: false,
      loadError: null,
    };
  },
  mounted() {
    this.loadExperiences();
  },
  methods: {
    async loadExperiences() {
      this.isLoadingList = true;
      this.loadError = null;

      try {
        const q = query(collection(db, 'surveys'), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        
        this.results = [];
        querySnapshot.forEach((doc) => {
          this.results.push({
            id: doc.id,
            name: doc.data().userName,
            rating: doc.data().rating,
            timestamp: doc.data().timestamp
          });
        });
      } catch (err) {
        console.error('Error loading surveys:', err);
        this.loadError = 'Failed to load experiences. Please try again.';
      } finally {
        this.isLoadingList = false;
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
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

.info {
  color: #666;
  font-style: italic;
  margin: 1rem 0;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>