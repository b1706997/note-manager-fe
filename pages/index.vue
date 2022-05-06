<template>
  <div data-app>
    <v-container style="padding: 8%">
      <v-row>
        <p>Notes</p>
        <v-spacer></v-spacer>
        <v-icon @click="addNote"> mdi-plus-circle-outline </v-icon>
      </v-row>
      <v-row style="justify-content: center">
        <input @keyup="e=>handleSearch(e)" style="border: 1px solid black; width: 80%" />
      </v-row>
      <v-row>
        <note @onDeleteNote="handleDeleteNote" v-for="note in getNotes" :key="note.id" :note="note"> </note>
      </v-row>
    </v-container>
    <NoteAdd :render="render" @close="closeAddNote" @onCreateNote="handleCreateNote"></NoteAdd>

    <!-- Toast message -->
    <v-snackbar v-model="snackbar.render" :timeout="snackbar.timeout">
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar.render = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NoteAdd from "../components/NoteAdd.vue";
import Note from "../components/Note.vue";
export default {
  components: { Note },
  mounted() {
    if(window.localStorage.getItem('justDeleted')) {
      this.handleDeleteNote();
      window.localStorage.removeItem('justDeleted')
    }
  },
  methods: {
    handleDeleteNote() {
      this.snackbar.text = "Note have been deleted!"
      this.snackbar.render = true
    },
    handleCreateNote() {
      this.snackbar.text = "Note have been created successfully!"
      this.snackbar.render = true
    },
    closeAddNote() {
      this.render = false
    },
    addNote() {
      this.render = true;
    },
    handleSearch(e) {
      const searchValue = e.target.value;
      
      clearTimeout(this.searchTimer)

      const timer = setTimeout(() => {
        this.$store.dispatch("search", searchValue);
      }, 1000);

      this.searchTimer = timer;
    }
  },
  beforeCreate() {
    this.$store.dispatch('getAll')
  },
  computed: {
    ...mapGetters({
      getNotes: "getNotes",
    }),
  },
  name: "IndexPage",
  data: () => {
    return {
      snackbar: {
        text: "Note content saved",
        render: false,
        timeout: 2000,
      },
      render: false,
    };
  },
};
</script>
