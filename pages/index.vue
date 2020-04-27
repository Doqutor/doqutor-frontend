<template>
  <div>
    <section id="hero">
      <v-row no-gutters>
        <v-img
          :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          position="top center"
          src="https://www.publicdomainpictures.net/pictures/210000/nahled/doctor-1490804731WQI.jpg">
          <v-theme-provider dark>
            <v-container class="fill-height">
              <v-row
                class="black--text mx-auto"
                justify="center">
                <v-col
                  class="black--text text-center"
                  cols="12"
                  tag="h1">
                  <span
                    class="font-weight-light"
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']">
                    INTRODUCING
                  </span>

                  <br>

                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                    class="font-weight-black">
                    DOQUTOR
                  </span>

                  <br>

                  <v-btn
                    class="mt-6"
                    color="blue"
                    nuxt
                    :href="login"
                    large>
                    <span class="font-weight-bold">
                      Log me in!
                    </span>
                  </v-btn>
                </v-col>
              </v-row>

              <!-- <v-row
                class="black--text mx-auto"
                justify="center">
                <v-btn
                  color="blue"
                  nuxt
                  :href="login"
                  large>
                  <span class="font-weight-bold">
                    Log me in!
                  </span>
                </v-btn>
              </v-row> -->

              <v-row
                align="end"
                class="black--text mx-auto"
                justify="center">
                <v-btn
                  @click="$vuetify.goTo('#about-us')"
                  class="align-end"
                  color="black"
                  fab
                  outlined>
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>

    <section id="about-us">
      <div class="py-12" />

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">ABOUT US</h2>

        <v-responsive
          class="mx-auto mb-8"
          width="56">
          <v-divider class="mb-1" />
          <v-divider />
        </v-responsive>

        <v-responsive
          class="mx-auto title font-weight-light mb-8"
          max-width="720">
          We help doctors do doctor things like treating patients and stuff.
        </v-responsive>

        <v-avatar
          class="elevation-12 mb-12"
          size="128">
          <v-img src="https://jooinn.com/images/specialist-doctor.jpg" />
        </v-avatar>
      </v-container>

      <div class="py-12" />
    </section>

    <section
      id="features"
      class="grey darken-3">
      <div class="py-12" />

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">FEATURES</h2>

        <v-responsive
          class="mx-auto mb-12"
          width="56">
          <v-divider class="mb-1" />
          <v-divider />
        </v-responsive>

        <v-row>
          <v-col
            v-for="({ icon, title, text }, i) in features"
            :key="i"
            cols="12"
            md="4">
            <v-card
              class="py-12 px-4"
              color="grey lighten-3"
              flat>
              <v-theme-provider dark>
                <div>
                  <v-avatar
                    color="primary"
                    size="88">
                    <v-icon
                      large
                      v-text="icon"
                    />
                  </v-avatar>
                </div>
              </v-theme-provider>

              <v-card-title
                class="black--text justify-center font-weight-black text-uppercase"
                v-text="title"
              />

              <v-card-text
                class="black--text subtitle-1"
                v-text="text"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12" />
    </section>

    <section id="stats">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
        src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      >
        <v-container class="fill-height">
          <v-row class="mx-auto">
            <v-col
              v-for="[value, title] of stats"
              :key="title"
              cols="12"
              md="3"
            >
              <div class="text-center">
                <div
                  class="display-3 font-weight-black mb-4"
                  v-text="value"
                />

                <div
                  class="title font-weight-regular text-uppercase"
                  v-text="title"
                />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>

    <section id="blog">
      <div class="py-12" />

      <v-container>
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Blog</h2>

        <v-responsive
          class="mx-auto mb-12"
          width="56"
        >
          <v-divider class="mb-1" />

          <v-divider />
        </v-responsive>

        <v-row>
          <v-col
            v-for="({ src, text, title }, i) in articles"
            :key="i"
            cols="12"
            md="4"
          >
            <v-img
              :src="src"
              class="mb-4"
              height="275"
              max-width="100%"
            />

            <h3
              class="font-weight-black mb-4 text-uppercase"
              v-text="title"
            />

            <div
              class="title font-weight-light mb-5"
              v-text="text"
            />
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12" />
    </section>

    <v-footer
      class="justify-center"
      color="#292929"
      height="100">
      <div class="title font-weight-light grey--text text--lighten-1 text-center">
        &copy; {{ (new Date()).getFullYear() }} — Doqutor, LLC — Made with 💜 by Team #1
      </div>
    </v-footer>
  </div>
</template>

<script>
export default {
  layout: 'external',
  data () {
    return {
      articles: [
        {
          src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'How Bleach Injections Cure COVID-19',
          text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
        },
        {
          src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Hydroxychloroquine vs Remdesivir: Which one should you give to your mother with a mild cough?',
          text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
        },
        {
          src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
          title: 'Why we should have opened the economy duuring Easter',
          text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
        },
      ],
      features: [
        {
          icon: 'mdi-account-group-outline',
          title: 'Vibrant Community',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
        },
        {
          icon: 'mdi-update',
          title: 'Realtime Updates',
          text: 'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.',
        },
        {
          icon: 'mdi-shield-outline',
          title: 'Really Good Incident Response',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
        },
      ],
      stats: [
        ['Lots', 'Of Doctors'],
        ['Tons', 'Of Patients'],
        ['Heaps', 'Of Media Coverage'],
        ['Excessive', 'Security'],
      ],
    }
  },

  computed: {
    login() {
      const subdom = process.env.LOGIN_URL
      const fullUri = `https://login-doqutore-infrastructure-${subdom}.auth.ap-southeast-2.amazoncognito.com/login?client_id=1l26brptvhg0hhricpnno0h45d&response_type=token&scope=doqutore/application&redirect_uri=https://${subdom}.aws9447.me/login`
      return fullUri
    }
  },
}
</script>
