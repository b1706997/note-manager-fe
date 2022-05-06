<template>
  <v-container
    @click="(e) => onClickNote(e)"
    id="container"
    class="container"
    style="
      width: 100%;
      background-color: #569ce3;
      border-radius: 10px;
      margin-top: 10px;
      color: white;
    "
  >
    <v-row>
      <v-spacer></v-spacer>
      <v-icon id='deleteBtn' style="margin-right: 3%" @click="deleteNote">mdi-delete</v-icon>
    </v-row>

    <v-row
      style="
        overflow: hidden;
        text-overflow: ellipsis;
        justify-content: center;
        top: 50%;
        text-align: center;
        padding-bottom: 2%;
      "
    >
      {{ note.contents }}
    </v-row>

    <v-row>
      <v-spacer></v-spacer>
      {{ note.creationDate }}
    </v-row>
  </v-container>
</template>

<style scoped>
.container :hover {
  cursor: pointer;
}
</style>

<script>
export default {
  name: "Note",
  props: ["note"],
  methods: {
    onClickNote (e) {
        if(e.srcElement.id == 'deleteBtn')
            return
        $nuxt.$router.push({ path: "/detail/" + this.note.id });
    },
    deleteNote() {
      if (confirm("You sure wanna delete this note ?")) {
        this.$store.dispatch("delete", this.note.id);
        this.$emit('onDeleteNote')
      }
    },
  },
  computed: {
      createdDate() {
          return this.note.creationDate.split('.')[0]
      }
  }
};
</script>