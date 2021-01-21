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

    <!-- <v-app-bar app fixed outlined flat clipped-left>
      <v-row>
        <v-col cols="4" class="d-flex justify-start" align-self="center">
          <v-toolbar-title>
            <v-avatar left tile size="32">
              <img src="@/static/icon.png" alt="logo" />
            </v-avatar>
            <p class="d-inline">Win</p>
            <p class="d-inline">CLI</p>
            <p class="d-inline">Helper</p>
          </v-toolbar-title>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="d-flex justify-space-around" align-self="center">
          <v-toolbar-title>
            <v-text-field
              dense
              flat
              hide-details
              rounded
              solo-inverted
              append-icon="mdi-magnify"
            ></v-text-field>
          </v-toolbar-title>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="4" class="d-flex justify-end" align-self="center">
          <v-toolbar-title>
            <v-btn icon @click="toggle_dark_mode">
              <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
          </v-toolbar-title>
        </v-col>
      </v-row>
    </v-app-bar> -->

    <v-app-bar app fixed outlined flat clipped-left clipped-right>
      <!-- <v-toolbar-title>
        <v-avatar left tile size="32">
          <img src="@/static/icon.png" alt="logo" />
        </v-avatar>
        <p class="d-inline">Win</p>
        <p class="d-inline">CLI</p>
        <p class="d-inline">Helper</p>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
      <v-text-field
        dense
        flat
        hide-details
        rounded
        solo-inverted
        append-icon="mdi-magnify"
      ></v-text-field>
      <v-btn icon @click="toggle_dark_mode">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
    </v-app-bar>

    <v-navigation-drawer app fixed right clipped extended>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>xcxcvxcvxvxvc</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>xcxcvxcvxvxvc</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>xcxcvxcvxvxvc</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>xcxcvxcvxvxvc</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>254545445</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-main app>
      <v-navigation-drawer app fixed clipped extended>
        <v-list dense>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>xcxcvxcvxvxvc</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>254545445</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-responsive fill-height class="d-flex d-sm-none">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-main>
    <v-footer app class="justify-center pl-0" inset>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading"
            >Get connected with us on social networks!</strong
          >

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
    <!-- <v-footer app outlined absolute inset fixed>
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
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: ["Dashboard", "Messages", "Profile", "Updates"],
    items: [
      {
        action: "mdi-ticket",
        items: [{ title: "List Item" }],
        title: "Attractions",
      },
      {
        action: "mdi-silverware-fork-knife",
        active: true,
        items: [
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" },
        ],
        title: "Dining",
      },
      {
        action: "mdi-school",
        items: [{ title: "List Item" }],
        title: "Education",
      },
      {
        action: "mdi-run",
        items: [{ title: "List Item" }],
        title: "Family",
      },
      {
        action: "mdi-bottle-tonic-plus",
        items: [{ title: "List Item" }],
        title: "Health",
      },
      {
        action: "mdi-content-cut",
        items: [{ title: "List Item" }],
        title: "Office",
      },
      {
        action: "mdi-tag",
        items: [{ title: "List Item" }],
        title: "Promotions",
      },
    ],
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

<style scoped>
.fixed-bar {
  position: sticky;
  top: 6em;
  z-index: 2;
}
</style>
