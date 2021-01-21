<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app absolute temporary>
      <v-list>
        <v-list-item two-line class="px-2">
          <v-list-item-avatar tile>
            <img src="@/static/icon.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Converter CyrToLat</v-list-item-title>
            <v-list-item-subtitle>from {{ author }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item
          v-for="item in links"
          :key="item.title"
          :href="item.href"
          target="_blank"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item link @click="info()">
          <v-list-item-icon>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>О сервисе</v-list-item-title>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn tile block>
            <v-icon left>mdi-exit-to-app</v-icon> Выход
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app fixed outlined flat clipped-left>
      <v-container class="grey lighten-5">
        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <v-row>
          <v-col cols="12" md="8">
            <v-card class="pa-2" outlined tile>
              .col-12 .col-md-8
            </v-card>
          </v-col>
          <v-col cols="6" md="4">
            <v-card class="pa-2" outlined tile>
              .col-6 .col-md-4
            </v-card>
          </v-col>
        </v-row>

        <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="6" md="4">
            <v-card class="pa-2" outlined tile>
              .col-6 .col-md-4
            </v-card>
          </v-col>
        </v-row>

        <!-- Columns are always 50% wide, on mobile and desktop -->
        <v-row>
          <v-col v-for="n in 2" :key="n" cols="6">
            <v-card class="pa-2" outlined tile>
              .col-6
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- <v-container fluid>
        <v-row justify="center" align="center">
          <v-toolbar-items>
            <v-col cols="2">
              <v-toolbar-title class="d-inline">
                <v-avatar left tile size="32">
                  <img src="@/static/icon.png" alt="logo" />
                </v-avatar>
                <p class="d-inline">Win</p>
                <p class="d-inline">CLI</p>
                <p class="d-inline">Helper</p>
              </v-toolbar-title>
            </v-col>
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-col cols="8">
              <v-text-field
                dense
                flat
                hide-details
                solo-inverted
              ></v-text-field>
            </v-col>
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-col cols="1">
              <v-btn icon @click="toggle_dark_mode">
                <v-icon>mdi-theme-light-dark</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="1">
              <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
              ></v-app-bar-nav-icon>
            </v-col>
          </v-toolbar-items>
        </v-row>
      </v-container> -->

      <!-- <v-container fill-height>
        <v-row justify="center">
          <v-col cols="12" sm="2" class="hidden-sm-and-down">
            <v-toolbar-title class="d-inline">
              <v-responsive>
                <v-avatar left tile size="32">
                  <img src="@/static/icon.png" alt="logo" />
                </v-avatar>
                <p class="d-inline">Win</p>
                <p class="d-inline">CLI</p>
                <p class="d-inline">Helper</p>
              </v-responsive>
            </v-toolbar-title>
          </v-col>

          <v-col cols="12" sm="5">
            <v-responsive class="d-none d-sm-flex">
              <v-text-field
                dense
                flat
                hide-details
                solo-inverted
              ></v-text-field>
            </v-responsive>
          </v-col>

          <v-col cols="12" sm="2">
            <v-responsive class="d-none d-sm-flex">
              <v-btn icon @click="toggle_dark_mode">
                <v-icon>mdi-theme-light-dark</v-icon>
              </v-btn>
              <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
              ></v-app-bar-nav-icon>
            </v-responsive>
          </v-col>
        </v-row>
      </v-container> -->

      <!-- <v-toolbar-title class="d-inline">
        <v-responsive>
          <v-avatar left tile size="32">
            <img src="@/static/icon.png" alt="logo" />
          </v-avatar>
          <p class="d-inline">Win</p>
          <p class="d-inline">CLI</p>
          <p class="d-inline">Helper</p>
        </v-responsive>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-responsive class="d-none d-sm-flex">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggle_dark_mode">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
    </v-app-bar>

    <v-main>
      <v-container fill-height>
        <v-row justify="center">
          <v-col cols="12" sm="2" class="hidden-sm-and-down">
            <v-sheet min-height="100vh">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
              quod.
            </v-sheet>
          </v-col>
          <v-divider vertical class="hidden-sm-and-down"></v-divider>
          <v-col cols="12" sm="5">
            <v-responsive class="d-flex d-sm-none">
              <v-text-field
                dense
                flat
                hide-details
                rounded
                solo-inverted
              ></v-text-field>
            </v-responsive>

            <v-sheet min-height="100vh">
              <nuxt />
            </v-sheet>
          </v-col>
          <v-divider vertical class="hidden-sm-and-down"></v-divider>
          <v-col cols="12" sm="2" class="hidden-sm-and-down">
            <v-sheet min-height="100vh">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ipsa
              porro doloribus tempore optio dignissimos similique placeat, iusto
              beatae facere!
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer tile padless class="mx-auto" color="transparent" max-width="500">
      <v-card flat tile class="text-center" color="transparent">
        <v-card-text>
          <v-btn
            v-for="item in links"
            :key="item.icon"
            :href="item.href"
            class="mx-4"
            target="_blank"
            icon
          >
            <v-icon size="24px">
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="caption pt-0">
          Данный онлайн сервис разработан специально для перевода строки текста
          из русской раскладки в английскую.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          Copyright &copy; {{ new Date().getFullYear() }} {{ copyright }}
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: ["Dashboard", "Messages", "Profile", "Updates"],
  }),
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme === "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.$vuetify.theme.dark = true;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
  computed: {
    appName() {
      return this.$store.state.appName;
    },
    links() {
      return this.$store.state.links;
    },
    copyright() {
      return this.$store.state.copyright;
    },
    author() {
      return this.$store.state.author;
    },
  },
  methods: {
    info: function() {
      this.$router.push(`/about`);
    },
    toggle_dark_mode: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
};
</script>
