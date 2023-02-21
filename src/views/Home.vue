<template>
  <v-container>
    <!-- first row -->
    <v-row>
      <v-col v-for="n in 3" :key="n" cols="4">
        <v-card>
          <v-card-text>
            <div>Word of the Day</div>
            <p class="text-h4 text--primary">el·ee·mos·y·nar·y</p>
            <p>adjective</p>
            <div class="text--primary">
              relating to or dependent on charity; charitable.<br />
              "an eleemosynary educational institution."
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn variant="text" color="teal-accent-4"> Learn More </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- second row -->
    <v-row>
      <v-col v-for="n in 2" :key="n" cols="4">
        <v-card>
          <v-card-text>
            <div>Word of the Day</div>
            <p class="text-h4 text--primary">el·ee·mos·y·nar·y</p>
            <p>adjective</p>
            <div class="text--primary">
              relating to or dependent on charity; charitable.<br />
              "an eleemosynary educational institution."
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn variant="text" color="teal-accent-4"> Learn More </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>
