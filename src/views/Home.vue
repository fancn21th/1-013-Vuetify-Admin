<template>
  <v-container fluid>
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

    <!-- third row -->
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-text>
            <LineChart />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-card-text>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import LineChart from "@/components/LineChart";

const desserts = [
  {
    name: "Frozen Yogurt",
    calories: 159,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
  },
  {
    name: "Eclair",
    calories: 262,
  },
  {
    name: "Cupcake",
    calories: 305,
  },
  {
    name: "Gingerbread",
    calories: 356,
  },
  {
    name: "Jelly bean",
    calories: 375,
  },
  {
    name: "Lollipop",
    calories: 392,
  },
  {
    name: "Honeycomb",
    calories: 408,
  },
  {
    name: "Donut",
    calories: 452,
  },
  {
    name: "KitKat",
    calories: 518,
  },
];
</script>
