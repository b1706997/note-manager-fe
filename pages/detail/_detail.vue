<template>
  <v-container>
    <v-row>
      <v-icon @click="$nuxt.$router.push('/')">mdi-arrow-left</v-icon>

      <v-spacer></v-spacer>

      <v-icon>mdi-delete</v-icon>
    </v-row>

    <v-row style="justify-content: center">
      <input
        @keyup="(e) => changeEvent(e)"
        id="content"
        style="width: 80%; height: 80%"
        v-model="note.content"
      />
    </v-row>

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
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DetailPage",
  data: () => {
    return {
      noteId: $nuxt.$route.path.split('/')[2],
      snackbar: {
        text: "Note content saved",
        render: false,
        timeout: 2000,
      },
    };
  },
  methods: {
    fakeInput(e) {
      console.log(e)
    },
    changeEvent(e) {
      e.preventDefault();

      const newContent = e.target.value;

      clearTimeout(this.inputTimer);

      const timer = setTimeout(() => {
        this.save(newContent);
      }, 500);

      this.inputTimer = timer;
    },
    save(newContent) {
      this.snackbar.render = true;
      const newNote = this.getNote(this.noteId)
      newNote.content = newContent;
      // this.$store.dispatch('save', {payload:newNote} )  
    },
  },
  computed: {
    ...mapGetters({
      getNotes: "getNotes",
      getNote:"getNote"
    }),
    // note() {
      
    //     return this.getNote(this.noteId)
    // },
    note : {
      get() {
        return this.$store.state.notes.find(e=>e.id==this.noteId)
      },
      set(value) {
        console.log(value)
        return this.$store.dispatch("save", value)
      }
    }
  },
};
</script>

<style>
</style>