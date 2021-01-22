<template>
  <v-layout align-center>
    <v-flex>
      <v-card class="mx-auto" color="transparent" elevation="0">
        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <article>
                  <nuxt-content :document="article" />
                  <p>
                    Article last updated: {{ formatDate(article.updatedAt) }}
                  </p>
                </article>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: "default",
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.id).fetch();
    return { article };
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.article.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.article.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.article.description,
        },
      ],
    };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
