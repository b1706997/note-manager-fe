<template>
    <v-container @click="onClickNote(note.id)" class='container' style="width:100%;background-color:#569ce3;border-radius:10px;margin-top:10px;color:white">
        <v-row>
            <v-spacer></v-spacer>
            <v-icon style="margin-right:3%">mdi-delete</v-icon>
        </v-row>

        <v-row style="overflow: hidden;text-overflow: ellipsis;justify-content:center;top:50%;text-align:center;padding-bottom:2%">
            {{note.content}}
        </v-row>

        <v-row>
            <v-spacer></v-spacer>
            {{note.createdDate}}
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
    name:"Note",
    props:["note"],
    methods: {
    onClickNote:(id) => {
            $nuxt.$router.push({path:"/detail/"+id})
        }
    }
}
</script>