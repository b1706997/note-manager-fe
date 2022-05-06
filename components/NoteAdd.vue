<template>
  <v-dialog v-model="selfRender" width="400px">
    <v-container style="background-color: #569ce3; height: 100%">
      <v-row ref="abc">
        <textarea
          ref="abc"
          style="
            overflow-wrap: break-word;
            color: white;
            height: 100px;
            width: 100%;
          "
          id="noteContent"
          v-model="content"
          placeholder="Type something..."
        />
      </v-row>
      <v-row style="margin-top: 100%">
        <v-icon @click="close">mdi-close</v-icon>
        <v-spacer></v-spacer>
        <v-icon @click="createNote" v-show="content != ''">mdi-check</v-icon>
      </v-row>
    </v-container>
  </v-dialog>
</template>

<script>
export default {
  name: "NoteAdd",
  props: ["render"],
  methods: {
    close() {
      this.$emit("close");
    },
    createNote() {
      this.$store.dispatch("create", this.content).then((e) => {
        this.$emit("onCreateNote");
        this.content = "";
        this.$emit("close");
      });
    },
  },
  data: () => {
    return {
      content: "",
    };
  },
  computed: {
    selfRender: {
      get() {
        return this.render;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
};
</script>

<style>
textarea:focus {
  outline: none;
}
</style>