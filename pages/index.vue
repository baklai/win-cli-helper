<template>
  <v-layout align-center>
    <v-flex>
      <v-card class="mx-auto" color="transparent" elevation="0">
        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col cols="12"> </v-col>
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
  data: () => ({
    show: false,
    valueInput: null,
    banner: require("@/assets/img/banner.png"),
    bannerDark: require("@/assets/img/banner-dark.png"),
  }),
  methods: {
    autoKeyboardLang: function(str) {
      const cyr = [
        "й",
        "ц",
        "у",
        "к",
        "е",
        "н",
        "г",
        "ш",
        "щ",
        "з",
        "х",
        "ъ",
        "ф",
        "ы",
        "в",
        "а",
        "п",
        "р",
        "о",
        "л",
        "д",
        "ж",
        "э",
        "я",
        "ч",
        "с",
        "м",
        "и",
        "т",
        "ь",
        "б",
        "ю",
        "ї",
        "і",
        "є",
      ];
      const en = [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "\\[",
        "\\]",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        ";",
        "'",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        "\\.",
        "\\]",
        "s",
        "'",
      ];
      for (let i = 0; i < cyr.length; i++) {
        const reg = new RegExp(cyr[i], "mig");
        str = str.replace(reg, function(a) {
          return a == a.toLowerCase() ? en[i] : en[i].toUpperCase();
        });
      }
      return str;
    },

    convert: function() {
      if (this.valueInput) {
        let doubles = this.valueInput
          .split("")
          .map((letter) => {
            return this.autoKeyboardLang(letter);
          })
          .join("");

        try {
          this.$clipboard(doubles);
          this.valueInput = null;
          this.$toasted.show("Текст скопирован в буфер обмена", {
            position: "top-center",
            icon: "information",
            type: "success",
            duration: 3000,
            action: {
              icon: "close",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              },
            },
          });
        } catch (err) {
          console.error("Could not copy text: ", err);
        }
      } else {
        this.$toasted.show("Введите текст для перевода!", {
          position: "top-center",
          icon: "information",
          type: "error",
          duration: 3000,
          action: {
            icon: "close",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            },
          },
        });
      }
    },

    exit: function() {
      this.$store.commit("appSignout");
    },
  },
};
</script>

<style>
.centered-input input {
  text-align: center !important;
}
</style>
