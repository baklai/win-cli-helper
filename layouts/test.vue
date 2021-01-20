<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-toolbar-title class="d-inline">
        <v-responsive class="hidden-sm-and-down">
          <v-avatar left tile size="32">
            <img src="@/static/icon.svg" alt="logo" />
          </v-avatar>
          <p class="d-inline">Cyt</p>
          <p class="d-inline">To</p>
          <p class="d-inline">Lat</p>
        </v-responsive>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-responsive>
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <nuxt />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
  }),
};
</script>
