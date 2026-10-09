<template>
  <div class="page-container">

    <v-card
      rounded="lg"
      width="90%"
      height="90%"
      class="gold-corner-card slide-in"
    >
      <v-row no-gutters class="pa-3 fill-height">

        <!-- LEFT SIDE -->
        <v-col
          cols="12"
          md="6"
          lg="6"
          class="align-center justify-center d-flex flex-column"
        >
          <p class="name">Hello, I'm Jomari</p>
          <span>{{ displayedText }}|</span>
        </v-col>

        <!-- RIGHT SIDE -->
        <v-col
          cols="12"
          md="6"
          lg="6"
          class="d-flex align-center justify-center"
        >
          <div class="profile-orbit">

            <!-- Profile picture -->
            <div class="profile-image">
              <img
                src="/img/sample_avatar.png"
                alt="Profile"
              />
            </div>

            <!-- Tech orbit -->
            <div class="orbit">
              <div class="tech-logo vue">
                <img src="/img/vuelogo.png" alt="Vue" cover />
              </div>

              <div class="tech-logo nuxt">
                <img src="/img/nuxtlogo.png" alt="Nuxt" cover />
              </div>

              <div class="tech-logo node">
                <img src="/img/nodelogo.png" alt="Node" cover />
              </div>

              <div class="tech-logo js">
                <img src="/img/javascriptlogo.png" alt="JavaScript" cover />
              </div>

              <div class="tech-logo vscode">
                <img src="/img/vscode.png" alt="VS Code" cover />
              </div>

              <div class="tech-logo git">
                <img src="/img/gitlogo.png" alt="Git" cover />
              </div>

            </div>

          </div>
        </v-col>

      </v-row>
    </v-card>

  </div>
</template>
<script setup>
const words = [
  'JavaScript,TypeScript,HTML,CSS',
  'Vue.js,Nuxt.js',
  'React.js,Next.js',
  'Node.js,Express.js',
  'Git,GitHub,Github Desktop',
  'MySQL,PostgreSQL',
  'VS Code,Postman',
  'AWS Services',
  'S3,EC2,Lambda,CloudWatch',
]

const displayedText = ref('')
let wordIndex = 0
let charIndex = 0
let deleting = false
let timer

function typeEffect() {
  const currentWord = words[wordIndex]

  if (deleting) {
    displayedText.value = currentWord.substring(0, charIndex - 1)
    charIndex--
  } else {
    displayedText.value = currentWord.substring(0, charIndex + 1)
    charIndex++
  }

  let delay = deleting ? 50 : 100

  if (!deleting && charIndex === currentWord.length) {
    deleting = true
    delay = 1500
  } else if (deleting && charIndex === 0) {
    deleting = false
    wordIndex = (wordIndex + 1) % words.length
    delay = 400
  }

  timer = setTimeout(typeEffect, delay)
}

onMounted(() => {
  typeEffect()
})

onUnmounted(() => {
  clearTimeout(timer)
})


</script>
<style scoped>
.page-container {
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* =========================
   CARD
========================= */

.gold-corner-card {
  position: relative;
  overflow: visible;

  background: transparent !important;
  box-shadow: none !important;
}

/* Top-right */
.gold-corner-card::before {
  content: "";
  position: absolute;

  top: -3px;
  right: -3px;

  width: 100px;
  height: 100px;

  border-top: 4px solid gold;
  border-right: 4px solid gold;

  border-top-right-radius: 8px;
}

/* Bottom-left */
.gold-corner-card::after {
  content: "";
  position: absolute;

  bottom: -3px;
  left: -3px;

  width: 100px;
  height: 100px;

  border-bottom: 4px solid gold;
  border-left: 4px solid gold;

  border-bottom-left-radius: 8px;
}

/* =========================
   LEFT CONTENT
========================= */

.name {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
}

.title {
  font-size: 1.1rem;
  margin-top: 10px;
}


/* =========================
   PROFILE ORBIT
========================= */

.profile-orbit {
  position: relative;
  width: 400px;
  height: 400px;
}

/* iPad Mini and other tablets */
@media (min-width: 601px) and (max-width: 800px) {
  .profile-orbit {
    width: 350px;
    height: 350px;
  }
  .name {
    font-size: 2.0rem;
  }
}

/* Mobile phones */
@media (max-width: 600px) {
  .profile-orbit {
    width: 300px;
    height: 300px;
  }
  .name {
    font-size: 1.8rem;
  }
}



/* Outer circle */

.orbit {
  position: absolute;

  inset: 0;

  border: 2px solid rgba(255, 215, 0, 0.3);

  border-radius: 50%;
}


/* Profile */

.profile-image {
  position: absolute;

  top: 50%;
  left: 50%;

  width: 220px;
  height: 220px;

  transform: translate(-50%, -50%);

  border-radius: 50%;
  overflow: hidden;

  border: 4px solid #d4af37;

  z-index: 2;
}

.profile-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}


/* =========================
   TECHNOLOGY LOGOS
========================= */

.tech-logo {
  position: absolute;

  width: 70px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #111;

  border: 2px solid #d4af37;

  color: white;

  font-size: 12px;
  font-weight: 600;

  z-index: 3;

  box-shadow:
    0 0 15px rgba(212, 175, 55, 0.3);
}

.tech-logo img {
  width: 80%;
  height: 80%;
  object-fit: contain;
  display: block;
}

/* Top */

.vue {
  top: -27px;
  left: 50%;
  transform: translateX(-50%);
}


/* Top right */

.nuxt {
  top: 35px;
  right: 10px;
}


/* Right */

.node {
  right: -27px;
  top: 50%;
  transform: translateY(-50%);
}


/* Bottom */

.js {
  bottom: -27px;
  left: 50%;
  transform: translateX(-50%);
}


/* Bottom left */

.vscode {
  bottom: 35px;
  left: 10px;
}


/* Left */

.git {
  left: -27px;
  top: 50%;
  transform: translateY(-50%);
}


/* =========================
   CARD ANIMATION
========================= */

.slide-in {
  animation: slideFromLeft 1s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes slideFromLeft {
  from {
    opacity: 0;
    transform: translateX(-80px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
