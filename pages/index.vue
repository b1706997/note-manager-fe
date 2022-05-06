<template>
  <v-container style="padding: 8%">
    <v-row>
      <p>Notes</p>
      <v-spacer></v-spacer>
      <v-icon> mdi-plus-circle-outline </v-icon>
    </v-row>
    <v-row style="justify-content: center">
      <input style="border: 1px solid black; width: 80%" />
    </v-row>
    <v-row>
      <note v-for="note in notes" :key="note.id" :note="note">

      </note>
    </v-row>
  </v-container>
</template>

<script>
import Note from "../components/Note.vue";
import {getNotes} from '../service/service.js'
export default {
  components: { Note },
  name: "IndexPage",
  mounted() {
    getNotes();
  },
  data: () => {
    return {
      notes: [
        {
          id: 1,
          content: "asdsadsd asdasda asdasd lorem epsum",
          createdDate: "12-12-2022 8:26:25",
        },
        {
          id: 2,
          content: "asdsadsd asdasda asdasd lorem epsum",
          createdDate: "12-12-2022 8:26:25",
        },
        {
          id: 3,
          content: "asdsadsd asdasda asdasd lorem epsum",
          createdDate: "12-12-2022 8:26:25",
        },
      ],
    };
  },
};
</script>
