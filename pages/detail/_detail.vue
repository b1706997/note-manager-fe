<template>
  <v-container fluid style="background-color: #569ce3">
    <v-row>
      <v-icon @click="$nuxt.$router.push('/')">mdi-arrow-left</v-icon>

      <v-spacer></v-spacer>

      <v-icon @click="handleDelete">mdi-delete</v-icon>
    </v-row>

    <v-row style="justify-content: center">
      <textarea
        id="content"
        style="
          width: 90%;
          height: 800px;
          background-color: #569ce3;
          color: white;
        "
        v-model="dataNoteContent"
        @keyup="(e) => changeEvent(e)"
      />
    </v-row>

    <v-row>
      <p style="width: 100%; text-align: right; margin-bottom: 10%">
        {{ noteCreatedDate }}
      </p>
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
      noteId: $nuxt.$route.path.split("/")[2],
      snackbar: {
        text: "Note content saved",
        render: false,
        timeout: 2000,
      },
      dataNoteContent:""
    };
  },
  mounted() {
    this.dataNoteContent = this.getNotes.find((e) => e.id == this.noteId).contents;
  },
  methods: {
    handleDelete() {
      if (confirm("You sure wanna delete this note ?")) {
        this.$store.dispatch("delete", this.noteId);
        this.$router.back();
        window.localStorage.setItem("justDeleted",true)
        this.$emit("onDeleteNote");
      }
    },
    changeEvent(e) {
      const value = e.target.value;

      clearTimeout(this.inputTimer);

      const timer = setTimeout(() => {
        this.$store.dispatch("save", {
          id: this.noteId,
          contents: value,
          creationDate: this.noteCreatedDate,
        });
        this.snackbar.render = true;
      }, 1000);

      this.inputTimer = timer;
    },
  },
  computed: {
    ...mapGetters({
      getNotes: "getNotes",
    }),
    noteCreatedDate: {
      get() {
        const arr = [...this.getNotes];
        const b = arr.find((e) => e.id == this.noteId);
        return b.creationDate;
      },
    },
    noteContent: {
      get() {
        return this.getNotes.find((e) => e.id == this.noteId).contents;
      },
      set(value) {
        this.changeEvent(value);
      },
    },
  },
};
</script>

<style>
textarea:focus {
  outline: none;
}
textarea {
  resize: none;
}
</style>